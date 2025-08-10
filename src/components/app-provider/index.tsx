import { ThemeProvider } from "next-themes";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import { FC } from "react";
import { appTheme } from "@/styles/theme";

interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider: FC<IAppProvider> = ({ children }) => {
  return (
    <ThemeProvider>
      <MUIThemeProvider theme={appTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
