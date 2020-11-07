import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import Menu from "../Modules/Layout/Menu";
import TopBar from "../Modules/Layout/TopBar";
import { useStyles } from "../Modules/Styles/CustomStyles";
import GlobalState from "../Modules/GlobalState/GlobalState";
import { ToastContainer } from "react-toastify";

//export class Layout extends Component {
//  static displayName = Layout.name;

//  render () {
//    return (
//      <div>
//        <NavMenu />
//        <Container>
//          {this.props.children}
//        </Container>
//      </div>
//    );
//  }
//}

const Layout = (props) => {
    const classes = useStyles();
 

    return (
        <GlobalState>
            <div style={{ display: "flex" }}>
                <div className={classes.root}>
                    <div className={classes.appFrame}>
                        <TopBar></TopBar>
                        <Menu></Menu>
                        {/*  <NavMenu />
                        <Container>
                            {props.children}
                        </Container>
                         <Menu defaultLoad={location.pathname}></Menu>  */}
                       
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </GlobalState>
    );
};

export default Layout;