import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AccessibilityFeedbackCard } from '../AccessibilityFeedbackCard';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { useSubmitFeedback } from '@/src/hooks/useSubmitFeedback';

vi.mock('@/src/store/accessibilityStore', () => ({
  useAccessibilityStore: () => ({
    fontSize: 'normal',
    setScore: vi.fn(),
    predictedVisualImpairment: 'mild',
  }),
}));

// Mock the Card and CardContent components
vi.mock('@/src/components/ui/card', () => ({
  Card: ({ children }: { children: React.ReactNode }) => <div data-testid="card">{children}</div>,
  CardContent: ({ children }: { children: React.ReactNode }) => <div data-testid="card-content">{children}</div>,
}));

// Mock the Button component
vi.mock('@/src/components/ui/button', () => ({
  Button: ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => <button {...props}>{children}</button>,
}));

vi.mock('@/src/store/feedbackCardStore', () => ({
  useFeedbackCardStore: () => ({
    isVisible: true,
    setIsVisible: vi.fn(),
  }),
}));

vi.mock('@/src/store/cameraDialogStore', () => ({
  useCameraDialogStore: () => ({
    isOpen: false,
  }),
}));

vi.mock('@/src/hooks/useSubmitFeedback', () => ({
  useSubmitFeedback: () => ({
    submitFeedback: vi.fn().mockResolvedValue({}),
    isLoading: false,
    error: null,
  }),
}));

describe('AccessibilityFeedbackCard', () => {
  beforeEach(() => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
    vi.spyOn(Storage.prototype, 'setItem');
  });

  it('renders when visible', () => {
    render(<AccessibilityFeedbackCard />);
    expect(screen.getByText(/Do you feel content with the current layout?/)).toBeDefined();
    expect(screen.getByTestId('card')).toBeDefined();
    expect(screen.getByTestId('card-content')).toBeDefined();
  });

  it('renders all accessibility options', () => {
    render(<AccessibilityFeedbackCard />);
    expect(screen.getByLabelText('Normal')).toBeDefined();
    expect(screen.getByLabelText('Large')).toBeDefined();
    expect(screen.getByLabelText('Very Large')).toBeDefined();
    expect(screen.getByLabelText('Extra Large')).toBeDefined();
  });

  
});
