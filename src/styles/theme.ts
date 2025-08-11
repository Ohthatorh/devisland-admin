"use client";

import { createTheme } from "@mui/material/styles";
import { colorSchemes, typography } from "./_theme-primitives";

export const appTheme = createTheme({
  colorSchemes,
  cssVariables: {
    colorSchemeSelector: "class",
  },
  typography,
});
