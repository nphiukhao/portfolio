import React, { Component } from "react";

export default class NavBar extends Component {
  state = {
    active: false
  };
  render() {
    return (
      <nav role="navigation" id="nav">
        <ul
          className={this.state.active ? "nav-active" : "nav-links"}
          id="nav-links"
        >
          <li>
            <a href="#about" onClick={() => this.setState({ active: false })}>
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => this.setState({ active: false })}
            >
              Projects
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/19Ka7QA6Oet-UfQQNATPJAbHdC-M69h2M/view?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={() => this.setState({ active: false })}>
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => this.setState({ active: false })}>
              Contact
            </a>
          </li>
        </ul>
        
        <div className="burger-container">
          <div
            className="burger"
            onClick={() =>
              this.setState(prevState => ({ active: !prevState.active }))
            }
          >
            <div className="line-one"></div>
            <div className="line-two"></div>
            <div className="line-three"></div>
          </div>
        </div>
      </nav>
    );
  }
}
