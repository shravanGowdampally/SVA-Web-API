import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SettingsIcon from '@material-ui/icons/Settings';
import { useStyles } from "../Styles/CustomStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { List } from "@material-ui/core";
import MenuItem from "./MenuItem";
//import Home from "../Home/Home";
import { Home as Home2 } from "../../components/Home";
import Counter from "../../components/Counter";
import { FetchData } from "../../components/FetchData";


import Search from "../Search/Search";
import AddClient from "../Client/AddClient";
import Admin from "../Admin/Admin";
import "./MenuStyle.css";

const baseUrl = process.env.REACT_APP_BASE_URL;
const Menu = (props) => {
  const [homeSelected, setHomeActiveLink] = useState(
    props.defaultLoad == "/home"
  );
  const [addClientSelected, setAddClientLink] = useState(
    props.defaultLoad == "/addClient"
  );

  const handleActiveLink = (selectedMenu) => {
    setHomeActiveLink(false);
    switch (selectedMenu) {
      case "home":
        setHomeActiveLink(true);
        break;
      case "addClient":
        setAddClientLink(true);
            break;
        case "Search":
            setAddClientLink(true);
            break;
        case "Admin":
            setAddClientLink(true);
            break;
      default:
        setHomeActiveLink(true);
        break;
    }
  };
  const classes = useStyles();

  return (
    <Router basename={baseUrl}>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        open={true}
      >
        {/* <div classname={classes.drawerInner}> */}
        <div>
          {/*   <div classname={classes.drawerHeader} /> */}
          {/*  <div classname={classes.menuTopMargin}> */}
          <div>
            {/*  <List classname={classes.menuTopMargin}> */}
            <List style={{ top: 80 }}>
                          {/*  <MenuItem
                idIcon="aHomeIcon"
                idLabel="divHomeLabel"
                onClick={() => handleActiveLink("home")}
                selected={homeSelected}
                to="/home"
                image={<HomeIcon fontSize="large" />}
                normalCss={true}
                label="Home"
                enable={true}
                          ></MenuItem> */}
                          <MenuItem
                              idIcon="aHomeIcon2"
                              idLabel="divHomeLabel2"
                              onClick={() => handleActiveLink("home2")}
                              selected={homeSelected}
                              to="/home2"
                              image={<HomeIcon fontSize="large" />}
                              normalCss={true}
                              label="Home2"
                              enable={true}
                          ></MenuItem>
              <MenuItem
                idIcon="aAddClientIcon"
                idLabel="divAddClientLabel"
                onClick={() => handleActiveLink("addClient")}
                selected={addClientSelected}
                to="/AddClient"
                image={<PersonAddIcon fontSize="large" />}
                normalCss={true}
                label="Add Client"
                enable={true}
                          ></MenuItem>
                          <MenuItem
                              idIcon="SearchIcon"
                              idLabel="divSearchIcon"
                              onClick={() => handleActiveLink("Search")}
                              selected={addClientSelected}
                              to="/Search"
                              image={<SearchIcon fontSize="large" />}
                              normalCss={true}
                              label="Search"
                              enable={true}
                          ></MenuItem>
                          <MenuItem
                              idIcon="SettingsIcon"
                              idLabel="divSettingsIcon"
                              onClick={() => handleActiveLink("Admin")}
                              selected={addClientSelected}
                              to="/Admin"
                              image={<SettingsIcon fontSize="large" />}
                              normalCss={true}
                              label="Admin"
                              enable={true}
                          ></MenuItem>
            </List>
          </div>
        </div>
      </Drawer>
      <Switch>
              <Route path="/" component={Home2} exact />
              {/*  <Route path="/home" component={Home} exact /> */}
              <Route path="/home2" component={Home2} exact />
              <Route path="/addClient" component={AddClient} exact />
              <Route path="/Search" component={Counter} exact />
              <Route path="/Admin" component={FetchData} exact />
      </Switch>
    </Router>
  );
};

export default Menu;
