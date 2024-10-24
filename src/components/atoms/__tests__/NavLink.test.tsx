import { render, screen } from '@testing-library/react';
import { NavLink } from '../NavLink';
import { describe, expect, it } from 'vitest';
describe('NavLink', () => {
  it('renders the link with correct href', () => {
    render(<NavLink href="/test">Test Link</NavLink>);
    const link = screen.getByRole('link', { name: 'Test Link' });
    expect(link).toBeDefined();
    expect(link.getAttribute('href')).toBe('/test');
  });

  it('renders the children content', () => {
    render(<NavLink href="/test">Test Content</NavLink>);
    expect(screen.getByText('Test Content')).toBeDefined();
  });

  it('has the correct CSS classes', () => {
    render(<NavLink href="/test">Test Link</NavLink>);
    const link = screen.getByRole('link', { name: 'Test Link' });
    expect(link.className).toContain('text-sm font-medium hover:underline underline-offset-4');
  });
});
