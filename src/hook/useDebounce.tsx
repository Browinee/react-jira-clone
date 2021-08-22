import React, { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number = 100) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}


export default useDebounce;
