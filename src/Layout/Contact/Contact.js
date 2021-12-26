import React from "react";
import { Helmet } from "react-helmet";
import Button from "../../Components/Button";
import classes from "./contactPage.module.css";

export default function Contact() {
  return (
    <React.Fragment>
      <Helmet>
        <title>SinkBlink | Contact</title>
        <meta name="description" content="Saquib Hazari portfolio" />
        <meta
          name="keywords"
          content="saquib hazari, saquib hussain, portfolio saquib, saquib portfolio, hazari portfolio, Saquib Hazari, Saquib Hazari Portfolio, UI design, UX design, UI/UX, website design"
        />
      </Helmet>
      <div className={classes.formContainer}>
        <h1 className={classes.formHeading}>Contacts</h1>
        <p className={classes.formPara}>Hyderabad, India</p>
        <form className={classes.form}>
          <label htmlFor="username">Enter name</label>
          <input type="text" id="username" placeholder="Enter name" />
          <label htmlFor="email">Enter email</label>
          <input type="text" id="email" placeholder="Enter email" />
          <label htmlFor="message">Message</label>
          <textarea type="text" placeholder="Enter message" />
        </form>
        <Button>Submit</Button>
      </div>
    </React.Fragment>
  );
}
