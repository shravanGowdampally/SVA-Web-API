import React from "react";
import Menu from "./Menu";
import TopBar from "./TopBar";
import { useStyles } from "../Styles/CustomStyles";
import GlobalState from "../GlobalState/GlobalState";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";

const Layout = (props) => {
  const classes = useStyles();
  //const location = useLocation();

  return (
    <GlobalState>
      <div style={{ display: "flex" }}>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <TopBar></TopBar>
            {/*  <Menu defaultLoad={location.pathname}></Menu>  */}
            <Menu></Menu>
            <ToastContainer />
          </div>
        </div>
      </div>
    </GlobalState>
  );
};

export default Layout;