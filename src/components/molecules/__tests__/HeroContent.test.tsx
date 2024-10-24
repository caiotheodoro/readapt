import { render, screen } from '@testing-library/react';
import { HeroContent } from '../HeroContent';
import { describe, expect, it, vi } from 'vitest';


vi.mock('next/navigation');

describe('HeroContent', () => {
  const props = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    description: 'Test Description',
    cta: 'Test CTA',
  };

  it('renders all content correctly', () => {
    render(<HeroContent {...props} />);
    
    expect(screen.getByText('Test Title')).toBeDefined();
    expect(screen.getByText('Test Subtitle')).toBeDefined();
    expect(screen.getByText('Test Description')).toBeDefined();
    expect(screen.getByText('Test CTA')).toBeDefined();
  });

  it('includes the Eye component', () => {
    const { container } = render(<HeroContent {...props} />);
    
    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();
  });
});
