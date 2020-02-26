import React from 'react';
import NavBar from './components/NavBar'
import Greeting from './components/Greeting'
import About from './components/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Greeting />
        <main role="main">
          <About />
          <Projects />
        </main>
        <Footer />
    </div>
  );
}

export default App;
