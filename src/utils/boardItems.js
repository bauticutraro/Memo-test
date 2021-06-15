import { ITEMS } from './constants/items';

/* Randomize array in-place using Durstenfeld shuffle algorithm */
const shuffleArray = array => {
  let currentIndex = array.length,
    randomIndex,
    newArray = [...array];

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex]
    ];
  }

  return newArray;
};

const getItems = () => {
  const itemsToSort = [...ITEMS, ...ITEMS];

  return shuffleArray(itemsToSort);
};

export const boardItems = getItems();
