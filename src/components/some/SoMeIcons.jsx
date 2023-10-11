import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../../styles/IconEffects.css";

function SoMeIcons() {
  return (
    <ul>
      <li>
        <Link to="https://github.com/JonasHope" className="github">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <FontAwesomeIcon icon={faGithub} aria-hidden="true"></FontAwesomeIcon>
        </Link>
      </li>
      <li>
        <Link to="https://www.facebook.com/jonas.hope/" className="facebook">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <FontAwesomeIcon
            icon={faFacebook}
            aria-hidden="true"
          ></FontAwesomeIcon>
        </Link>
      </li>
      <li>
        <Link to="https://www.instagram.com/jonashope94/" className="instagram">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <FontAwesomeIcon
            icon={faInstagram}
            aria-hidden="true"
          ></FontAwesomeIcon>
        </Link>
      </li>
      <li>
        <Link
          to="https://www.linkedin.com/in/jonas-hope-50379a288/"
          className="linkedin"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <FontAwesomeIcon
            icon={faLinkedin}
            aria-hidden="true"
          ></FontAwesomeIcon>
        </Link>
      </li>
    </ul>
  );
}

export default SoMeIcons;

//credit Stockin
