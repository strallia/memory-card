import { Scoreboard } from "./Scoreboard";
import { shuffle } from "../scripts/helperFunctions";

export const GameTable = ({ imageURLs }) => {
  const randomized = shuffle(imageURLs);
  return (
    <main>
      <Scoreboard />
      <div className="cards">
        {imageURLs.map((url, index) => {
          return <img key={index} src={url} />;
        })}
      </div>
      <div className="cards">
        {randomized.map((url, index) => {
          return <img key={index} src={url} />;
        })}
      </div>
    </main>
  );
};
