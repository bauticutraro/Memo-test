import React, { useCallback, useEffect, useState } from 'react';
// components
import BoardItem from './BoardItem';
// utils
import { getItems } from '../../utils/boardItems';
import { compareItems } from '../../utils/compareItems';
// styles
import { S_BoardContainer, S_TimeText } from './boardStyles';
import { Button } from '../Button/buttonStyles';
import useTime from '../../hooks/useTime';
import useTurn from '../../hooks/useTurn';
import Players from '../Players/Players';
import { getFinalResult } from '../../utils/getFinalResult';

export const players = [
  { id: 1, name: 'Player 1', color: 'var(--info)' },
  { id: 2, name: 'Player 2', color: 'var(--danger)' }
];

const Board = ({ guessedArticles, setGuessedArticles }) => {
  const [boardItems, setBoardItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [reset, setReset] = useState(false);
  const [activeTurn, toggleTurn, resetInitialTurn] = useTurn(
    players[0].id,
    players
  );
  const [time, resetTime] = useTime(20);

  // get items for first time
  useEffect(() => {
    getShuffleItems();
  }, []);

  const handleChangeTurn = useCallback(
    (samePlayer, delay) => {
      delay
        ? setTimeout(() => setSelectedItems([]), delay)
        : setSelectedItems([]); // clean selected items after show both of them
      !samePlayer && toggleTurn();
      resetTime();
    },
    [setSelectedItems, toggleTurn, resetTime]
  );

  useEffect(() => {
    if (!time) handleChangeTurn();
  }, [time, handleChangeTurn]);

  // compare items when there are 2
  useEffect(() => {
    if (Array.isArray(selectedItems) && selectedItems.length === 2) {
      if (compareItems(selectedItems)) {
        const playerItem = {
          ...selectedItems[0],
          player: players.filter(({ id }) => id === activeTurn)[0]
        };
        setGuessedArticles([...guessedArticles, playerItem]); // if they are the same, save it on guessedArticles
        handleChangeTurn(true); // re-start the same player turn
      } else {
        handleChangeTurn(false, 1000); // change player turn
      }
    }
  }, [selectedItems, compareItems, guessedArticles, setGuessedArticles]);

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
    resetTime();
    setSelectedItems([]);
    setGuessedArticles([]);
    setReset(true);
    resetInitialTurn();
    setTimeout(() => {
      getShuffleItems();
      setReset(false);
    }, 1000);
  }, [setSelectedItems, setGuessedArticles, setReset, getShuffleItems]);

  return (
    <>
      <S_TimeText>00:{time < 10 ? `0${time}` : time}</S_TimeText>

      <Players
        players={players}
        activeTurn={activeTurn}
        guessedArticles={guessedArticles}
        time={time}
      />

      <S_BoardContainer>
        {boardItems.map((item, i) => {
          const guessed = guessedArticles.filter(({ id }) => id === item.id);

          return (
            <BoardItem
              key={i}
              {...item}
              setItem={() => setItem(item)}
              selectedItemsLength={selectedItems.length}
              guessed={guessed.length}
              color={guessed?.length && guessed[0]?.player?.color}
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
