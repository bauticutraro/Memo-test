import React from 'react';
import {
  S_PlayerItem,
  S_PlayerItemName,
  S_PlayerItemPoints
} from './playerStyles';

const PlayerItem = ({ name, activeTurn, id, guessedArticles, color }) => {
  const itemsGuessed = guessedArticles.filter(
    ({ player }) => player.id == id
  ).length;

  const isTurnActive = activeTurn === id;

  return (
    <S_PlayerItem active={isTurnActive} color={color}>
      <S_PlayerItemName> {name}</S_PlayerItemName>
      {/* {isTurnActive && 'turno'}{' '} */}
      <S_PlayerItemPoints>{itemsGuessed}</S_PlayerItemPoints>
    </S_PlayerItem>
  );
};

export default PlayerItem;
