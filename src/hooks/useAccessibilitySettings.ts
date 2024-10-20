import { useAccessibilityStore } from '@/src/store/accessibilityStore';

export const useAccessibilitySettings = () => {
  const { fontSize, contentDensity } = useAccessibilityStore();

  const getFontSize = () => {
    switch (fontSize) {
      case 'slightly-large': return {
        small: 'text-lg',
        medium: 'text-xl',
        large: 'text-2xl',
      };
      case 'large': return {
        small: 'text-lg',
        medium: 'text-xl',
        large: 'text-2xl',
      };
      case 'very-large': return {
        small: 'text-xl',
        medium: 'text-2xl',
        large: 'text-3xl',
      };
      case 'extra-large': return {
        small: 'text-2xl',
        medium: 'text-3xl',
        large: 'text-4xl',
      };
      default: return {
        small: 'text-base',
        medium: 'text-lg',
        large: 'text-xl',
      };
    }
  };

  const getContentDensity = () => {
    switch (contentDensity) {
      case 'slightly-reduced': return 'space-y-2';
      case 'reduced': return 'space-y-4';
      case 'very-reduced': return 'space-y-6';
      case 'minimal': return 'space-y-8';
      default: return 'space-y-1';
    }
  };

  const getGridColumns = () => {
    switch (contentDensity) {
      case 'reduced': return 'grid-cols-2 md:grid-cols-3';
      case 'minimal':
      case 'very-reduced': return 'grid-cols-1 md:grid-cols-2';
      default: return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4';
    }
  };

  const getEbookFontSizePercentage = () => {
    switch (fontSize) {
      case 'slightly-large': return 100;
      case 'large': return 115;
      case 'very-large': return 140;
      case 'extra-large': return 160;
      default: return 100;
    }
  };

  return { getFontSize, getContentDensity, getGridColumns, getEbookFontSizePercentage };
};
