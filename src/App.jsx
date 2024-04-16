import { Header } from "./components/Header";
import { GameTable } from "./components/GameTable";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";

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

function App() {
  const [imageURLs, setImageURLs] = useState([]);

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
    <>
      <Header />
      <GameTable imageURLs={imageURLs} />
      <Footer />
    </>
  );
}

export default App;
