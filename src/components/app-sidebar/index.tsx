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
  const [isVisibleMenu, setIsVisibleMenu] = useState(true);

  const handleClick = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };
  return (
    <MuiDrawer
      variant="permanent"
      className={clsx(styles.drawer, {
        [styles.drawer__open]: isVisibleMenu,
        [styles.drawer__close]: !isVisibleMenu,
      })}
      classes={{
        paper: styles.drawer__container,
      }}
    >
      <AppSidebarHeader
        handleClick={handleClick}
        isVisibleMenu={isVisibleMenu}
      />
      <Divider />
      <Box className={styles.contentBox}>
        <AppSidebarMenuContent isVisibleMenu={isVisibleMenu} />
      </Box>
      <Divider />
      <AppSidebarUser isVisibleMenu={isVisibleMenu} />
    </MuiDrawer>
  );
};

export default AppSidebar;
