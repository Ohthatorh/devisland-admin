import {
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { FC } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const AppHeaderSearch: FC = () => {
  return (
    <Button
      startIcon={<SearchRoundedIcon color="inherit" />}
      sx={{
        p: "8px 16px",
        width: "160px",
        display: "flex",
        alignItems: "flex-start",
        textTransform: "none",
        borderRadius: "8px",
      }}
      variant="text"
      color="inherit"
    >
      Найти...
    </Button>
  );
};

export default AppHeaderSearch;
