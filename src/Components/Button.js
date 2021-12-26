import { Fragment } from "react/cjs/react.production.min";
import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <Fragment>
      <div className={classes.button} type={props.type || "button"}>
        {props.children}
      </div>
    </Fragment>
  );
}
