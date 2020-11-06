import React from "react";
import { useStyles } from "../Styles/CustomStyles";
//import { makeStyles } from "@material-ui/core/styles";

/* const useStyles = makeStyles({
  root3: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
}); */

const Test1 = (props) => {
  const classes = useStyles();
  // return <div classname={classes.content2}> "Test 1 page" </div>;
  return <div className={classes.pageContent}>Hook</div>;
};

export default Test1;
