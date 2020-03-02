import React from "react";
import ICookFullscreen from "../../Images/ICook_fullscreen.png";
import ICookMobile from "../../Images/ICook_mobile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";

export default function Project4Modal(props) {
  return (
    <>
      <div className="modal">
        <h3>ICooks</h3>
        <div className="project-1">
          <div className="slider-container">
            <div className="slides">
              <div className="slide-img" id="i1">
                <img
                  className="fullscreenshot"
                  src={ICookFullscreen}
                  alt="Browser screenshot of ICook"
                />
              </div>
              <div className="slide-img" id="i2">
                <img
                  className="mobilescreenshot"
                  src={ICookMobile}
                  alt="Mobile screenshot of ICook"
                />
              </div>
            </div>
            <a href="#i1"> </a>
            <a href="#i2"> </a>
          </div>
          <section className="project-info" role="document">
          <p className="p-explain">
            Users can store, update, and filter recipes based on time
            constraints and available ingredients.
            <span className="green">Save time, money,</span>and
            <span className="green">headaches.</span>
          </p>
          <div className="projectLinks">
            <a
              href="https://github.com/nphiukhao/ICook-App-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://icook.nphiukhao.now.sh"
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
          <p>ICook 2.0 with third-party API coming soon...</p>
        </section>
        </div>
      </div>

      <button
        className="close"
        onClick={() => props.closeModal("showMProject4")}
      >
        <FontAwesomeIcon className="ghlogo" icon={faTimes} size="4x" />
      </button>
    </>
  );
}
