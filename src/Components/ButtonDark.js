import React from "react";
import classes from "./ButtonDark.module.css";

export default function ButtonDark(props) {
  return (
    <React.Fragment>
      <button className={classes.buttonDark} type={props.type || "button"}>
        {props.children}
      </button>
    </React.Fragment>
  );
}
