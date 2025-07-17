import { useRef, useCallback } from "react";

export default function useThrottle<T extends (...args: any[]) => void>(callback: T, delay: number) {
  const lastCall = useRef<number>(0);

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall.current >= delay) {
        lastCall.current = now;
        callback(...args);
      }
    },
    [callback, delay],
  );
}
