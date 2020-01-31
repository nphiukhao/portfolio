import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer id="contact" role="document">
      <h2>Contact</h2>
      <div className="contact-links">
        <a href="mailto:nphiukhao@gmail.com">
          <FontAwesomeIcon
            className="elogo"
            icon={faEnvelope}
            size="3x"
          />
        </a>
        <a
          href="https://github.com/nphiukhao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="ghlogo"
            icon={faGithub}
            size="3x"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/chitchanok-nancy-phiukhao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="linklogo"
            icon={faLinkedinIn}
            size="3x"
          />
        </a>
      </div>
    </footer>
  );
}
