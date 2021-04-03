import React from "react";
import Container from "./components/container.js";
//import ScoreBoard from "./components/scoreboard.js";

const App = () => {
  return (
    <div className="main">

      <div className="header">
        <span>Marvel-ous Memory</span>
      </div>

      <Container />

    </div>
  );
}

export default App;
