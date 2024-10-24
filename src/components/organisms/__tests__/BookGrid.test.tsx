import { render, screen } from '@testing-library/react';
import { BookGrid } from '../BookGrid';
import { describe, expect, it, vi } from 'vitest';

// Mock the useAccessibilitySettings hook
vi.mock('@/src/hooks/useAccessibilitySettings', () => ({
  useAccessibilitySettings: () => ({
    getGridColumns: () => 'grid-cols-4',
    getFontSize: () => '16px',
  }),
}));

describe('BookGrid', () => {
  const mockBooks = [
    { id: 1, title: 'Book 1', author: 'Author 1', cover: '/cover1.jpg', downloadUrl: 'book1.epub' },
    { id: 2, title: 'Book 2', author: 'Author 2', cover: '/cover2.jpg', downloadUrl: 'book2.epub' },
  ];

  const mockProps = {
    books: mockBooks,
    isLoading: false,
    error: null,
    searchTerm: '',
    setSelectedBook: vi.fn(),
    loadMoreRef: vi.fn(),
    onBackToReading: vi.fn(),
  };

  it('renders books when provided', () => {
    render(<BookGrid {...mockProps} />);
    
    expect(screen.getByText('Book 1')).toBeDefined();
    expect(screen.getByText('Book 2')).toBeDefined();
  });


  it('displays error message when error is provided', () => {
    const errorMessage = 'Failed to load books';
    render(<BookGrid {...mockProps} error={errorMessage} />);
    
    expect(screen.getByText(errorMessage)).toBeDefined();
  });

  it('displays NoResultsFound component when no books and searchTerm is provided', () => {
    render(<BookGrid {...mockProps} books={[]} searchTerm="nonexistent book" />);
    
    expect(screen.getByText(/No Results Found/)).toBeDefined();
  });
});
