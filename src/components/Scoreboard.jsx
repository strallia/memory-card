import { useState } from "react";

export const Scoreboard = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="scoreboard">
      <p className="scoreboard__score">Score: {score}</p>
      <p className="scoreboard__best-score">Best score: {bestScore}</p>
    </div>
  );
};
