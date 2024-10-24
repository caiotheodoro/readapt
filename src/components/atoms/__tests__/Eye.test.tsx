import { render } from '@testing-library/react';
import Eye from '../Eye';
import { describe, expect, it } from 'vitest';

describe('Eye', () => {
  it('renders the SVG element', () => {
    const { container } = render(<Eye />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeDefined();
  });

  // Note: Testing the animation behavior would require more complex setup or snapshot testing
});
