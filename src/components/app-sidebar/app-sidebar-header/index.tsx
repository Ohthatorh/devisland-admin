import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { FC } from "react";
import Link from "next/link";
import { Logo } from "@/assets/icons";

interface IAppSidebarHeader {
  open: boolean;
  handleClick: () => void;
}

const AppSidebarHeader: FC<IAppSidebarHeader> = ({ open, handleClick }) => {
  return (
    <Box
      sx={{
        p: "8px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {open && (
        <Link href="/">
          <Logo />
        </Link>
      )}
      <IconButton onClick={handleClick}>
        {open ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>
    </Box>
  );
};

export default AppSidebarHeader;
