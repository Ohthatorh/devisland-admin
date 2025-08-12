"use client";

import { ThemeProvider } from "next-themes";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import { FC, useContext } from "react";
import { appTheme } from "@/styles/theme";
import { createContext, useState } from "react";

type TCrumb = {
  label: string;
  href: string;
};

type TBreadcrumbsContext = {
  crumbs: TCrumb[];
  setCrumbs: (crumbs: TCrumb[]) => void;
};

interface IAppProvider {
  children: React.ReactNode;
}

const BreadcrumbsContext = createContext<TBreadcrumbsContext>({
  crumbs: [] as { label: string; href: string }[],
  setCrumbs: () => {},
});

export const useBreadcrumbs = () => useContext(BreadcrumbsContext);

const AppProvider: FC<IAppProvider> = ({ children }) => {
  const [crumbs, setCrumbs] = useState<TCrumb[]>([]);
  return (
    <ThemeProvider>
      <MUIThemeProvider theme={appTheme}>
        <CssBaseline />
        <BreadcrumbsContext.Provider value={{ crumbs, setCrumbs }}>
          {children}
        </BreadcrumbsContext.Provider>
      </MUIThemeProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
