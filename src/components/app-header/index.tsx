import { Box } from "@mui/material";
import { FC } from "react";
import AppBreadcrumbs from "../app-breadcrumbs";
import AppHeaderSearch from "./app-header-search";

const AppHeader: FC = () => {
  return (
    <Box
      component={"header"}
      sx={{
        p: "16px 0",
        display: "flex",
        gap: "16px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <AppBreadcrumbs />
      <AppHeaderSearch />
    </Box>
  );
};

export default AppHeader;
