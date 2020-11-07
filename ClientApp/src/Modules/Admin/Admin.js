import React, { useState } from "react";
import { useStyles } from "../../Modules/Styles/CustomStyles";

import Button from '@material-ui/core/Button';

const Admin = (props) => {
    const classes = useStyles();
    const [currentCount, setCurrentCount] = useState(0);


    const incrementCounter = () => {

        setCurrentCount(currentCount + 1)
    }

    return (<div className={classes.pageContent}>
        <h1>Admin</h1>
       
    </div>
    );
};

export default Admin;