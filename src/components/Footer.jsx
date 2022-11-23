import React from "react";
import { Box, Stack } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";
export const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4" width="100%">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px" pb="20px">
        <img src={Logo} alt="logo" width="200px" height="40px"></img>
      </Stack>
    </Box>
  );
};
