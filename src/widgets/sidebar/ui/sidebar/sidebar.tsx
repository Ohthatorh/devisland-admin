import { Box } from "@mui/material";
import { SidebarItem } from "./sidebar-item/sidebar-item";
import { ISidebar, TSidebarItem } from "@/entities/sidebar";

export function Sidebar({ sidebarItems }: ISidebar) {
  return (
    <Box component="aside">
      {sidebarItems.map((item: TSidebarItem) => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </Box>
  );
}
