import { players } from '../components/Board/Board';
import { ITEMS } from './constants/items';

const getFilterItems = (id, guessedArticles) =>
  guessedArticles.filter(({ player: { id: playerId } }) => playerId === id);

export const getFinalResult = guessedArticles => {
  if (guessedArticles.length !== ITEMS.length) return null;

  const results = {};

  const playerOne = getFilterItems(players[0].id, guessedArticles)?.length;
  const playerTwo = getFilterItems(players[1].id, guessedArticles)?.length;

  results.title =
    playerOne === playerTwo
      ? 'Tie'
      : playerOne > playerTwo
      ? `${players[0].name} won`
      : `${players[1].name} won`;
  results.result = `${playerOne} - ${playerTwo}`;

  return { ...results };
};
