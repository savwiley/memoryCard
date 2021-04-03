import React, {useState, useEffect} from "react";
import ScoreBoard from "./scoreboard.js";
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
      src: ageofultron,
      title: "Age of Ultron",
    }, {
      src: antmanwasp,
      title: "Ant-Man and the Wasp",
    }, {
      src: avengers,
      title: "The Avengers",
    }, {
      src: blackpanther,
      title: "Black Panther",
    }, {
      src: captmarvel,
      title: "Captain Marvel",
    }, {
      src: endgame,
      title: "Avengers: Endgame",
    }, {
      src: gotg,
      title: "Guardians of the Galaxy",
    }, {
      src: gotg2,
      title: "Guardians of the Galaxy 2",
    }, {
      src: infinitywar,
      title: "Infinity War",
    }, {
      src: ironman,
      title: "Iron Man",
    }, {
      src: ironman3,
      title: "Iron Man 3",
    }, {
      src: spidermanhomecoming,
      title: "Spider-Man: Homecoming",
    }, {
      src: thor,
      title: "Thor",
    }, {
      src: thorragnarok,
      title: "Thor: Ragnarok",
    }, {
      src: wintersoldier,
      title: "Captain America: The Winter Soldier",
    },
  ];
  const [cards, setCards] = useState(images);

  useEffect(() => {
    const shuffle = (e) => {
      setCards([]);
      var currentIndex = e.length, temporaryValue, randomIndex;
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

    const cardObjArr = document.querySelectorAll("#card");
    cardObjArr.forEach(e => 
      e.addEventListener("click", () => {
        shuffle(cards);
      })
    );
  });

  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array



  return (
    <>
      {cards.map(e => (
        <div className={e.src} 
        id="card" 
        key={e.src} 
        style={{
          backgroundImage: `url(${e.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          {e.title}
        </div>
      ))}
    </>
  )
}

export default Container;

/**
 * Create state that holds card names.
 * Create logic that checks if card names are or are not already in state.
 * Create logic that shuffles cards.
 * 
 * http://comic-cons.xyz/all-marvel-mcu-movie-posters/
 */