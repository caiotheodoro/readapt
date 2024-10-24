import { render, screen } from '@testing-library/react';
import { Logo } from '../Logo';
import { describe, expect, it } from 'vitest';
describe('Logo', () => {
  it('renders the logo text', () => {
    render(<Logo />);
    const logoText = screen.getByText('Readapt');
    expect(logoText).toBeDefined();
  });

  it('has the correct CSS classes', () => {
    render(<Logo />);
    const logoElement = screen.getByText('Readapt');
    expect(logoElement.className).toContain('text-5xl font-bold tracking-tighter');
  });
});
