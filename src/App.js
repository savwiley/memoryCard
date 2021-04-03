import React from "react";
import Container from "./components/container.js";
//import ScoreBoard from "./components/scoreboard.js";

const App = () => {
  return (
    <div className="main">

      <div className="header">
        <span>Marvel-ous Memory</span>
      </div>

      <span id="info">
        Get points by clicking on the posters! Click on the same one twice and you lose. Get all 15 and you win!
      </span>

      <Container />

    </div>
  );
}

export default App;
