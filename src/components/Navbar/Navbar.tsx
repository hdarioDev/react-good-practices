import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import CustomDialog, { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { useSelector } from "react-redux";
import { AppsStore } from "@/redux/store";
import { FavoriteTable } from "./FavoriteTable";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Navbar = () => {
  const stateFavorites = useSelector((store: AppsStore) => store.favorites);

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App Project using React JS, MUI and Typescript
          </Typography>
          <IconButton
            color="inherit"
            aria-label="favorites"
            component="label"
            onClick={handleClick}
          >
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
