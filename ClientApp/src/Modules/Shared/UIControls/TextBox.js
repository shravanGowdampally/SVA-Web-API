import React from "react";
import TextField from '@material-ui/core/TextField';

const TextBox = (props) => {
    return (
        <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            variant="outlined"
        />
    );
};

export default TextBox;
