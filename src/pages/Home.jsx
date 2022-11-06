import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import { HeroBanner } from "../components/HeroBanner";
import { SearchExercise } from "../components/SearchExercise";
import { Exercises } from "../components/Exercises";
import { BodyPart } from "../components/BodyPart";
import { exerciseOptions, fetchData } from "../utils/fetchData";

export const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const topPage = useRef(null);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        topPage={topPage}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
        topPage={topPage}
      />
    </Box>
  );
};
