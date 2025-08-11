"use client";

import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AppSidebarUser from "./app-sidebar-user";
import AppSidebarMenuContent from "./app-sidebar-menu-content";
import AppSidebarHeader from "./app-sidebar-header";
import { FC, useState } from "react";
import styles from "./app-sidebar.module.scss";
import clsx from "clsx";

const AppSidebar: FC = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <MuiDrawer
      variant="permanent"
      className={clsx(styles.drawer, {
        [styles.drawer__open]: open,
        [styles.drawer__close]: !open,
      })}
      classes={{
        paper: styles.drawer__container,
      }}
    >
      <AppSidebarHeader handleClick={handleClick} open={open} />
      <Divider />
      <Box className={styles.contentBox}>
        <AppSidebarMenuContent open={open} />
      </Box>
      <Divider />
      <AppSidebarUser open={open} />
    </MuiDrawer>
  );
};

export default AppSidebar;
