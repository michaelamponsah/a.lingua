import React from "react";
import Button from "../Button";
import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <nav className={classes["wrapper"]}>
      <div className="container">
        <div className={classes["navigation-items"]}>
          <div className={classes["logo-wrapper"]}>
            <span className={classes.logo}>a.lingua</span>
          </div>
         <Button>Get started</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
