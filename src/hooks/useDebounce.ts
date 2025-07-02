import { useRef, useEffect } from 'react';

export function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay = 300,
) {
  // Cross-platform timer id; start as null
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear any pending timer when the component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function debouncedFn(...args: Parameters<T>) {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }

  // Preserve the original function signature
  return debouncedFn as T;
}
