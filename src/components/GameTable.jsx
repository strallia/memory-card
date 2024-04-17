import { Scoreboard } from "./Scoreboard";
import { Card } from "./Card";

export const GameTable = ({ imageURLs }) => {
  return (
    <main>
      <Scoreboard />
      <div className="cards">
        {imageURLs.map((url, index) => {
          return <Card key={index} url={url} />;
        })}
      </div>
    </main>
  );
};
