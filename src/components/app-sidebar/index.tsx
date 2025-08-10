"use client";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { FC, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { Logo } from "@/assets/icons";
import { TSidebarItem } from "./app-sidebar.types";
import AppSidebarLink from "./app-sidebar-link";
import styles from "./app-sidebar.module.scss";
import AppSidebarUser from "./app-sidebar-user";

export const DEFAULT_SIDEBAR_ITEMS: TSidebarItem[] = [
  { id: 1, label: "Дашборд", path: "/", icon: "dashboard" },
  { id: 2, label: "Заказы", path: "/orders/", icon: "receipt" },
];

const AppSidebar: FC = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(styles.drawer, {
        [styles.drawer__open]: open,
        [styles.drawer__close]: !open,
      })}
      classes={{
        paper: styles.drawer__container,
      }}
    >
      <div className={styles.drawer__header}>
        {open && (
          <Link className={styles.drawer__logo} href="/">
            <Logo />
          </Link>
        )}
        <IconButton onClick={handleClick}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {DEFAULT_SIDEBAR_ITEMS.map((item) => (
          <AppSidebarLink key={item.id} item={item} open={open} />
        ))}
      </List>
      <AppSidebarUser open={open} />
    </Drawer>
  );
};

export default AppSidebar;
