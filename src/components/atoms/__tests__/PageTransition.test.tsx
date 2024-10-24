import { render } from '@testing-library/react';
import { PageTransition } from '../PageTransition';
import { describe, expect, it } from 'vitest';
describe('PageTransition', () => {
  it('renders children content', () => {
    const { getByText } = render(
      <PageTransition>
        <div>Test Content</div>
      </PageTransition>
    );
    expect(getByText('Test Content')).toBeDefined();
  });

  // Note: Testing Framer Motion animations might require more complex setup or snapshot testing
});
