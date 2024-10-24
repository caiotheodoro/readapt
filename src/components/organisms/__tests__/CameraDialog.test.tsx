import { render, screen, fireEvent } from '@testing-library/react';
import { CameraDialog } from '../CameraDialog';
import { describe, expect, it, vi } from 'vitest';

// Mock the necessary hooks and components
vi.mock('@/src/hooks/useProcessedImageUpload', () => ({
  useProcessedImageUpload: () => ({
    uploadProcessedImage: vi.fn(),
    isLoading: false,
    error: null,
  }),
}));

vi.mock('@/src/store/cameraDialogStore', () => ({
  useCameraDialogStore: () => ({
    isOpen: true,
    setIsOpen: vi.fn(),
  }),
}));

vi.mock('@/src/store/cameraStore', () => ({
  useCameraStore: () => ({
    imageState: { file: null, preview: null },
    isCapturing: false,
    captureImage: vi.fn(),
    handleFileUpload: vi.fn(),
    resetImage: vi.fn(),
    setIsCapturing: vi.fn(),
  }),
}));

vi.mock('@/src/store/accessibilityStore', () => ({
  useAccessibilityStore: () => ({
    setAccessibilityData: vi.fn(),
  }),
}));

describe('CameraDialog', () => {
  it('renders the dialog content', () => {
    render(<CameraDialog />);
    
    expect(screen.getByText('Capture or Upload Image')).toBeDefined();
    expect(screen.getByText('We need a picture of you to adapt your reading experience.')).toBeDefined();
  });

  it('renders capture and upload buttons when no image is selected', () => {
    render(<CameraDialog />);
    
    expect(screen.getByText('Capture')).toBeDefined();
    expect(screen.getByText('Upload')).toBeDefined();
  });

  it('disables submit button when no image is selected', () => {
    render(<CameraDialog />);
    
    const submitButton = screen.getByText('Submit');
    expect(submitButton).toBeDisabled();
  });
});
