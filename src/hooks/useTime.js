import { useCallback, useEffect, useState } from 'react';

export const TURN_DURATION = 5;

function useTime() {
  const [time, setTime] = useState(TURN_DURATION);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return function cleanup() {
      clearInterval(interval);
    };
  }, [setTime, time]);

  const resetTime = useCallback(() => setTime(TURN_DURATION), [setTime]);

  return [time, resetTime];
}

export default useTime;
