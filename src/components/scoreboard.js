import React, { useState, useEffect } from "react";
//import Container from "./container.js";


const ScoreBoard = (props) => {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);


  useEffect(() => {
    let usedCards = [];

    const addScore = (e) => {
      if (!usedCards.includes(e)) {
        setScore(score + 1);
        usedCards.push(e);
      } else {
        if (score > best) {
          setBest(score);
        }
        setScore(0);
        usedCards = [];
      }
    }

    //return addScore();

    const cardObjArr = document.querySelectorAll("#card");
    console.log(cardObjArr);
    cardObjArr.forEach(e => 
      e.addEventListener("click", () => {
        addScore(e.className);
        console.log(e.className);
      })
    )
  });


/**
 * React won't fire this eventListener more than once. I think it's because it can only be assigned one listener. How am I going to combine them?
 * 
 * I could make one mega-component or I can convert everything to classes and use props. I don't know if I can use a function as a prop but I can use the elements that are called as props.
 * 
 * When I save the doc after changing nothing, the listener works but not as intended (the score goes up but never wins/loses).
 */

  return (
    <div className="scoreboard">
      <span id="currentScore">Current Score: {score}</span>
      <span id="bestScore">High Score: {best}</span>
    </div>
  )
}

//<ScoreBoard run={addScore()} />

export default ScoreBoard;


/**
 * Needs to contain current & best scores.
 * 
 * Suggestion--
 * Every click raises current score by 1 until a wrong card is clicked. Current score, if higher than current best, moves to best score while current score resets to 0.
 * 
 * We need logic to indicate which cards have and have not already been clicked. It may be wise to have all the logic in this file and use the other two for jsx and randomizing.
 * 
 * >> May be wiser to have the scoreboard logic in this file while having the shuffling & prop assignment logic in container.js.
 * 
 * Perhaps each click toggles/adds a class to the clicked card. When one is clicked that already has the class, the score logic fires while the classes are wiped from the remaining cards before being shuffled. (Every click must also include a random shuffle, could be through container.js).
 * 
 * >> Or, since we're using react, we could add the card's class (name of the file/movie) to a state array. That way, when it's clicked, the state looks through the array and says whether or not the image is already there. Or perhaps they each have their own state instead of adding an array.
 * 
 * 
 * 
 * OKAY--
 * > Card is clicked
 * > Logic looks through state to see if class/name is present
 * 
 * > IF NOT PRESENT
 * >> Current Score adds 1
 * >> Card class/name moves to state/prop
 * >> Cards shuffle
 * >> IF MAX REACHED
 * >>> Current score replaces best score
 * >>> Current score resets to 0
 * >>> Cards shuffle
 * >>> State/prop is cleared
 * >>> Winner message appears
 * 
 * > IF PRESENT
 * >> Current score compares with best score
 * >> IF CURRENT > BEST
 * >>> Current score replaces best score
 * >> Current score resets to 0
 * >> Cards shuffle
 * >> State/prop is cleared
 * >> Loser message appears
 * 
 */