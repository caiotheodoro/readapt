import { render, screen, fireEvent } from '@testing-library/react';
import { Hero } from '../Hero';
import { describe, expect, it, vi } from 'vitest';
import { useRouter } from 'next/navigation';
import { useHeroStore } from '@/src/store/heroStore';

// Mock the next/navigation module
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

// Mock the heroStore
vi.mock('@/src/store/heroStore', () => ({
  useHeroStore: vi.fn(),
}));

describe('Hero', () => {
  const mockProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    description: 'Test Description',
    cta: 'Test CTA',
  };

  const mockRouter = { push: vi.fn() };
  const mockSetHasInteracted = vi.fn();

  beforeEach(() => {
    vi.mocked(useRouter).mockReturnValue(mockRouter as any);
    vi.mocked(useHeroStore).mockReturnValue({
      hasInteracted: false,
      setHasInteracted: mockSetHasInteracted,
    } as any);
  });

  it('renders hero content correctly', () => {
    render(<Hero {...mockProps} />);
    
    expect(screen.getByText('Test Title')).toBeDefined();
    expect(screen.getByText('Test Subtitle')).toBeDefined();
    expect(screen.getByText('Test Description')).toBeDefined();
    expect(screen.getByText('Test CTA')).toBeDefined();
  });

  it('navigates to /books on interaction when not previously interacted', () => {
    render(<Hero {...mockProps} />);
    
    fireEvent.keyDown(window, { key: 'Enter' });
    
    expect(mockSetHasInteracted).toHaveBeenCalledWith(true);
    expect(mockRouter.push).toHaveBeenCalledWith('/books');
  });

  it('does not navigate when already interacted', () => {
    vi.mocked(useHeroStore).mockReturnValue({
      hasInteracted: true,
      setHasInteracted: mockSetHasInteracted,
    } as any);

    render(<Hero {...mockProps} />);
    
    fireEvent.keyDown(window, { key: 'Enter' });
    
    expect(mockSetHasInteracted).toHaveBeenCalled();
    expect(mockRouter.push).toHaveBeenCalled();
  });
});
