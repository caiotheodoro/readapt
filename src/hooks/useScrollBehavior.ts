import { useState, useEffect, useCallback, RefObject } from 'react';

export function useScrollBehavior(ref: RefObject<HTMLElement>) {
  const [showElement, setShowElement] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const elementHeight = ref.current?.offsetHeight || 0;

    if (currentScrollY < lastScrollY) {
      setShowElement(true);
    } else if (currentScrollY > lastScrollY && currentScrollY > elementHeight) {
      setShowElement(false);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY, ref]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return showElement;
}
