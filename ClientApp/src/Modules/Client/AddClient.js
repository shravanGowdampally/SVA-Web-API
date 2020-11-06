import React from "react";
import { useStyles } from "../Styles/CustomStyles";

const AddClient = (props) => {
  const classes = useStyles();

  return <div className={classes.pageContent}>This is add client page</div>;
};

export default AddClient;
