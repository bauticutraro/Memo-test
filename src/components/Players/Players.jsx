import React from 'react';
import PlayerItem from './PlayerItem';
import { S_PlayersContainer, S_PlayersVs } from './playerStyles';

const Players = ({ players, activeTurn, guessedArticles }) => {
  console.log('hola');
  return (
    <S_PlayersContainer>
      <PlayerItem
        {...players[0]}
        activeTurn={activeTurn}
        guessedArticles={guessedArticles}
      />
      <S_PlayersVs>VS</S_PlayersVs>
      <PlayerItem
        {...players[1]}
        activeTurn={activeTurn}
        guessedArticles={guessedArticles}
      />
    </S_PlayersContainer>
  );
};

export default Players;
