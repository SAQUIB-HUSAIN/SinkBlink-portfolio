import React from "react";
import { Helmet } from "react-helmet";
import ButtonDark from "../../Components/ButtonDark";
import Button from "../../Components/Button";
import classes from "./about.module.css";

export default function About() {
  return (
    <React.Fragment>
      <Helmet>
        <title>SinkBlink | About</title>
        <meta name="description" content="Saquib Hazari portfolio" />
        <meta
          name="keywords"
          content="saquib hazari, saquib hussain, portfolio saquib, saquib portfolio, hazari portfolio, Saquib Hazari, Saquib Hazari Portfolio, UI design, UX design, UI/UX, website design"
        />
      </Helmet>
      <div className={classes.aboutContainer}>
        <div>
          <h1 className={classes.aboutHeading}>Hi There!</h1>
          <p className={classes.aboutPara}>
            Forged by passion for design and developing products. And have a
            huge desire for building Web Applications and developing profession
            on Designing. Learn more about my journey below.
          </p>
        </div>
        <img className={classes.aboutImg} src="/saquib.png" alt="saquib" />
      </div>
      <div className={classes.aboutHeading}>
        Skills that I'm having
        <div className={classes.buttonFlex}>
          <ButtonDark>Html/Css</ButtonDark>
          <ButtonDark>JavaScript</ButtonDark>
          <ButtonDark>NodeJs</ButtonDark>
          <ButtonDark>Sass</ButtonDark>
          <ButtonDark>ReactJs</ButtonDark>
          <ButtonDark>UI design</ButtonDark>
          <ButtonDark>UX design</ButtonDark>
          <ButtonDark>Figma</ButtonDark>
          <ButtonDark>User Interview</ButtonDark>
          <ButtonDark>Content Architecture</ButtonDark>
          <ButtonDark>LeaderShip</ButtonDark>
          <ButtonDark>Adobe XD</ButtonDark>
          <ButtonDark>Adobe dimension</ButtonDark>
          <ButtonDark>Branding</ButtonDark>
        </div>
      </div>
      <div className={classes.formContainer}>
        <h1 className={classes.formHeading}>Want to give a feedback!</h1>
        <form className={classes.form}>
          <label htmlFor="username">Enter name</label>
          <input type="text" id="username" />
          <label htmlFor="message">Message</label>
          <textarea type="text" />
          <Button>Submit</Button>
        </form>
      </div>
    </React.Fragment>
  );
}
