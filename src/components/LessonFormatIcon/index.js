import React from "react";
import classes from "./LessonFormatIconStyles.module.css";

const LessonFormatIcon = ({ svgIconPath, altText, description }) => {
  return (
    <div className={classes["icon-component"]}>
      <img src={svgIconPath} alt={altText} className={classes.img}/>
      <p>{description}</p>
    </div>
  );
};

export default LessonFormatIcon;
