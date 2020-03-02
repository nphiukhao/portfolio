import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Greeting from "./components/Greeting";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  state = {
    showMProject1: false,
    showMProject2: false,
    showMProject3: false,
    showMProject4: false,
  };
  showModal = project => {
    this.setState({ [project]: true, modalActive: true });
    document.body.style.overflow = 'hidden'
  };

  closeModal = project => {
    this.setState({ [project]: false, modalActive: false });
    document.body.style.overflow = 'auto'
  };

  componentDidMount() {
    document.body.style.overflow = 'auto'
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Greeting />
        <main role="main">
          <About />
          <Projects
            showModal={this.showModal}
            closeModal={this.closeModal}
            showMProject1={this.state.showMProject1}
            showMProject2={this.state.showMProject2}
            showMProject3={this.state.showMProject3}
            showMProject4={this.state.showMProject4}
          />
        </main>
        <Footer />
      </div>
    );
  }
}
