import React, { useCallback, useEffect, useState } from 'react';
import Board from '../../components/Board/Board';
import { Button } from '../../components/Button/buttonStyles';
import { getFinalResult } from '../../utils/getFinalResult';
import {
  S_Container,
  S_FinalResultContainer,
  S_FinalResultText
} from './homeStyles';

const Home = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [guessedArticles, setGuessedArticles] = useState([]);
  const [finalResult, setFinalResult] = useState(null);

  useEffect(() => {
    setTimeout(() => setFinalResult(getFinalResult(guessedArticles)), 1000);
  }, [guessedArticles, getFinalResult]);

  const handleResetGame = useCallback(() => {
    setFinalResult(null);
    setGuessedArticles([]);
  }, []);

  return (
    <S_Container>
      {finalResult ? (
        <S_FinalResultContainer>
          <S_FinalResultText>¡{finalResult.title}!</S_FinalResultText>
          <S_FinalResultText>({finalResult.result})</S_FinalResultText>
          <Button onClick={handleResetGame}>START NEW GAME</Button>
        </S_FinalResultContainer>
      ) : isGameStarted ? (
        <Board
          guessedArticles={guessedArticles}
          setGuessedArticles={setGuessedArticles}
        />
      ) : (
        <>
          <S_FinalResultText>MEMO TEST GAME</S_FinalResultText>
          <Button onClick={() => setIsGameStarted(true)}>START GAME</Button>
        </>
      )}
    </S_Container>
  );
};

export default Home;
