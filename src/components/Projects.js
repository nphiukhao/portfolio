import React, { Component } from "react";
import ChoreRunnerFullscreen from "../Images/ChoreRunner_fullscreen.png";
import AlgorithMeFullscreen from "../Images/AlgorithMe_fullscreen.png";
import ICookFullscreen from "../Images/ICook_fullscreen.png";
import FindpetsFullscreen from "../Images/findpets_fullscreen.png";
import Project1Modal from "./ProjectModal/Project1Modal";
import Project2Modal from "./ProjectModal/Project2Modal";
import Project3Modal from "./ProjectModal/Project3Modal";
import Project4Modal from "./ProjectModal/Project4Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <section id="projects" className="project-container">
        <h2>
          <span className="green">[</span>My Projects
          <span className="green">]</span>
        </h2>

        <div className="card-container">
          <button
            className="card-button"
            onClick={() => this.props.showModal("showMProject1")}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src={ChoreRunnerFullscreen}
                  alt="Browser screenshot of Chore Runner"
                />
              </div>
              <div className="card-text">
                <h4>
                  Chore Runner
                  <FontAwesomeIcon
                    className="card-icon"
                    icon={faArrowAltCircleRight}
                    size="1x"
                  />
                </h4>
                <p>
                  Built using: React, React Router, HTML5, CSS3, Node, Express,
                  PostgreSQL, Mocha, Chai, Enzyme, Jest, Adobe Illustrator
                </p>
              </div>
            </div>
          </button>
          {this.props.showMProject1 ? (
            <Project1Modal closeModal={this.props.closeModal} />
          ) : null}

          <button
            className="card-button"
            onClick={() => this.props.showModal("showMProject2")}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src={AlgorithMeFullscreen}
                  alt="Browser screenshot of AlgorithMe"
                />
              </div>
              <div className="card-text">
                <h4>
                  AlgorithMe
                  <FontAwesomeIcon
                    className="card-icon"
                    icon={faArrowAltCircleRight}
                    size="1x"
                  />
                </h4>
                <p>
                  Built using: React, React Router, HTML5, CSS3, Node, Express,
                  PostgreSQL, Mocha, Chai, Enzyme, Jest, Cypress
                </p>
              </div>
            </div>
          </button>
          {this.props.showMProject2 ? (
            <Project2Modal closeModal={this.props.closeModal} />
          ) : null}

          <button
            className="card-button"
            onClick={() => this.props.showModal("showMProject3")}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src={FindpetsFullscreen}
                  alt="Browser screenshot of Find Pets"
                />
              </div>
              <div className="card-text">
                <h4>
                  Find Pets
                  <FontAwesomeIcon
                    className="card-icon"
                    icon={faArrowAltCircleRight}
                    size="1x"
                  />
                </h4>
                <p>
                  Built using: React, React Router, HTML5, CSS3, Node, Express,
                  Jest
                </p>
              </div>
            </div>
          </button>
          {this.props.showMProject3 ? (
            <Project3Modal closeModal={this.props.closeModal} />
          ) : null}

          <button
            className="card-button"
            onClick={() => this.props.showModal("showMProject4")}
          >
            <div className="card">
              <div className="card-img">
                <img
                  src={ICookFullscreen}
                  alt="Browser screenshot of ICook"
                />
              </div>
              <div className="card-text">
                <h4>
                  ICook
                  <FontAwesomeIcon
                    className="card-icon"
                    icon={faArrowAltCircleRight}
                    size="1x"
                  />
                </h4>
                <p>
                  Built using: React, React Router, HTML5, CSS3, Node, Express,
                  PostgreSQL, Mocha, Chai, Enzyme, Jest, Adobe Illustrator
                </p>
              </div>
            </div>
          </button>
          {this.props.showMProject4 ? (
            <Project4Modal closeModal={this.props.closeModal} />
          ) : null}
        </div>


        {/* 
      <h3>My Bookmarks App</h3>
      <div className="screenshot-container">
        <img
          className="fullscreenshot"
          src={BookmarkFullscreen}
          alt="Browser screenshot of My Bookmarks App"
        />
        <img
          className="mobilescreenshot"
          src={BookmarkMobile}
          alt="Mobile screenshot of My Bookmarks App"
        />
      </div>
      <section className="project-info" role="document">
        <p className="p-explain">
          My Bookmarks application allows you to organize all of your favorite
          websites, articles, and publications. Users can
          <span className="green">save them, rate them,</span>and
          <span className="green">arrange them.</span>
        </p>
        <div className="projectLinks">
          <a
            href="https://github.com/thinkful-ei-gecko/Nancy-bookmarks-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://thinkful-ei-gecko.github.io/Nancy-bookmarks-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
        </div>
        <p>
          <span className="green">
            Built using: HTML, CSS, Javascript, jQuery
          </span>
        </p>
      </section> */}
      </section>
    );
  }
}
