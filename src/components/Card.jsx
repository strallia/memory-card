export const Card = ({ card, handleCardClick }) => {
  return (
    <span className="card">
      <img src={card.imageURL} onClick={() => handleCardClick(card.id)} />
    </span>
  );
};
