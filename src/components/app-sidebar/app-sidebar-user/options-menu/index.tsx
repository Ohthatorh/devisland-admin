import { FC } from "react";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

interface IOptionsMenu {
  anchorEl: null | HTMLElement;
  isOpenOptionsMenu: boolean;
  handleClose: () => void;
}

const OptionsMenu: FC<IOptionsMenu> = ({
  anchorEl,
  isOpenOptionsMenu,
  handleClose,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id="menu"
      open={isOpenOptionsMenu}
      onClose={handleClose}
      onClick={handleClose}
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
  );
};

export default OptionsMenu;
