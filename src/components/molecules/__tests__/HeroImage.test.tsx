import { render } from '@testing-library/react';
import { HeroImage } from '../HeroImage';
import { describe, expect, it } from 'vitest';

describe('HeroImage', () => {
  it('renders the image with correct attributes', () => {
    const { container } = render(<HeroImage />);
    
    const image = container.querySelector('img');
    expect(image).toBeDefined();
    expect(image?.getAttribute('src')).toContain('/_next/image?url=%2Fhero-image.png&w=1200&q=75');
    expect(image?.getAttribute('alt')).toBe('Readapt Hero Image');
  });

  it('has the correct CSS classes', () => {
    const { container } = render(<HeroImage />);
    
    const div = container.firstChild;
    expect(div).toBeDefined();

    const firstChild = div as HTMLElement;
    expect(firstChild).toBeDefined();
    expect(firstChild.className).toContain('flex-1 mt-10 md:mt-0');
  });
});
