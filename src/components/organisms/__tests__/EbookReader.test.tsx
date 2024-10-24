import { render, screen, fireEvent } from '@testing-library/react';
import { EbookReader } from '../EbookReader';
import { describe, expect, it, vi } from 'vitest';

vi.mock('react-reader', () => ({
  ReactReader: vi.fn(() => <div data-testid="mock-react-reader" />),
  ReactReaderStyle: {
    container: {},
    readerArea: {},
    titleArea: {},
    reader: {},
    swipeWrapper: {},
    prev: {},
    next: {},
    arrow: {},
    arrowHover: {},
  },
}));

vi.mock('@/src/hooks/useAccessibilitySettings', () => ({
  useAccessibilitySettings: () => ({
    getEbookFontSizePercentage: () => 100,
  }),
}));

vi.mock('@/src/lib/constants', () => ({
  grayscaleReaderTheme: {},
}));

describe('EbookReader', () => {
  const mockBook = {
    id: 1,
    title: 'Test Book',
    author: 'Test Author',
    cover: 'test-cover.jpg',
    downloadUrl: 'test-book.epub',
  };

  const mockOnClose = vi.fn();

  it('renders the ReactReader component', () => {
    render(<EbookReader book={mockBook} onClose={mockOnClose} />);
    
    expect(screen.getByTestId('mock-react-reader')).toBeDefined();
  });

  it('calls onClose when close button is clicked', () => {
    render(<EbookReader book={mockBook} onClose={mockOnClose} />);
    
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalled();
  });
});
