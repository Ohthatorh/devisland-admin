import { Box, IconButton, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { FC } from "react";
import Link from "next/link";
import { Logo } from "@/assets/icons";

interface IAppSidebarHeader {
  isVisibleMenu: boolean;
  handleClick: () => void;
}

const AppSidebarHeader: FC<IAppSidebarHeader> = ({
  isVisibleMenu,
  handleClick,
}) => {
  return (
    <Box
      sx={{
        p: "8px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {isVisibleMenu && (
        <Link href="/">
          <Logo />
        </Link>
      )}
      <Tooltip title={isVisibleMenu ? "Скрыть меню" : "Показать меню"}>
        <IconButton onClick={handleClick}>
          {isVisibleMenu ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default AppSidebarHeader;
