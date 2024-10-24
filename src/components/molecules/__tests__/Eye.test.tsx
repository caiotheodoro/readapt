import { render } from '@testing-library/react';
import Eye from '../Eye';
import { describe, expect, it } from 'vitest';

describe('Eye', () => {
  it('renders the SVG element', () => {
    const { container } = render(<Eye />);
    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();
  });

  it('has the correct viewBox', () => {
    const { container } = render(<Eye />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('viewBox')).toBe('0 0 160 120');
  });

  it('contains the main eye elements', () => {
    const { container } = render(<Eye />);
    expect(container.querySelector('ellipse')).toBeDefined();
    expect(container.querySelectorAll('circle').length).toBe(3);
  });
});
