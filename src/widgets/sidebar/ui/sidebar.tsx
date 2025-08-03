"use client";

import { useEffect, useState } from "react";
import { getSidebarData } from "@/entities/sidebar/api/getSidebar";
import { SidebarItem } from "./sidebar-item";

export function Sidebar() {
  const [items, setItems] = useState([]) as any;

  useEffect(() => {
    getSidebarData().then((data) => setItems(data));
  }, []);

  return (
    <aside>
      {items.map((item: any) => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </aside>
  );
}
