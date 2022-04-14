import React from "react";
import classes from "./Button.module.css"

const Button = ({children}) => {
  return (
    <React.Fragment>
      <div className={classes["button-wrapper"]}>
        <button className={classes.button}>{children}</button>
      </div>
    </React.Fragment>
  );
};

export default Button;
