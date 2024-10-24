import { render, screen, fireEvent } from '@testing-library/react';
import { CookieConsent } from '../CookieConsent';
import { describe, expect, it, vi, beforeEach } from 'vitest';

describe('CookieConsent', () => {
  beforeEach(() => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
    vi.spyOn(Storage.prototype, 'setItem');
  });

  it('renders when cookies have not been accepted', () => {
    render(<CookieConsent />);
    expect(screen.getByText(/We use cookies to enhance your experience/)).toBeDefined();
  });

  it('does not render when cookies have been accepted', () => {
    Storage.prototype.getItem = vi.fn().mockReturnValue('true');
    render(<CookieConsent />);
    expect(screen.queryByText(/We use cookies to enhance your experience/)).toBeNull();
  });

  it('sets cookie and hides consent when Accept button is clicked', () => {
    render(<CookieConsent />);
    const acceptButton = screen.getByRole('button', { name: /Accept/i });
    fireEvent.click(acceptButton);
    
    expect(localStorage.setItem).toHaveBeenCalledWith('acceptedCookies', 'true');
    expect(screen.queryByText(/We use cookies to enhance your experience/)).toBeNull();
  });

  it('renders a link to policies', () => {
    render(<CookieConsent />);
    const policyLink = screen.getByRole('link', { name: /policies/i });
    expect(policyLink).toBeDefined();
    expect(policyLink.getAttribute('href')).toBe('/policies');
  });
});
