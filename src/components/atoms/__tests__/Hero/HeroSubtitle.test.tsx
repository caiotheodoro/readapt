import { render, screen } from '@testing-library/react';
import { HeroSubtitle } from '../../HeroSubtitle';
import { describe, expect, it } from 'vitest';
describe('HeroSubtitle', () => {
  it('renders the subtitle text', () => {
    render(<HeroSubtitle subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Subtitle')).toBeDefined();
  });

  it('has the correct CSS classes', () => {
    render(<HeroSubtitle subtitle="Test Subtitle" />);
    const subtitleElement = screen.getByText('Test Subtitle');
    expect(subtitleElement.className).toContain('text-xl md:text-2xl text-blue-100 mb-4');
  });
});
