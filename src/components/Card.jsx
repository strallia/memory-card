export const Card = ({ url, handleCardClick }) => {
  return <img src={url} onClick={handleCardClick} />;
};
