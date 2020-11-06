import React from "react";
import { useStyles } from "../Styles/CustomStyles";

const Home = (props) => {
  const classes = useStyles();

  return <div className={classes.pageContent}>Hook</div>;
};

export default Home;
