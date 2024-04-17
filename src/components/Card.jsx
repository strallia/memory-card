export const Card = ({ url, handleCardClick }) => {
  return (
    <span className="card">
      <img src={url} onClick={handleCardClick} />
    </span>
  );
};
