import { Avatar, Box, Typography } from "@mui/material";
import { FC } from "react";
import OptionsMenu from "./options-menu";

interface IAppSidebarUser {
  open: boolean;
}

const AppSidebarUser: FC<IAppSidebarUser> = ({ open }) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: "8px", p: "8px 16px" }}
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
      {open && (
        <>
          <Box>
            <Typography>Riley Carter</Typography>
            <Typography>riley@email.com</Typography>
          </Box>
          <OptionsMenu />
        </>
      )}
    </Box>
  );
};

export default AppSidebarUser;
