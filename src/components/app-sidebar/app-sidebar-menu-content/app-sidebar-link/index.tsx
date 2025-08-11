import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { FC } from "react";
import Icon from "@mui/material/Icon";
import Link from "next/link";
import { TSidebarItem } from "../../app-sidebar.types";

interface IAppSidebarLink {
  open: boolean;
  item: TSidebarItem;
}

const AppSidebarLink: FC<IAppSidebarLink> = ({ open, item }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        LinkComponent={Link}
        href={item.path}
        sx={{ display: "flex", alignItems: "center", gap: "20px" }}
      >
        <Tooltip title={item.label}>
          <ListItemIcon sx={{ minWidth: 0 }}>
            <Icon>{item.icon}</Icon>
          </ListItemIcon>
        </Tooltip>
        {open && <ListItemText primary={item.label} sx={{ m: 0 }} />}
      </ListItemButton>
    </ListItem>
  );
};

export default AppSidebarLink;
