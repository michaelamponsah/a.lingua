import React from "react";
import Button from "../../components/Button";
import NavigationBar from "../../components/NavigationBar";
import classes from "./Home.module.css";
import LessonFormatIcon from "../../components/LessonFormatIcon";

import videoSVG from "../../assets/svg/Video.svg";
import textSVG from "../../assets/svg/Text.svg";
import audioSVG from "../../assets/svg/AudioWave.svg";
import animationSVG from "../../assets/svg/Animation.svg";
import heroSVGImage from "../../assets/svg/HeroBg.svg";
import thirdSectionSVGImage from "../../assets/svg/ThirdSection.svg";

const Homepage = () => {
  // const heroRightImage = require("../../assets/images/lady-on-yellow-bg.png");

  return (
    <React.Fragment>
      <NavigationBar />
      {/* Make an inline style untill a proper solution is found  for svg bg-image */}
      <section
        className={classes["hero-section-wrapper"]}
        style={{
          backgroundImage: `url(${heroSVGImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className={classes["left-side-wrapper"]}>
            <div className={classes["left-side"]}>
              <h1>Afro Lingua</h1>
              <p>
                Bridging the gap in the literacy <br />
                of indigenous African languages
              </p>
              <div className={classes["btn-wrapper"]}>
                <Button>We'd love to hear from you</Button>
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
      <section
        className={classes["third-section"]}
        style={{
          backgroundImage: `url(${thirdSectionSVGImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
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
      <section id="get-in-touch" className={classes["fourth-section"]}>
        <div className="container">
          <div className={classes["form-wrapper"]}>
            <form className={classes["form"]}>
              <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="userEmail"
                  className={`form-control ${classes["input-field"]}`}
                  name="userEmail"
                  placeholder="yourname@exmaple.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="userName"
                  className={`form-control ${classes["input-field"]}`}
                  name="userName"
                  placeholder="Your full name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="userCountry" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  id="userCountry"
                  className={`form-control ${classes["input-field"]}`}
                  name="userCountry"
                  placeholder="Your country of origin"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="userLangPref" className="form-label">
                  Language of Preference
                </label>
                <input
                  type="text"
                  id="userLangPref"
                  className={`form-control ${classes["input-field"]}`}
                  name="userLangPref"
                  placeholder="Your language of preference"
                />
              </div>
              <div className="mb-3">
                <Button type="submit" otherStyles={{ width: "100%", backgroundColor: "#0362A7" }}>
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer className={classes.footer}>
        <p>&copy; 2022 All Rights Reserved, a.lingua </p>
        <p>Privacy Policy | Terms </p>
      </footer>
    </React.Fragment>
  );
};

export default Homepage;
