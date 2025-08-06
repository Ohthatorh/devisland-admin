"use client";

import { ISidebarData } from "@/entities/sidebar";
import { Typography } from "@mui/material";
import Link from "next/link";
import styles from "./sidebar-item.module.scss";

export function SidebarItem({ item }: ISidebarData) {
  console.log(item);
  return <Link href={item.path}>{item.label}</Link>;
}
