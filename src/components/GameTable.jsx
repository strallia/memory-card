import { useState, useEffect } from "react";
import { Scoreboard } from "./Scoreboard";
import { Card } from "./Card";

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

export const GameTable = () => {
  const [imageURLs, setImageURLs] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const allFetchedImageURLs = pokemonNames.map((pokemon) =>
      fetch(`${baseURL}/${pokemon}`, { mode: "cors" })
    );
    Promise.all(allFetchedImageURLs)
      .then((results) => Promise.all(results.map((r) => r.json())))
      .then((results) => {
        const updatedImageURLs = results.map(
          (result) => result.sprites.front_default
        );
        setImageURLs(updatedImageURLs);
      });
  }, []);

  return (
    <main>
      <Scoreboard score={score} bestScore={bestScore} />
      <div className="cards">
        {imageURLs.map((url, index) => {
          return <Card key={index} url={url} />;
        })}
      </div>
    </main>
  );
};
