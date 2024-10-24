import { render } from '@testing-library/react';
import { BookSkeleton } from '../BookSkeleton';
import { describe, expect, it } from 'vitest';

describe('BookSkeleton', () => {
  it('renders the main container', () => {
    const { container } = render(<BookSkeleton />);
    expect(container.firstChild).toBeDefined();

    const firstChild = container.firstChild as HTMLElement;
    expect(firstChild).toBeDefined();
    expect(firstChild.className).toContain('bg-white rounded-lg shadow-md overflow-hidden');
  });

  it('renders the image placeholder', () => {
    const { container } = render(<BookSkeleton />);
    const imagePlaceholder = container.querySelector('.w-full.h-40.bg-gray-300.animate-pulse');
    expect(imagePlaceholder).toBeDefined();
  });

  it('renders three text placeholders', () => {
    const { container } = render(<BookSkeleton />);
    const textPlaceholders = container.querySelectorAll('.bg-gray-300.rounded.animate-pulse');
    expect(textPlaceholders.length).toBe(3);
  });
});
