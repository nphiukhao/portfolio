import React from "react";
import FindpetsFullscreen from "../../Images/findpets_fullscreen.png";
import FindpetsMobile from "../../Images/findpets_mobile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";

export default function Project3Modal(props) {
  return (
    <>
      <div className="modal">
        <h3>Find Pets</h3>
        <div className="project-1">
          <div className="slider-container">
            <div className="slides">
              <div className="slide-img" id="i1">
                <img
                  className="fullscreenshot"
                  src={FindpetsFullscreen}
                  alt="Browser screenshot of Find Pets"
                />
              </div>
              <div className="slide-img" id="i2">
                <img
                  className="mobilescreenshot"
                  src={FindpetsMobile}
                  alt="Mobile screenshot of Find Pets"
                />
              </div>
            </div>
            <a href="#i1"> </a>
            <a href="#i2"> </a>
          </div>
          <section className="project-info" role="document">
            <p className="p-explain">
              Find Pets is a cat and dog adoption application built with a queue
              data structure. Users can enter into an adoption queue and adopt
              the next up cat or dog. This was built with the intention of
              ensuring that the animals that have an at the shelter the longest
              get a loving home first.
            </p>
            <div className="projectLinks">
              <a
                href="https://github.com/nphiukhao/findpets-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://findpets.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
            <p>
              <span className="green">
                Built using: React, React Router, HTML5, CSS3, Node, Express,
                Jest
              </span>
            </p>
          </section>
        </div>
      </div>

      <button
        className="close"
        onClick={() => props.closeModal("showMProject3")}
      >
        <FontAwesomeIcon className="ghlogo" icon={faTimes} size="4x" />
      </button>
    </>
  );
}
