import React from 'react';
import {
  S_PlayerItem,
  S_PlayerItemName,
  S_PlayerItemPoints
} from './playerStyles';

const PlayerItem = ({ name, activeTurn, id, guessedArticles, color, time }) => {
  const itemsGuessed = guessedArticles.filter(
    ({ player }) => player.id == id
  ).length;

  const isTurnActive = activeTurn === id;

  return (
    <S_PlayerItem active={isTurnActive} color={color} time={time}>
      <S_PlayerItemName> {name}</S_PlayerItemName>
      <S_PlayerItemPoints>{itemsGuessed}</S_PlayerItemPoints>
    </S_PlayerItem>
  );
};

export default PlayerItem;
