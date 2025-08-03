import { DEFAULT_SIDEBAR_ITEMS } from "../model/constants";

export async function getSidebarData(userId?: string) {
  if (!userId) return DEFAULT_SIDEBAR_ITEMS;

  const res = await fetch(`/api/sidebar?userId=${userId}`);
  return res.json();
}
