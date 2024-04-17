import { Scoreboard } from "./Scoreboard";

export const GameTable = ({ imageURLs }) => {
  return (
    <main>
      <Scoreboard />
      <div className="cards">
        {imageURLs.map((url, index) => {
          return <img key={index} src={url} />;
        })}
      </div>
    </main>
  );
};
