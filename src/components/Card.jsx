export const Card = ({ card, handleCardClick }) => {
  return (
    <div className="card">
      <img src={card.imageURL} onClick={() => handleCardClick(card.id)} />
    </div>
  );
};
