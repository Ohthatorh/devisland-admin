"use client";

import { useBreadcrumbs } from "@/components/app-provider";
import { FC, useEffect } from "react";

const Clients: FC = () => {
  const { setCrumbs } = useBreadcrumbs();
  useEffect(() => {
    setCrumbs([{ label: "Клиенты", href: "/clients/" }]);
  }, [setCrumbs]);
  return <div>Clients</div>;
};

export default Clients;
