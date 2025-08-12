import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  useColorScheme,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkModeRounded";
import LightModeIcon from "@mui/icons-material/LightModeRounded";
import { FC, useState } from "react";

interface IAppSidebarThemeSwitcher {
  isVisibleMenu: boolean;
}

const AppSidebarThemeSwitcher: FC<IAppSidebarThemeSwitcher> = ({
  isVisibleMenu,
}) => {
  const { mode, systemMode, setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMode = (targetMode: "system" | "light" | "dark") => () => {
    setMode(targetMode);
    handleClose();
  };
  if (!mode) {
    return null;
  }
  const resolvedMode = (systemMode || mode) as "light" | "dark";
  const icon = {
    light: <LightModeIcon />,
    dark: <DarkModeIcon />,
  }[resolvedMode];
  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={handleClick}
        sx={{ display: "flex", alignItems: "center", gap: "20px" }}
      >
        <Tooltip title={"Тема"}>
          <ListItemIcon sx={{ minWidth: 0 }}>{icon}</ListItemIcon>
        </Tooltip>
        {isVisibleMenu && <ListItemText primary={"Тема"} sx={{ m: 0 }} />}
      </ListItemButton>
      <Menu
        anchorEl={anchorEl}
        id="theme-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem
          selected={mode === "light"}
          onClick={handleMode("light")}
          sx={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          <LightModeIcon />
          Светлая
        </MenuItem>
        <MenuItem
          selected={mode === "dark"}
          onClick={handleMode("dark")}
          sx={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          <DarkModeIcon />
          Темная
        </MenuItem>
      </Menu>
    </ListItem>
  );
};

export default AppSidebarThemeSwitcher;
