import React from "react";
import classes from "./footer.module.css";

export default function footer() {
  return (
    <React.Fragment>
      <div className={classes.footerContainer}>
        <ul>
          <li>Linkedin</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className={classes.copyRight}>
        <div>All Right Reserved &copy; SinkBlink </div>
      </div>
    </React.Fragment>
  );
}
