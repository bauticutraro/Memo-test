import { getItems } from '../src/utils/boardItems';
import { getFinalResult } from '../src/utils/getFinalResult';

describe('final result', () => {
  test('should be "Player 1 won"', () => {
    const guessedItems = [
      {
        id: 3,
        src: 'https://restcountries.eu/data/chl.svg',
        player: { id: 1, name: 'Player 1' }
      },
      {
        id: 2,
        src: 'https://restcountries.eu/data/bra.svg',
        player: { id: 1, name: 'Player 1' }
      },
      {
        id: 8,
        src: 'https://restcountries.eu/data/per.svg',
        player: { id: 1, name: 'Player 1' }
      },
      {
        id: 9,
        src: 'https://restcountries.eu/data/bol.svg',
        player: { id: 1, name: 'Player 1' }
      },
      {
        id: 10,
        src: 'https://restcountries.eu/data/ecu.svg',
        player: { id: 1, name: 'Player 1' }
      },
      {
        id: 1,
        src: 'https://restcountries.eu/data/arg.svg',
        player: { id: 1, name: 'Player 1' }
      },
      {
        id: 7,
        src: 'https://restcountries.eu/data/col.svg',
        player: { id: 2, name: 'Player 2' }
      },
      {
        id: 4,
        src: 'https://restcountries.eu/data/ury.svg',
        player: { id: 2, name: 'Player 2' }
      },
      {
        id: 5,
        src: 'https://restcountries.eu/data/pry.svg',
        player: { id: 2, name: 'Player 2' }
      },
      {
        id: 6,
        src: 'https://restcountries.eu/data/ven.svg',
        player: { id: 2, name: 'Player 2' }
      }
    ];
    expect(getFinalResult(guessedItems)?.title).toBe('Player 1 won');
    expect(getFinalResult(guessedItems)?.result).toBe('6 - 4');
  });
  test('should be "Player 2 won"', () => {
    const guessedItems = [
      {
        id: 3,
        src: 'https://restcountries.eu/data/chl.svg',
        player: { id: 1, name: 'Player 1' }
      },
      {
        id: 2,
        src: 'https://restcountries.eu/data/bra.svg',
        player: { id: 1, name: 'Player 1' }
      },
      {
        id: 8,
        src: 'https://restcountries.eu/data/per.svg',
        player: { id: 1, name: 'Player 1' }
      },
      {
        id: 9,
        src: 'https://restcountries.eu/data/bol.svg',
        player: { id: 2, name: 'Player 2' }
      },
      {
        id: 10,
        src: 'https://restcountries.eu/data/ecu.svg',
        player: { id: 2, name: 'Player 2' }
      },
      {
        id: 1,
        src: 'https://restcountries.eu/data/arg.svg',
        player: { id: 2, name: 'Player 2' }
      },
      {
        id: 7,
        src: 'https://restcountries.eu/data/col.svg',
        player: { id: 2, name: 'Player 2' }
      },
      {
        id: 4,
        src: 'https://restcountries.eu/data/ury.svg',
        player: { id: 2, name: 'Player 2' }
      },
      {
        id: 5,
        src: 'https://restcountries.eu/data/pry.svg',
        player: { id: 2, name: 'Player 2' }
      },
      {
        id: 6,
        src: 'https://restcountries.eu/data/ven.svg',
        player: { id: 2, name: 'Player 2' }
      }
    ];
    expect(getFinalResult(guessedItems)?.title).toBe('Player 2 won');
    expect(getFinalResult(guessedItems)?.result).toBe('3 - 7');
  });
  test('should be "Tie"', () => {
    const guessedItems = [
      {
        id: 3,
        src: 'https://restcountries.eu/data/chl.svg',
        player: { id: 1, name: 'Player 1' }
      },
      {
        id: 2,
        src: 'https://restcountries.eu/data/bra.svg',
        player: { id: 1, name: 'Player 1' }
      },
      {
        id: 8,
        src: 'https://restcountries.eu/data/per.svg',
        player: { id: 1, name: 'Player 1' }
      },
      {
        id: 9,
        src: 'https://restcountries.eu/data/bol.svg',
        player: { id: 1, name: 'Player 1' }
      },
      {
        id: 10,
        src: 'https://restcountries.eu/data/ecu.svg',
        player: { id: 1, name: 'Player 1' }
      },
      {
        id: 1,
        src: 'https://restcountries.eu/data/arg.svg',
        player: { id: 2, name: 'Player 2' }
      },
      {
        id: 7,
        src: 'https://restcountries.eu/data/col.svg',
        player: { id: 2, name: 'Player 2' }
      },
      {
        id: 4,
        src: 'https://restcountries.eu/data/ury.svg',
        player: { id: 2, name: 'Player 2' }
      },
      {
        id: 5,
        src: 'https://restcountries.eu/data/pry.svg',
        player: { id: 2, name: 'Player 2' }
      },
      {
        id: 6,
        src: 'https://restcountries.eu/data/ven.svg',
        player: { id: 2, name: 'Player 2' }
      }
    ];
    expect(getFinalResult(guessedItems)?.title).toBe('Tie');
    expect(getFinalResult(guessedItems)?.result).toBe('5 - 5');
  });
  test('should be null', () => {
    const guessedItems = [
      {
        id: 3,
        src: 'https://restcountries.eu/data/chl.svg',
        player: { id: 1, name: 'Player 1' }
      }
    ];
    expect(getFinalResult(guessedItems)).toBeNull();
  });
});
