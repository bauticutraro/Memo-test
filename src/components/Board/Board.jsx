import React, { useCallback, useEffect, useState } from 'react';
// components
import BoardItem from './BoardItem';
// utils
import { getItems } from '../../utils/boardItems';
import { compareItems } from '../../utils/compareItems';
// styles
import { S_BoardContainer } from './boardStyles';
import { Button } from '../Button/buttonStyles';

// const players = [
//   { id: 1, name: 'Player 1', color: 'orange' },
//   { id: 2, name: 'Player 2', color: 'green' }
// ];

// const initialState = { points: 0 };

const Board = () => {
  // const playerOne = useState({
  //   ...players[0],
  //   ...initialState,
  //   isActiveTurn: true
  // });
  // const playerTwo = useState({
  //   ...players[1],
  //   ...initialState,
  //   isActiveTurn: false
  // });

  const [selectedItems, setSelectedItems] = useState([]);
  const [guessedArticles, setGuessedArticles] = useState([]);
  const [boardItems, setBoardItems] = useState([]);
  const [reset, setReset] = useState(false);

  // get items for first time
  useEffect(() => {
    getShuffleItems();
  }, []);

  // compare items when there are 2
  useEffect(() => {
    if (Array.isArray(selectedItems) && selectedItems.length === 2) {
      if (compareItems(selectedItems)) {
        setGuessedArticles([...guessedArticles, selectedItems[0]]); // if they are the same, save it on guessedArticles
        setSelectedItems([]); // clean selected items
      } else {
        setTimeout(() => setSelectedItems([]), 1000); // clean selected items
      }
    }
  }, [selectedItems, compareItems, setGuessedArticles]);

  // set selected item
  const setItem = useCallback(
    item => {
      setSelectedItems([...selectedItems, item]);
    },
    [setSelectedItems, selectedItems]
  );

  // shuffle items
  const getShuffleItems = useCallback(
    () => setBoardItems(getItems()),
    [setBoardItems, getItems]
  );

  // reset game
  const handleResetGame = useCallback(() => {
    setSelectedItems([]);
    setGuessedArticles([]);
    setReset(true);
    setTimeout(() => {
      getShuffleItems();
      setReset(false);
    }, 1000);
  }, [setSelectedItems, setGuessedArticles, setReset, getShuffleItems]);

  return (
    <>
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
              reset={reset}
            />
          );
        })}
      </S_BoardContainer>
      <Button onClick={handleResetGame} disabled={reset}>
        RESET GAME
      </Button>
    </>
  );
};

export default Board;
