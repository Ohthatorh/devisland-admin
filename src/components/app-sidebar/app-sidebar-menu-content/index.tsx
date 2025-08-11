import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import { TSidebarItem } from "../app-sidebar.types";
import AppSidebarLink from "./app-sidebar-link";
import { FC } from "react";
import AppSidebarThemeSwitcher from "./app-sidebar-theme-switcher";

const mainListItems: TSidebarItem[] = [
  { id: 1, label: "Дашборд", path: "/", icon: "dashboard" },
  { id: 2, label: "Заказы", path: "/orders/", icon: "receipt" },
  { id: 3, label: "Клиенты", path: "/clients/", icon: "people" },
];

const secondaryListItems = [
  { id: 1, label: "Настройки", path: "/settings/", icon: "settings" },
];

interface IAppSidebarMenuContent {
  open: boolean;
}

const AppSidebarMenuContent: FC<IAppSidebarMenuContent> = ({ open }) => {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List>
        {mainListItems.map((item, index) => (
          <AppSidebarLink key={index} open={open} item={item} />
        ))}
      </List>
      <List>
        {secondaryListItems.map((item, index) => (
          <AppSidebarLink key={index} open={open} item={item} />
        ))}
        <AppSidebarThemeSwitcher />
      </List>
    </Stack>
  );
};

export default AppSidebarMenuContent;
