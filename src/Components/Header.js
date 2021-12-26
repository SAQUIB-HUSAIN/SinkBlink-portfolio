import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <React.Fragment>
      <div className={classes.headerContainer}>
        <div className={classes.heading}>Saquib Hazari</div>
        <div className={classes.headerList}>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName={classes.active} to="/Home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/About">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}
