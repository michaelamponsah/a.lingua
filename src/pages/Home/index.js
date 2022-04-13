import React from "react";
import NavigationBar from "../../components/NavigationBar";
import classes from "./Home.module.css"

const Homepage = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <section className={classes["hero-section"]}></section>
    </React.Fragment>
  );
};

export default Homepage;
