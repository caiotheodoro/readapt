import { render, screen } from '@testing-library/react';
import { HeroTitle } from '../../HeroTitle';
import { describe, expect, it } from 'vitest';

describe('HeroTitle', () => {
  it('renders the title text', () => {
    render(<HeroTitle title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeDefined();
  });

  it('has the correct CSS classes', () => {
    render(<HeroTitle title="Test Title" />);
    const titleElement = screen.getByText('Test Title');
    expect(titleElement.className).toContain('text-5xl font-bold tracking-tighter');
  });
});
