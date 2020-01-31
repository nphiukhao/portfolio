import React from "react";

export default function About() {
  return (
    <section id="about" className="about-container">
      <h2>
        <span className="green">[</span>Who I am<span className="green">]</span>
      </h2>
      <div className="paragraphs">
        <p>
          I graduated from the University of California, San Diego with a
          Bachelors of Science in Biology and Thinkfuls Immersive Engineering
          program with a focus on Full Stack Development. From my experience as
          a Research Assistant at UCSDs Organic Chemistry labs, I realized my
          love for debugging and a knack for completing tasks under large time
          constraints. My excitement for coding comes from its potential to
          create impactful applications and ability to make people's lives easier. My passion for learning pushes me to always look for opportunities to grow and grow in any opportunity.
        </p>
        <p>
          <span className="passion">Things I'm passionate about:</span>{" "}
          knowledge, problem-solving, and creating a positive impact.
        </p>
        <p>
          <span className="enjoy">Other things I like to do:</span>{" "}
          traveling, content creating, and admiring quality animation.
        </p>
      </div>
    </section>
  );
}
