import { useCallback, useEffect, useMemo, useState } from 'react';

function useTurn(initialPlayer, players) {
  const [activeTurn, setActiveTurn] = useState(initialPlayer);

  const actualPlayerIndex = useMemo(() =>
    players.findIndex(p => p.id == activeTurn)
  );

  const handleChangeTurn = useCallback(() => {
    actualPlayerIndex === 0 // that means it's playerOne's turn
      ? setActiveTurn(players[1].id)
      : setActiveTurn(players[0].id);
  }, [activeTurn]);

  return [activeTurn, handleChangeTurn];
}

export default useTurn;
