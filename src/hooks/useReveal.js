import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to all `.reveal` elements
 * and adds the `.visible` class when they enter the viewport.
 */
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
