import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import styles from "./app-sidebar-link.module.scss";
import { FC } from "react";
import { TSidebarItem } from "../app-sidebar.types";
import Icon from "@mui/material/Icon";
import Link from "next/link";

interface IAppSidebarLink {
  open: boolean;
  item: TSidebarItem;
}

const AppSidebarLink: FC<IAppSidebarLink> = ({ open, item }) => {
  return (
    <ListItem className={styles.listItem} disablePadding>
      <ListItemButton
        LinkComponent={Link}
        href={item.path}
        className={styles.link}
      >
        <Icon>{item.icon}</Icon>
        {open && <Typography>{item.label}</Typography>}
      </ListItemButton>
    </ListItem>
  );
};

export default AppSidebarLink;
