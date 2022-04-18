import React from "react";
import Button from "../Button";
import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
  const navlinkClickHandler = (event) => {
    event.preventDefault();
    const target = event.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const logoClickHandler = (event) => {
    event.preventDefault();
    const target = event.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };
  return (
    <nav className={classes["wrapper"]}>
      <div className="container">
        <div className={classes["navigation-items"]}>
          <div className={classes["logo-wrapper"]}>
            <a
              href="#hero-section"
              className={classes.logo}
              onClick={logoClickHandler}
            >
              a.lingua
            </a>
          </div>
          <a
            href="#get-in-touch"
            className={classes["get-started"]}
            onClick={navlinkClickHandler}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
