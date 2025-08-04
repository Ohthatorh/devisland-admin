import { ISidebarData } from "@/widgets/sidebar/model";

export function SidebarItem({ item }: ISidebarData) {
  console.log(item);
  return (
    <li>
      <a href={item.path}>{item.label}</a>
    </li>
  );
}
