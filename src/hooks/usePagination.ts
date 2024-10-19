import { useState, useCallback } from 'react';

interface UsePaginationProps {
  initialPage?: number;
  initialPageSize?: number;
}

export function usePagination({ initialPage = 1, initialPageSize = 12 }: UsePaginationProps = {}) {
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const nextPage = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  const prevPage = useCallback(() => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  }, []);

  const resetPage = useCallback(() => {
    setPage(initialPage);
  }, [initialPage]);

  return {
    page,
    setPage,
    pageSize,
    setPageSize,
    nextPage,
    prevPage,
    resetPage,
  };
}
