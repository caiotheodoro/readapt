import { render, screen } from '@testing-library/react';
import { HeroDescription } from '../../HeroDescription';
import { describe, expect, it } from 'vitest';
describe('HeroDescription', () => {
  it('renders the description text', () => {
    render(<HeroDescription description="Test Description" />);
    expect(screen.getByText('Test Description')).toBeDefined();
  });

  it('has the correct CSS classes', () => {
    render(<HeroDescription description="Test Description" />);
    const descriptionElement = screen.getByText('Test Description');
    expect(descriptionElement.className).toContain('text-lg md:text-xl text-blue-50 mb-8');
  });
});
