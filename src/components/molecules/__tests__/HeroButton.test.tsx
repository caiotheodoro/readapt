import { render, screen, fireEvent } from '@testing-library/react';
import { HeroButton } from '../HeroButton';
import { describe, expect, it, vi } from 'vitest';
import { useRouter } from 'next/navigation';

// Mock the entire next/navigation module
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
  })),
}));

describe('HeroButton', () => {
  it('renders the CTA text', () => {
    render(<HeroButton cta="Test CTA" />);
    expect(screen.getByText('Test CTA')).toBeDefined();
  });

  it('renders two buttons', () => {
    render(<HeroButton cta="Test CTA" />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  it('navigates to /books when CTA button is clicked', () => {
    const pushMock = vi.fn();
    vi.mocked(useRouter).mockReturnValue({ push: pushMock } as any);

    render(<HeroButton cta="Test CTA" />);
    fireEvent.click(screen.getByText('Test CTA'));
    
    expect(pushMock).toHaveBeenCalledWith('/books');
  });

  it('navigates to /architecture when code button is clicked', () => {
    const pushMock = vi.fn();
    vi.mocked(useRouter).mockReturnValue({ push: pushMock } as any);

    render(<HeroButton cta="Test CTA" />);
    fireEvent.click(screen.getAllByRole('button')[1]);
    
    expect(pushMock).toHaveBeenCalledWith('/architecture');
  });
});
