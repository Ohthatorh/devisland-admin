"use client";

import { Breadcrumbs, Link, Typography } from "@mui/material";
import { FC } from "react";
import NextLink from "next/link";
import { useBreadcrumbs } from "../app-provider";

const AppBreadcrumbs: FC = () => {
  const { crumbs } = useBreadcrumbs();
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      <Link component={NextLink} underline="hover" color="inherit" href="/">
        MUI
      </Link>
      {crumbs?.map((crumb, index) =>
        index === crumbs.length - 1 ? (
          <Typography key={index} sx={{ color: "text.primary" }}>
            {crumb.label}
          </Typography>
        ) : (
          <Link
            key={index}
            component={NextLink}
            underline="hover"
            color="inherit"
            href={crumb.href}
          >
            {crumb.label}
          </Link>
        )
      )}
    </Breadcrumbs>
  );
};

export default AppBreadcrumbs;
