import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { Book } from '../server/schema';

export function useBookSearch(initialSearchTerm: string = '') {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchBooks = useCallback(async (term: string, pageNum: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/books?search=${term}&page=${pageNum}&pageSize=12`);
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(prevBooks => pageNum === 1 ? data.books : [...prevBooks, ...data.books]);
      setHasMore(data.books.length === 12);
    } catch (err) {
      setError('Failed to fetch books. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      setPage(1);
      fetchBooks(term, 1);
    }, 300),
    [fetchBooks]
  );

  useEffect(() => {
    if (searchTerm) {
      debouncedSearch(searchTerm);
    } else {
      fetchBooks('', 1);
    }
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, debouncedSearch, fetchBooks]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchBooks(searchTerm, nextPage);
    }
  }, [loading, hasMore, page, searchTerm, fetchBooks]);

  return { books, loading, error, searchTerm, setSearchTerm, loadMore, hasMore };
}
