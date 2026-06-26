// src/hooks/useScrollAnimation.js
import { useEffect, useRef, useState } from 'react';

/**
 * useScrollAnimation – a tiny wrapper around IntersectionObserver.
 * Returns a ref to attach to an element and a boolean "isVisible" that
 * becomes true when the element enters the viewport.
 *
 * @param {Object} options
 * @param {number} [options.threshold=0.1] – proportion of element visible before triggering.
 * @param {string} [options.rootMargin='0px'] – margin around the root.
 * @param {boolean} [options.once=true] – if true the observer disconnects after first trigger.
 */
export default function useScrollAnimation({ threshold = 0.1, rootMargin = '0px', once = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // Respect prefers-reduced-motion – instantly show the element.
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && observer) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      if (observer && node) observer.unobserve(node);
    };
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
