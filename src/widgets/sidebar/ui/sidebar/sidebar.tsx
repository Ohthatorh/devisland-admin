import { ISidebar, TSidebarItem } from "../../model";
import { SidebarItem } from "./sidebar-item/sidebar-item";

export function Sidebar({ sidebarItems }: ISidebar) {
  return (
    <aside>
      {sidebarItems.map((item: TSidebarItem) => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </aside>
  );
}
