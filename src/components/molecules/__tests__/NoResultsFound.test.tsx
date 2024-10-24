import { render, screen, fireEvent } from '@testing-library/react';
import { NoResultsFound } from '../NoResultsFound';
import { describe, expect, it, vi } from 'vitest';

describe('NoResultsFound', () => {
  const mockOnBackToReading = vi.fn();

  it('renders the component with correct content', () => {
    render(<NoResultsFound searchQuery="test query" onBackToReading={mockOnBackToReading} />);
    
    expect(screen.getByText('No Results Found')).toBeDefined();
    expect(screen.getByText(/We couldn't find any matches for/)).toBeDefined();
    expect(screen.getByText('"test query"')).toBeDefined();
  });

  it('displays suggestions', () => {
    render(<NoResultsFound searchQuery="test query" onBackToReading={mockOnBackToReading} />);
    
    expect(screen.getByText('Check your spelling')).toBeDefined();
    expect(screen.getByText('Try using different or more general keywords')).toBeDefined();
    expect(screen.getByText('Ensure you\'re searching within the correct chapter or section')).toBeDefined();
  });

  it('calls onBackToReading when button is clicked', () => {
    render(<NoResultsFound searchQuery="test query" onBackToReading={mockOnBackToReading} />);
    
    const backButton = screen.getByRole('button', { name: /Back to Reading/i });
    fireEvent.click(backButton);
    
    expect(mockOnBackToReading).toHaveBeenCalled();
  });
});
