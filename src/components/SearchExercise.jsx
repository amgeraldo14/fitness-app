import React from "react";

import { useEffect, useState } from "react";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { HorizontalScrollbar } from "./HorizontalScrollbar";

export const SearchExercise = ({
  setExercises,
  bodyPart,
  setBodyPart,
  topPage,
}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
        );
      });
      setSearch("");
      setExercises(searchedExercises);
      topPage.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise You <br /> Should Know
      </Typography>
      <Box
        position="relative"
        mb="72px"
        component="form"
        onSubmit={handleSearch}
      >
        <TextField
          sx={{
            input: {
              fontWeight: 700,
              border: "none",
              borderRadius: "4px",
              paddingRight: { lg: "183px", xs: "88px" },
            },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#FFF",
            borderRadius: "4px",
          }}
          height="56px"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: "100%",
            maxWidth: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
          // bgcolor: "salmon",
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          topPage={topPage}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};
