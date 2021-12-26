import React from "react";
import classes from "./card.module.css";

export default function Card(props) {
  return (
    <React.Fragment>
      <div className={classes.card}>
        <div className={classes.cardInside}>{props.children}</div>
      </div>
    </React.Fragment>
  );
}
