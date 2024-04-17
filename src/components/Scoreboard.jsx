export const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className="scoreboard">
      <p className="scoreboard__score">Score: {score}</p>
      <p className="scoreboard__best-score">Best score: {bestScore}</p>
    </div>
  );
};
