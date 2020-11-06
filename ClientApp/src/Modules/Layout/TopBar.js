import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import shared from "../Shared";

const { constants } = shared;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
    marginTop: 0,
  },
  menuBotton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    height: "90px !important",
    marginLeft: "80px !important",
  },
  appbar: {
    position: "flex",
    //backgroundColor: theme.palette.labelAppBar,
    //backgroundColor: "#007D57",constants.colors.TopBar
    backgroundColor: constants.colors.TopBar,
    zIndex: theme.zIndex.navDrawer + 1,
  },
}));
const TopBar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        classes={{
          root: classes.appbar,
        }}
      >
        <Toolbar
          classes={{
            root: classes.toolbar,
          }}
        ></Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
