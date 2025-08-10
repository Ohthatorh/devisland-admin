export type TSidebarItem = {
  id: number;
  label: string;
  path: string;
  icon: string;
};

export interface ISidebarData {
  item: TSidebarItem;
}

export interface ISidebar {
  sidebarItems: TSidebarItem[];
}
