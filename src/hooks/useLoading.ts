import { useState, useCallback } from 'react';

export function useLoading(initialState = false) {
  const [isLoading, setIsLoading] = useState(initialState);

  const withLoading = useCallback(<T>(asyncFunction: () => Promise<T>): Promise<T> => {
    setIsLoading(true);
    return asyncFunction()
      .finally(() => setIsLoading(false));
  }, []);

  return {
    isLoading,
    setIsLoading,
    withLoading,
  };
}
