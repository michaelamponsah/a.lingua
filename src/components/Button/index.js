import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, type = "button", otherStyles, id = "btn-id" }) => {
  return (
    <React.Fragment>
      <div className={classes["button-wrapper"]}>
        <button
          className={classes.button}
          id={id}
          type={type}
          style={otherStyles}
        >
          {children}
        </button>
      </div>
    </React.Fragment>
  );
};

export default Button;
