"use client";

import { useBreadcrumbs } from "@/components/app-provider";
import { FC, useEffect } from "react";

const Orders: FC = () => {
  const { setCrumbs } = useBreadcrumbs();
  useEffect(() => {
    setCrumbs([{ label: "Заказы", href: "/orders/" }]);
  }, [setCrumbs]);
  return <div>Orders</div>;
};

export default Orders;
