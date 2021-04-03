import React from "react";
import Container from "./components/container.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <div className="main">
      <div className="header">
        <a href="https://github.com/savwiley/memoryCard" id="credit">
          <FontAwesomeIcon icon={faGithub} id="credit" />
        </a>
        <span>Marvel-ous Memory</span>
      </div>

      <span id="info">
        Get points by clicking on the posters! Click on the same one twice and
        you lose. Get all 15 and you win!
      </span>

      <Container />
    </div>
  );
};

export default App;