import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { Book } from '../server/schema';
import { usePagination } from './usePagination';
import { useLoading } from './useLoading';
import { apiService } from '@/src/services/ApiService';

export function useBookSearch(initialSearchTerm: string = '') {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [hasMore, setHasMore] = useState(true);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const { page, setPage, pageSize, nextPage, resetPage } = usePagination();
  const { isLoading, withLoading } = useLoading();

  const fetchBooks = useCallback(async (term: string, pageNum: number) => {
    setError(null);

    try {
      const data = await apiService.get<{ books: Book[] }>(`/books?search=${term}&page=${pageNum}&pageSize=${pageSize}`);
      setBooks(prevBooks => pageNum === 1 ? data.books : [...prevBooks, ...data.books]);
      setHasMore(data.books.length === pageSize);
    } catch (err) {
      setError('Failed to fetch books. Please try again.');
    }
  }, [pageSize]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((term: string) => {
      resetPage();
      withLoading(() => fetchBooks(term, 1));
    }, 300),
    [fetchBooks, resetPage, withLoading]
  );

  useEffect(() => {
    if (searchTerm) {
      debouncedSearch(searchTerm);
    } else {
      withLoading(() => fetchBooks('', 1));
    }
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, debouncedSearch, fetchBooks, withLoading]);

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      nextPage();
      withLoading(() => fetchBooks(searchTerm, page + 1));
    }
  }, [isLoading, hasMore, nextPage, withLoading, fetchBooks, searchTerm, page]);

  const getRandomBook = useCallback(async () => {
    setError(null);
    try {
      const data = await withLoading(() => apiService.get<Book>('/books/random'));
      setSelectedBook(data);
    } catch (err) {
      setError('Failed to fetch random book. Please try again.');
    }
  }, [withLoading]);

  return { 
    books, 
    isLoading, 
    error, 
    searchTerm, 
    setSearchTerm, 
    loadMore, 
    hasMore, 
    selectedBook, 
    setSelectedBook, 
    getRandomBook 
  };
}
