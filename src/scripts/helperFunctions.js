const shuffle = (arr) => {
  const arrCopy = [...arr];
  const shuffledArr = [];
  while (arrCopy.length !== 0) {
    const totalItems = arrCopy.length;
    const randomIndex = Math.floor(Math.random() * totalItems);

    shuffledArr.push(arrCopy[randomIndex]);
    arrCopy.splice(randomIndex, 1);
  }
  return shuffledArr;
};

const createCard = (imageURL) => {
  return {
    id: crypto.randomUUID(),
    imageURL,
  };
};

export { shuffle, createCard };
