import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { HorizontalScrollbar } from "./HorizontalScrollbar";
import { Loader } from "./Loader";

export const SimiliarExercises = ({
  targetMuscleExercises,
  equipmentExercises,
}) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      {/* <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ position: "relative", marginBottom: 20 }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack> */}
    </Box>
  );
};
