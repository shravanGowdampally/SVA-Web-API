import React from "react";
import { useStyles } from "../Styles/CustomStyles";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ListItem } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

const styles = (theme) => ({
  listIcon: {
    color: "#FFFFFF", // white
  },
  listItemText: {
    color: theme.palette.labelCommonLight,
    fontSize: 10.5,
    float: "left",
    textAlign: "center",
    whiteSpace: "pre-wrap",
    height: "30px",
    marginTop: "4px",
  },
  highlight: {
    background: "rgb(62, 85, 104)",
    textAlign: "center",
  },
  normal: {
    background: "rgb(38, 52, 63)",
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    paddingBottom: "10px",
    paddingLeft: "inherit",
  },
});

const MenuItem = (props) => {
  const classes = useStyles();
  return props.enable ? (
    <div>
      <Link to={props.to}>
        <ListItem
          button
          classes={{
            root: props.selected
              ? props.classes.highlight
              : props.classes.normal,
          }}
          onClick={props.onClick}
        >
          <div className={props.classes.container}>
            <div id={props.idIcon} className={props.classes.listIcon}>
              {props.image}

              {/*  
              id={props.idLabel}
              className={
                props.classes.listItemText + " " + props.classes.leftMargin6
              }
            > */}
              {props.label}
            </div>
          </div>
        </ListItem>
      </Link>
    </div>
  ) : (
    <div>
      <Tooltip>
        <ListItem>
          <div className={props.classes.container}>
            <div id={props.id} className={props.classes.listIcon}>
              {props.image}
            </div>
            <div
              className={
                props.classes.listItemText + " " + props.classes.leftMargin6
              }
            >
              {props.label}
              <br /> {props.label}
            </div>
          </div>
        </ListItem>
      </Tooltip>
    </div>
  );
};

export default withStyles(styles)(MenuItem);
