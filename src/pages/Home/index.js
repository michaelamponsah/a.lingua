import React from "react";
import Button from "../../components/Button";
import NavigationBar from "../../components/NavigationBar";
import classes from "./Home.module.css";
import LessonFormatIcon from "../../components/LessonFormatIcon";

import videoSVG from "../../assets/svg/Video.svg";
import textSVG from "../../assets/svg/Text.svg";
import audioSVG from "../../assets/svg/AudioWave.svg";
import animationSVG from "../../assets/svg/Animation.svg";

const Homepage = () => {
  const heroRightImage = require("../../assets/images/lady-on-yellow-bg.png");
  // const videoSVG = require("../../assets/svg/Video.svg")

  return (
    <React.Fragment>
      <NavigationBar />
      <section className={classes["hero-section-wrapper"]}>
        <div className="container">
          <div className={classes["hero-section-main"]}>
            <div className={`row ${classes["section-row"]}`}>
              <div className={`col`}>
                <div className={classes["left-side"]}>
                  <h1>Afro Lingua</h1>
                  <p>a new way of learning afro languages</p>
                  <div className={classes["btn-wrapper"]}>
                    <Button>We'd love to hear from you</Button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={classes["right-side"]}>
                  <img
                    src={heroRightImage}
                    alt="smiling lady with a smartphone"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes["second-section"]}>
        <div className={`container`}>
          <div className={classes["section-text-wrapper"]}>
            <p>
              Get a headstart in your learning journey with hundreds of lessons,
              assignments, word games &#38; quizzes from professionals.
            </p>
          </div>
        </div>
      </section>
      <section className={classes["third-section"]}>
        <div className="container">
          <div className={classes["leading-text"]}>
            <p>
              Access several hundreds of curated lessons in videos, text,
              animation and audio formats
            </p>
          </div>
          <div className={classes["icons-wrapper"]}>
            <div className="row">
              <div className="col">
                <LessonFormatIcon
                  svgIconPath={videoSVG}
                  altText="Video svg icon"
                  description="Video Lessons"
                />
              </div>
              <div className="col">
                <LessonFormatIcon
                  svgIconPath={textSVG}
                  altText="Video svg icon"
                  description="Text"
                />
              </div>
              <div className="col">
                <LessonFormatIcon
                  svgIconPath={audioSVG}
                  altText="Video svg icon"
                  description="Audio"
                />
              </div>
              <div className="col">
                <LessonFormatIcon
                  svgIconPath={animationSVG}
                  altText="Video svg icon"
                  description="Beautiful Animations"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Homepage;
