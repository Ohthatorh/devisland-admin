"use client";

import { useBreadcrumbs } from "@/components/app-provider";
import { FC, useEffect } from "react";

const Home: FC = () => {
  const { setCrumbs } = useBreadcrumbs();
  useEffect(() => {
    setCrumbs([]);
  }, [setCrumbs]);
  return <div>Home</div>;
};

export default Home;
