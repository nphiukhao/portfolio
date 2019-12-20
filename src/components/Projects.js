import React from 'react'
import BookmarkFullscreen from '../Images/BookmarkFullscreen.png'
import BookmarkMobile from '../Images/BookmarkMobile.png'
import ChoreRunnerFullscreen from '../Images/ChoreRunner_fullscreen.png'
import ChoreRunnerMobile from '../Images/ChoreRunner_mobile.png'
import AlgorithMeFullscreen from '../Images/AlgorithMe_fullscreen.png'
import AlgorithMeMobile from '../Images/AlgorithMe_mobile.png'
import ICookFullscreen from '../Images/ICook_fullscreen.png'
import ICookMobile from '../Images/ICook_mobile.png'


export default function Projects() {
  return (
    <section id="projects" className="project-container">
        <h2><span className="green">[</span>My Projects<span className="green">]</span></h2>

          <h3>Chore Runner</h3>
          <div className="screenshot-container">
                  <img className="fullscreenshot" src={ChoreRunnerFullscreen} alt="Browser screenshot of My Bookmarks App"/>
                  <img className= "mobilescreenshot" src={ChoreRunnerMobile} alt="Mobile screenshot of My Bookmarks App"/>
          </div>
          <section role="document">

            <p className="p-explain">Chore Runner is a full stack react application that acts as a gamified chore manager. Parents can<span className="green">create households</span>and<span className="green">assign tasks to the kids or members.</span></p>
            <p className="p-explain">Kid users can<span className="green">see their tasks, clear them,</span>and, once they're approved,<span className="green">earn points and badges</span>to compete with other members in the household.</p>
              <div className="projectLinks">
                  <a href='https://github.com/nphiukhao/Chorerunner-client' target="_blank" rel="noopener noreferrer">Github</a>
                  <a href='http://chorerunner-client.now.sh' target="_blank" rel="noopener noreferrer">Live</a>
              </div>
              <p><span className="green">Built using: React, React Router, HTML5, CSS3, Node, Express, PostgreSQL, Mocha, Chai, Enzyme, Jest, Adobe Illustrator</span></p>
          </section>



          <h3>AlgorithMe</h3>
          <div className="screenshot-container">
                  <img className="fullscreenshot" src={AlgorithMeFullscreen} alt="Browser screenshot of My Bookmarks App"/>
                  <img className= "mobilescreenshot" src={AlgorithMeMobile} alt="Mobile screenshot of My Bookmarks App"/>
          </div>
          <section role="document">
              <p className="p-explain">Responsive educational application build using a Linked List data structure and spaced repetition algorithm. Users can learn basic<span className="green">javascript algorithms</span>such as<span className="green">search and sort algorithms.</span></p>
              <div className="projectLinks">
                  <a href='https://github.com/thinkful-ei-gecko/nancy-scott-spaced-repetition-client' target="_blank" rel="noopener noreferrer">Github</a>
                  <a href='https://algorithme.now.sh/' target="_blank" rel="noopener noreferrer">Live</a>
              </div>
              <p><span className="green">Built using: React, React Router, HTML5, CSS3, Node, Express, PostgreSQL, Mocha, Chai, Enzyme, Jest, Cypress</span></p>
          </section>

          <h3>ICook</h3>
          <div className="screenshot-container">
                  <img className="fullscreenshot" src={ICookFullscreen} alt="Browser screenshot of My Bookmarks App"/>
                  <img className= "mobilescreenshot" src={ICookMobile} alt="Mobile screenshot of My Bookmarks App"/>
          </div>
          <section role="document">
              <p className="p-explain"> Users can store, update, and filter recipes based on time constraints and available ingredients.<span className="green">Save time, money,</span>and<span className="green">headaches.</span></p>
              <div className="projectLinks">
                  <a href='https://github.com/nphiukhao/ICook-App-client' target="_blank" rel="noopener noreferrer">Github</a>
                  <a href='https://icook.nphiukhao.now.sh' target="_blank" rel="noopener noreferrer">Live</a>
              </div>
              <p><span className="green">Built using: React, React Router, HTML5, CSS3, Node, Express, PostgreSQL, Mocha, Chai, Enzyme, Jest, Adobe Illustrator</span></p>
          </section>

          <h3>My Bookmarks App</h3>
          <div className="screenshot-container">
                  <img className="fullscreenshot" src={BookmarkFullscreen} alt="Browser screenshot of My Bookmarks App"/>
                  <img className= "mobilescreenshot" src={BookmarkMobile} alt="Mobile screenshot of My Bookmarks App"/>
          </div>
          <section role="document">
              <p className="p-explain">My Bookmarks application allows you to organize all of your favorite websites, articles, and publications. Users can<span className="green">save them, rate them,</span>and<span className="green">arrange them.</span></p>
              <div className="projectLinks">
                  <a href='https://github.com/thinkful-ei-gecko/Nancy-bookmarks-app' target="_blank" rel="noopener noreferrer">Github</a>
                  <a href='https://thinkful-ei-gecko.github.io/Nancy-bookmarks-app/' target="_blank" rel="noopener noreferrer">Live</a>
              </div>
              <p><span className="green">Built using: HTML, CSS, Javascript, jQuery</span></p>
          </section>

    </section>

  )
}
