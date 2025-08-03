/* eslint-disable @typescript-eslint/no-explicit-any */
import { SidebarData } from "../model/types";

export function normalizeSidebar(data: any): SidebarData[] {
  return data.map((item: any) => ({
    id: item.id,
    label: item.name,
    path: item.url,
  }));
}
