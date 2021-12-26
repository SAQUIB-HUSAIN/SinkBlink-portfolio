import React from "react";
import { Helmet } from "react-helmet";
import Card from "../../Card/card";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import classes from "./homePage.module.css";

export default function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>SinkBlink | Home</title>
        <meta name="description" content="Saquib Hazari portfolio" />
        <meta
          name="keywords"
          content="saquib hazari, saquib hussain, portfolio saquib, saquib portfolio, hazari portfolio, Saquib Hazari, Saquib Hazari Portfolio, UI design, UX design, UI/UX, website design"
        />
      </Helmet>
      <div className={classes.homeContainer}>
        <div>
          <div className={classes.homeHeading}>
            Choose Your Best Friend as a Designer.
          </div>
          <p className={classes.homePara}>Let's make your first design.</p>
          <Button>
            <Link className={classes.homeLink} to="/About">
              Know More
            </Link>
          </Button>
        </div>
        <div>
          <img className={classes.image} src="/Creative.png" alt="creative" />
        </div>
      </div>
      <div className={classes.homeContainer}>
        <div>
          <img className={classes.image} src="/color.png" alt="color" />
        </div>
        <div>
          <div className={classes.homeHeading}>Interaction Design.</div>
          <p className={classes.homePara}>
            Let's make your first design, with great responsive user Interface.
          </p>
        </div>
      </div>

      <div className={classes.rating}>
        <div className={classes.homeRating}>4.8x</div>
        <hr className={classes.horizontal} />
        <p className={classes.homePara}>
          Micro-interaction is the visual translation of what the user does
          (scrolling, changing page, clicking a button, etc.) in the product
          context. It is the detail that will create emotion in the user ,
          improve their experience by bringing more life to the interfaces.
        </p>
      </div>

      <div className={classes.cardSection}>
        <div>
          <div className={classes.cardMain}>My methodology</div>
        </div>
        <div className={classes.cardFlex}>
          <Card>
            <img className={classes.cardImg} src="/eye.png" alt="eye" />
            <div className={classes.cardHeading}>01 Explore</div>
            <p className={classes.cardParas}>
              I put myself in the shoes of your users to understand their needs.
            </p>
          </Card>
          <Card>
            <img className={classes.cardImg} src="/layer.png" alt="layer" />
            <div className={classes.cardHeading}>02 Design</div>
            <p className={classes.cardParas}>
              Together, we define the framework of the experience and will begin
              to formalize the user journey.
            </p>
          </Card>
          <Card>
            <img className={classes.cardImg} src="/code.png" alt="code" />
            <div className={classes.cardHeading}>03 Code</div>
            <p className={classes.cardParas}>
              We will generate several ideas to solve our problems.
            </p>
          </Card>
          <Card>
            <img className={classes.cardImg} src="/brain.png" alt="brain" />
            <div className={classes.cardHeading}>04 Logic</div>
            <p className={classes.cardParas}>
              We will design and create an interactive prototype.
            </p>
          </Card>
          <Card>
            <img className={classes.cardImg} src="/check.png" alt="check" />
            <div className={classes.cardHeading}>05 Testing</div>
            <p className={classes.cardParas}>
              We will analyze the prototype with real users in order to optimize
              and validate the solution.
            </p>
          </Card>
          <Card>
            <img className={classes.cardImg} src="/rocket.png" alt="rocket" />
            <div className={classes.cardHeading}>06 Deploy</div>
            <p className={classes.cardParas}>
              Once the prototype has been validated. We will be able to develop,
              launch and enhance the product.
            </p>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}
