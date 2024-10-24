import { render } from '@testing-library/react';
import { StickyWrapper } from '../StickyWrapper';
import { describe, expect, it } from 'vitest';

describe('StickyWrapper', () => {
  it('renders children content', () => {
    const { getByText } = render(
      <StickyWrapper isVisible={true}>
        <div>Test Content</div>
      </StickyWrapper>
    );
    expect(getByText('Test Content')).toBeDefined();
  });

  it('applies correct classes when visible', () => {
    const { container } = render(
      <StickyWrapper isVisible={true}>
        <div>Test Content</div>
      </StickyWrapper>
    );

    const firstChild = container.firstChild as HTMLElement;
    expect(firstChild).toBeDefined();
    expect(firstChild.className).toContain('translate-y-0');
    expect(firstChild.className).not.toContain('-translate-y-full');
  });

  it('applies correct classes when not visible', () => {
    const { container } = render(
      <StickyWrapper isVisible={false}>
        <div>Test Content</div>
      </StickyWrapper>
    );

    const firstChild = container.firstChild as HTMLElement;
    expect(firstChild).toBeDefined();
    expect(firstChild.className).toContain('-translate-y-full');
    expect(firstChild.className).not.toContain('translate-y-0');
  });
});
