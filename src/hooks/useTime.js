import { useCallback, useEffect, useState } from 'react';

const TURN_DURATION = 10;

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
