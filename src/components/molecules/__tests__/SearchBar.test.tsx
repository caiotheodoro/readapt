import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../SearchBar';
import { describe, expect, it, vi } from 'vitest';
import { useCameraDialogStore } from '@/src/store/cameraDialogStore';

vi.mock('@/src/store/cameraDialogStore', () => ({
  useCameraDialogStore: vi.fn(),
}));

describe('SearchBar', () => {
  const mockSetSearchTerm = vi.fn();
  const mockGetRandomBook = vi.fn();
  const mockSetIsCameraDialogOpen = vi.fn();

  beforeEach(() => {
    vi.mocked(useCameraDialogStore).mockReturnValue({
      setIsOpen: mockSetIsCameraDialogOpen,
    });
  });

  it('renders the search input and buttons', () => {
    render(<SearchBar searchTerm="" setSearchTerm={mockSetSearchTerm} getRandomBook={mockGetRandomBook} />);
    
    expect(screen.getByPlaceholderText('Search books...')).toBeDefined();
    expect(screen.getByTestId('camera-button')).toBeDefined();
    expect(screen.getByTestId('random-book-button')).toBeDefined();
  });

  it('calls setSearchTerm when input changes', () => {
    render(<SearchBar searchTerm="" setSearchTerm={mockSetSearchTerm} getRandomBook={mockGetRandomBook} />);
    
    const input = screen.getByPlaceholderText('Search books...');
    fireEvent.change(input, { target: { value: 'test' } });
    
    expect(mockSetSearchTerm).toHaveBeenCalledWith('test');
  });

  it('calls setIsCameraDialogOpen when camera button is clicked', () => {
    render(<SearchBar searchTerm="" setSearchTerm={mockSetSearchTerm} getRandomBook={mockGetRandomBook} />);
    
    const cameraButton = screen.getByTestId('camera-button');
    fireEvent.click(cameraButton);
    
    expect(mockSetIsCameraDialogOpen).toHaveBeenCalledWith(true);
  });

  it('calls getRandomBook when sparkles button is clicked', () => {
    render(<SearchBar searchTerm="oi" setSearchTerm={mockSetSearchTerm} getRandomBook={mockGetRandomBook} />);
    
    const sparklesButton = screen.getByTestId('random-book-button');
    fireEvent.click(sparklesButton);
    
    expect(mockGetRandomBook).toHaveBeenCalled();
  });
});
