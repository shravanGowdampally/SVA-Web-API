import React from "react";
import { useStyles } from "../Styles/CustomStyles";
import shared from "../Shared";

const { TextBox } = shared;

const AddClient = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.pageContent}>
            <TextBox />
        </div>
    );
};

export default AddClient;
