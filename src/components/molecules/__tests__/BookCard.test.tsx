import { render, screen, fireEvent } from '@testing-library/react';
import BookCard from '../BookCard';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/src/hooks/useAccessibilitySettings', () => ({
  useAccessibilitySettings: () => ({
    getFontSize: () => ({ large: 'text-lg', small: 'text-sm' }),
  }),
}));

describe('BookCard', () => {
  const mockBook = {
    id: 1,
    title: 'Test Book',
    author: 'Test Author',
    cover: '/test-cover.jpg',
    downloadUrl: '/test-download',
  };

  const mockOnClick = vi.fn();

  it('renders book information correctly', () => {
    render(<BookCard book={mockBook} onClick={mockOnClick} />);
    
    expect(screen.getByText('Test Book')).toBeDefined();
    expect(screen.getByText('Test Author')).toBeDefined();
  });

  it('renders the book cover image', () => {
    render(<BookCard book={mockBook} onClick={mockOnClick} />);
    
    const image = screen.getByRole('img');
    expect(image).toBeDefined();
    expect(image.getAttribute('src')).toContain('/_next/image?url=%2Ftest-cover.jpg&w=3840&q=75');
  });

  it('calls onClick when clicked', () => {
    render(<BookCard book={mockBook} onClick={mockOnClick} />);
    
    fireEvent.click(screen.getByText('Test Book'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
