import { useEffect, useState } from "react";

export default function useDebounce(value: any, delay: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  // useEffect(() => {
  //   console.log(debouncedValue);
  // }, [debouncedValue]);

  return debouncedValue;
}
