import React,  { useState } from "react";
import { useStyles } from "../Modules/Styles/CustomStyles";
import Button from '@material-ui/core/Button';

const Counter = (props) => {
    const classes = useStyles();
    const [currentCount, setCurrentCount] = useState(0);

 
const incrementCounter = () => {
  
    setCurrentCount(currentCount + 1)
}

    return (<div className={classes.pageContent}>
        <h1>Counter</h1>
        <p>This is a simple example of a React component.</p>
        <p aria-live="polite">Current count: <strong>{currentCount}</strong></p>
        <Button variant="contained" color="primary" onClick={incrementCounter}>
            Primary
      </Button>
    </div>
    );
};

export default Counter;