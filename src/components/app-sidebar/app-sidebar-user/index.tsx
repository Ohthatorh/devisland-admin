import { Avatar, Box, Typography } from "@mui/material";
import { FC, MouseEvent, useState } from "react";
import OptionsMenu from "./options-menu";
import MenuButton from "@/components/menu-button";

interface IAppSidebarUser {
  isVisibleMenu: boolean;
}

const AppSidebarUser: FC<IAppSidebarUser> = ({ isVisibleMenu }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpenOptionsMenu = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuButton
        onClick={handleClick}
        disableRipple
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          p: "8px 16px",
        }}
      >
        <Avatar
          sizes="small"
          alt="Riley Carter"
          src="https://sun9-20.userapi.com/s/v1/ig2/-kFOqjr-UTadwDWr7cwf7ZXP8Bq8loIhSxGfuLe9kvCafk7BiH56FGZDEk6W17zeGOD9HJNnKJYIXlT3GI_SE7jm.jpg?quality=95&crop=738,295,1413,1413&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280&ava=1&u=3oJ-L81-uHZWEaVvglf19AiGLT14tcP-CKF0Rhumwkg&cs=200x200"
          sx={{
            width: 42,
            height: 42,
          }}
        />
        {isVisibleMenu && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography fontSize={"14px"} color="text.primary">
              Riley Carter
            </Typography>
            <Typography fontSize={"12px"} color="text.secondary">
              riley@email.com
            </Typography>
          </Box>
        )}
      </MenuButton>
      <OptionsMenu
        anchorEl={anchorEl}
        isOpenOptionsMenu={isOpenOptionsMenu}
        handleClose={handleClose}
      />
    </>
  );
};

export default AppSidebarUser;
