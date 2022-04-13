import React from "react";
import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <nav className={classes["navigation-wrapper"]}>
      <div className={classes["logo-wrapper"]}>
        <span className={classes.logo}>a.lingua</span>
      </div>
      <div className={classes["button-wrapper"]}>
        <button className={classes.button}>Get started</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
