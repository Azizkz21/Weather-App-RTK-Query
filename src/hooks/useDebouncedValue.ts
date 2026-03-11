import { useEffect, useState } from "react";

export function useDebouncedValue<T>(value: T, delay = 400) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const time = setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => clearTimeout(time);
  }, [value, delay]);

  return debounced;
}
