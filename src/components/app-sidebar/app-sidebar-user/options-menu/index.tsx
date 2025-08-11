"use client";

import MenuButton from "@/components/menu-button";
import { FC, MouseEvent, useState } from "react";
import {
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

// interface IOptionsMenu {}

const OptionsMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ ml: "auto" }}>
      <MenuButton onClick={handleClick}>
        <MoreVertRoundedIcon />
      </MenuButton>
      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        // sx={{
        //   [`& .${listClasses.root}`]: {
        //     padding: "4px",
        //   },
        //   [`& .${paperClasses.root}`]: {
        //     padding: 0,
        //   },
        //   [`& .${dividerClasses.root}`]: {
        //     margin: "4px -4px",
        //   },
        // }}
      >
        <MenuItem onClick={handleClose}>Кнопочка</MenuItem>
        <MenuItem onClick={handleClose}>Кнопочка Кнопочка</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Кнопочка</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon sx={{ marginRight: "auto" }}>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Выйти</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default OptionsMenu;
