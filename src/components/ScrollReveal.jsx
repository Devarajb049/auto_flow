// src/components/ScrollReveal.jsx
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

/**
 * ScrollReveal – wraps children and triggers CSS animation when the element
 * scrolls into view. Uses the `useScrollAnimation` hook for IntersectionObserver.
 *
 * Props:
 *   animation: string – name of the animation class (e.g., "fade-up")
 *   delay: number (ms) – optional animation delay
 *   duration: number (ms) – optional animation duration (overrides CSS default)
 *   repeat: boolean – if true, animation will play each time the element
 *                     re‑enters the viewport; otherwise it plays once.
 *   className: string – additional classes to apply to the wrapper.
 */
export default function ScrollReveal({
  animation = 'fade-up',
  delay = 0,
  duration,
  repeat = false,
  className = '',
  children,
}) {
  const { ref, isVisible } = useScrollAnimation({ once: !repeat });

  const style = {
    animationDelay: `${delay}ms`,
    ...(duration && { animationDuration: `${duration}ms` }),
  };

  const classes = `scroll-reveal ${animation} ${isVisible ? `${animation}--active` : ''} ${className}`;

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
}
