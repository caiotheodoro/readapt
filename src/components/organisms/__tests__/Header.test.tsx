import { render, screen } from '@testing-library/react';
import { Header } from '../Header';
import { describe, expect, it } from 'vitest';

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    
    const logoElement = screen.getByText('Readapt');
    expect(logoElement).toBeDefined();
  });

  it('has the correct CSS classes', () => {
    const { container } = render(<Header />);
    
    const header = container.firstChild as HTMLElement;
    expect(header).toBeDefined();
    expect(header.className).toContain('px-4 lg:px-6 h-14 flex items-center justify-between w-full bg-white shadow-sm');
  });
});
