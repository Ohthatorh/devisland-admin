"use client";

import * as MuiIcons from "@mui/icons-material";

type IconName = keyof typeof MuiIcons;

export const DynamicMuiIcon = ({
  iconName,
  ...props
}: { iconName: IconName } & MuiIcons.SvgIconProps) => {
  const Icon = MuiIcons[iconName];
  return <Icon {...props} />;
};
