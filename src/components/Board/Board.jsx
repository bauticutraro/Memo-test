import React, { useEffect, useState } from 'react';
// components
import BoardItem from './BoardItem';
// utils
import { boardItems } from '../../utils/boardItems';
import { compareItems } from '../../utils/compareItems';
// styles
import { S_BoardContainer } from './boardStyles';

const Board = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [guessedArticles, setGuessedArticles] = useState([]);

  useEffect(() => {
    if (Array.isArray(selectedItems) && selectedItems.length === 2) {
      if (compareItems(selectedItems)) {
        setGuessedArticles([...guessedArticles, selectedItems[0]]);
      }
      setTimeout(() => setSelectedItems([]), 1000);
    }
  }, [selectedItems, compareItems, setGuessedArticles]);

  const setItem = item => {
    setSelectedItems([...selectedItems, item]);
  };

  return (
    <S_BoardContainer>
      {boardItems.map((item, i) => {
        const guessed = guessedArticles.some(({ id }) => id === item.id);
        return (
          <BoardItem
            key={i}
            {...item}
            setItem={() => setItem(item)}
            selectedItemsLength={selectedItems.length}
            guessed={guessed}
          />
        );
      })}
    </S_BoardContainer>
  );
};

export default Board;
