import React from "react";
import ChoreRunnerFullscreen from "../../Images/ChoreRunner_fullscreen.png";
import ChoreRunnerMobile from "../../Images/ChoreRunner_mobile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";

export default function Project1Modal(props) {
  return (
    <>
      <div className="modal">
        <h3>ChoreRunner</h3>
        <div className="project-1">
          <div className="slider-container">
            <div className="slides">
              <div className="slide-img" id="i1">
                <img
                  // className="fullscreenshot"
                  src={ChoreRunnerFullscreen}
                  alt="Browser screenshot of Chore Runner"
                />
              </div>
              <div className="slide-img" id="i2">
                <img
                  className="mobilescreenshot"
                  src={ChoreRunnerMobile}
                  alt="Mobile screenshot of Chore Runner"
                />
              </div>
            </div>
            <a href="#i1"> </a>
            <a href="#i2"> </a>
          </div>
          <section className="project-info" role="document">
            <p className="p-explain">
              Chore Runner is a full stack react application that acts as a
              gamified chore manager. Parents can
              <span className="green">create households</span>and
              <span className="green">
                assign tasks to the kids or members.
              </span>
            </p>
            <p className="p-explain">
              Kid users can
              <span className="green">see their tasks, clear them,</span>and,
              once they're approved,
              <span className="green">earn points and badges</span>
              to compete with other members in the household.
            </p>
            <div className="projectLinks">
              <a
                href="https://github.com/nphiukhao/Chorerunner-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://chore-runner.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
            <p>
              <span className="green">
                Built using: React, React Router, HTML5, CSS3, Node, Express,
                PostgreSQL, Mocha, Chai, Enzyme, Jest, Adobe Illustrator
              </span>
            </p>
          </section>
        </div>
      </div>

      <button
        className="close"
        onClick={() => props.closeModal("showMProject1")}
      >
        <FontAwesomeIcon className="ghlogo" icon={faTimes} size="4x"  />
      </button>
    </>
  );
}
