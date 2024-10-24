import { render } from '@testing-library/react';
import { EbookSkeleton } from '../EbookSkeleton';
import { describe, expect, it } from 'vitest';

describe('EbookSkeleton', () => {
  it('renders the main container', () => {
    const { container } = render(<EbookSkeleton />);
    expect(container.firstChild).toBeDefined();

    const firstChild = container.firstChild as HTMLElement;
    expect(firstChild).toBeDefined();
    expect(firstChild.className).toContain('w-full h-full flex flex-col items-center justify-center bg-gray-100 p-8');
  });

  it('renders the main skeleton element', () => {
    const { container } = render(<EbookSkeleton />);
    const mainSkeleton = container.querySelector('shadow-md');
    expect(mainSkeleton).toBeDefined();
  });

  it('renders two smaller skeleton elements', () => {
    const { container } = render(<EbookSkeleton />);
    const smallerSkeletons = container.querySelectorAll('.w-16.h-8.bg-gray-200.rounded');
    expect(smallerSkeletons.length).toBe(2);
  });
});
