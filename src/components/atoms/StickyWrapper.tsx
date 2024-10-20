import React from 'react';

interface StickyWrapperProps {
  children: React.ReactNode;
  isVisible: boolean;
}

export const StickyWrapper: React.FC<StickyWrapperProps> = ({ children, isVisible }) => {
  return (
    <div
      className={`sticky top-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {children}
    </div>
  );
};
