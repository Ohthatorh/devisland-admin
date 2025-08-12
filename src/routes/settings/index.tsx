"use client";

import { useBreadcrumbs } from "@/components/app-provider";
import { FC, useEffect } from "react";

const Settings: FC = () => {
  const { setCrumbs } = useBreadcrumbs();
  useEffect(() => {
    setCrumbs([{ label: "Настройки", href: "/settings/" }]);
  }, [setCrumbs]);
  return <div>Settings</div>;
};

export default Settings;
