"use client";

import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const appTheme = createTheme({
  cssVariables: true,
  typography: {
    allVariants: {
      fontSize: 14,
      fontFamily: roboto.style.fontFamily,
    },
  },
});
