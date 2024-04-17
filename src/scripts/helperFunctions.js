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

export { shuffle };
