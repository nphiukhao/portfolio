import React from "react";
import ChoreRunnerFullscreen from '../../Images/ChoreRunner_fullscreen.png'
import ChoreRunnerMobile from "../../Images/ChoreRunner_mobile.png";
import "./Modal.css";

export default function Project1Modal(props) {
  return (
    <div className="modal">
      <h3>MODAL IN PROGRES</h3>
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

        <h3>Project title</h3>
        <p>description</p>
        <p>tech stack</p>
      </div>
      <button onClick={() => props.closeModal("showMProject1")}>close</button>
    </div>
  );
}
