import React, { useState, useEffect } from "react";
import ageofultron from "../images/ageofultron.jpg";
import antmanwasp from "../images/antmanwasp.jpg";
import avengers from "../images/avengers.jpg";
import blackpanther from "../images/blackpanther.jpg";
import captmarvel from "../images/captmarvel.jpg";
import endgame from "../images/endgame.jpg";
import gotg from "../images/gotg.jpg";
import gotg2 from "../images/gotg2.jpg";
import infinitywar from "../images/infinitywar.jpg";
import ironman from "../images/ironman.jpg";
import ironman3 from "../images/ironman3.jpg";
import spidermanhomecoming from "../images/spidermanhomecoming.jpg";
import thor from "../images/thor.jpg";
import thorragnarok from "../images/thorragnarok.jpg";
import wintersoldier from "../images/wintersoldier.jpg";

const Container = (props) => {
  const images = [
    {
      name: "ageofultron",
      src: ageofultron,
      title: "Age of Ultron",
    },
    {
      name: "antmanwasp",
      src: antmanwasp,
      title: "Ant-Man & the Wasp",
    },
    {
      name: "avengers",
      src: avengers,
      title: "The Avengers",
    },
    {
      name: "blackpanther",
      src: blackpanther,
      title: "Black Panther",
    },
    {
      name: "captmarvel",
      src: captmarvel,
      title: "Captain Marvel",
    },
    {
      name: "endgame",
      src: endgame,
      title: "Endgame",
    },
    {
      name: "gotg",
      src: gotg,
      title: "Guardians of the Galaxy",
    },
    {
      name: "gotg2",
      src: gotg2,
      title: "Guardians of the Galaxy 2",
    },
    {
      name: "infinitywar",
      src: infinitywar,
      title: "Infinity War",
    },
    {
      name: "ironman",
      src: ironman,
      title: "Iron Man",
    },
    {
      name: "ironman3",
      src: ironman3,
      title: "Iron Man 3",
    },
    {
      name: "spidermanhomecoming",
      src: spidermanhomecoming,
      title: "Spider-Man: Homecoming",
    },
    {
      name: "thor",
      src: thor,
      title: "Thor",
    },
    {
      name: "thorragnarok",
      src: thorragnarok,
      title: "Thor: Ragnarok",
    },
    {
      name: "wintersoldier",
      src: wintersoldier,
      title: "The Winter Soldier",
    },
  ];
  const [cards, setCards] = useState(images);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [usedCards, setUsedCards] = useState([]);

  const win = document.querySelector(".winOverlay");
  const lose = document.querySelector(".loseOverlay");
  const all = document.querySelector(".allOverlay");
  const btns = document.querySelectorAll("#again");

  useEffect(() => {
    const shuffle = (e) => {
      setCards([]);
      var currentIndex = e.length,
        temporaryValue,
        randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = e[currentIndex];
        e[currentIndex] = e[randomIndex];
        e[randomIndex] = temporaryValue;
      }
      return setCards(e);
    };

    const addScore = (e) => {
      //score > 13 bc it doesn't read 15 until after another is clicked. we put in >13 instead of 14 as a failsafe.
      if (all && score > 13) {
        setBest(15);
        all.style.display = "flex";
        setScore(0);
        setUsedCards([]);
      } else if (!usedCards.includes(e)) {
        setScore(score + 1);
        setUsedCards([...usedCards, e]);
      } else {
        if (score > best || score === best) {
          setBest(score);
          if (win) {
            win.style.display = "flex";
          }
        } else if (score < best) {
          if (lose) {
            lose.style.display = "flex";
          }
        }
        setScore(0);
        setUsedCards([]);
      }
    };

    const cardObjArr = document.querySelectorAll("#card");
    cardObjArr.forEach((e) =>
      e.addEventListener("click", () => {
        shuffle(cards);
        addScore(e.className);
      })
    );
  });

  //shuffle function heavily influenced by:
  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  btns.forEach((e) => {
    e.addEventListener("click", () => {
      win.style.display = "none";
      lose.style.display = "none";
      all.style.display = "none";
    });
  });

  return (
    <>
      <div className="scoreboard">
        <span id="currentScore">Current Score: {score}</span>
        <span id="bestScore">High Score: {best}</span>
      </div>

      <div className="cardContainer">
        {cards.map((e) => (
          <div
            className={e.name}
            id="card"
            key={e.name}
            style={{
              backgroundImage: `url(${e.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <span id="title">{e.title}</span>
          </div>
        ))}
      </div>

      <div className="winOverlay">
        <span>
          New High Score! <br /> {best}
        </span>
        <button id="again">Play again?</button>
      </div>

      <div className="loseOverlay">
        <span>You lost!</span>
        <button id="again">Play again?</button>
      </div>

      <div className="allOverlay">
        <span>You got all 15!</span>
        <button id="again">Play again?</button>
      </div>
    </>
  );
};

export default Container;
