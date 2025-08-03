"use client";

import { CssBaseline } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "next-themes";
import { appTheme } from "../themes";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <MUIThemeProvider theme={appTheme}>
      <ThemeProvider>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MUIThemeProvider>
  );
}
