import { useCallback, useEffect, useState } from 'react';

export const TURN_DURATION = 15;

function useTime() {
  const [time, setTime] = useState(TURN_DURATION);
  const [stopTime, setStopTime] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      !stopTime && setTime(time - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setTime, time, stopTime]);

  const resetTime = useCallback(() => {
    setTime(TURN_DURATION);
    setStopTime(true);
    setTimeout(() => setStopTime(false), 1000);
  }, [setTime]);

  return [time, resetTime];
}

export default useTime;
