import { useState, useEffect } from "react";
import { Scoreboard } from "./Scoreboard";
import { Card } from "./Card";
import { shuffle, createCard } from "../scripts/helperFunctions";

const baseURL = "https://pokeapi.co/api/v2/pokemon/";
const pokemonNames = [
  "pikachu",
  "charizard",
  "squirtle",
  "charmander",
  "lucario",
  "dragonite",
  "umbreon",
  "eevee",
  "blastoise",
  "gardevoir",
];

let clickedCardIDs = [];

export const GameTable = () => {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const allFetchedImageURLs = pokemonNames.map((pokemon) =>
      fetch(`${baseURL}/${pokemon}`, { mode: "cors" })
    );
    Promise.all(allFetchedImageURLs)
      .then((results) => Promise.all(results.map((r) => r.json())))
      .then((results) => {
        const updatedCards = results.map((result) => {
          const imageURL = result.sprites.front_default;
          return createCard(imageURL);
        });
        setCards(updatedCards);
      });
  }, []);

  const handleCardClick = (cardID) => {
    const hasCardBeenClicked = clickedCardIDs.includes(cardID);
    if (hasCardBeenClicked) {
      clickedCardIDs = [];
      setScore(0);
    } else {
      setScore((score) => score + 1);
      clickedCardIDs.push(cardID);
    }
    setCards(shuffle(cards));
  };

  return (
    <main>
      <Scoreboard score={score} bestScore={bestScore} />
      <div className="cards__container">
        {cards.map((card) => (
          <Card key={card.id} card={card} handleCardClick={handleCardClick} />
        ))}
      </div>
    </main>
  );
};
