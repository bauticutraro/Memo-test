import React, { useState } from 'react';
import Board from '../../components/Board/Board';
import { Button } from '../../components/Button/buttonStyles';
import { S_Container } from './homeStyles';

const Home = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <S_Container>
      {isGameStarted ? (
        <Board />
      ) : (
        <Button onClick={() => setIsGameStarted(true)}>START GAME</Button>
      )}
    </S_Container>
  );
};

export default Home;
