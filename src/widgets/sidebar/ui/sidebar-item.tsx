export function SidebarItem(item: any) {
  console.log(item);
  return (
    <li>
      <a href={item.path}>{item.label}</a>
    </li>
  );
}
