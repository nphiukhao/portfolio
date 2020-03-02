import React from "react";
import AlgorithMeFullscreen from "../../Images/AlgorithMe_fullscreen.png";
import AlgorithMeMobile from "../../Images/AlgorithMe_mobile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";

export default function Project2Modal(props) {
  return (
    <>
      <div className="modal">
        <h3>AlgorithMe</h3>
        <div className="project-1">
          <div className="slider-container">
            <div className="slides">
              <div className="slide-img" id="i1">
                <img
                  className="fullscreenshot"
                  src={AlgorithMeFullscreen}
                  alt="Browser screenshot of Chore Runner"
                />
              </div>
              <div className="slide-img" id="i2">
                <img
                  className="mobilescreenshot"
                  src={AlgorithMeMobile}
                  alt="Mobile screenshot of Chore Runner"
                />
              </div>
            </div>
            <a href="#i1"> </a>
            <a href="#i2"> </a>
          </div>
          <section className="project-info" role="document">
            <p className="p-explain">
              Responsive educational application build using a Linked List data
              structure and spaced repetition algorithm. Users can learn basic
              <span className="green">javascript algorithms</span>such as
              <span className="green">search and sort algorithms.</span>
            </p>
            <div className="projectLinks">
              <a
                href="https://github.com/nphiukhao/algorithme-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://algorith-me.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
            <p>
              <span className="green">
                Built using: React, React Router, HTML5, CSS3, Node, Express,
                PostgreSQL, Mocha, Chai, Enzyme, Jest, Cypress
              </span>
            </p>
          </section>
        </div>
      </div>

      <button
        className="close"
        onClick={() => props.closeModal("showMProject2")}
      >
        <FontAwesomeIcon className="ghlogo" icon={faTimes} size="4x" />
      </button>
    </>
  );
}
