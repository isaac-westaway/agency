"use client"

import React, { FC, ReactNode, useEffect, useRef } from 'react';

interface RevealAlwaysProps {
  children: ReactNode;
}

const RevealAlways: FC<RevealAlwaysProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            animateIn(element);
          } else {
            animateOut(element);
          }
        },
        { rootMargin: '0px', threshold: 0.01 }
      );

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }
  }, []);

  const animateIn = (element: HTMLDivElement) => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
    element.style.transition = 'opacity 1.2s, transform 1.2s';
  };

  const animateOut = (element: HTMLDivElement) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition = 'opacity 1.2s, transform 1.2s';
  };

  return (
    <div
      ref={ref}
      style={{ opacity: 0, transform: 'translateY(40px)', willChange: 'transform, opacity' }}
    >
      {children}
    </div>
  );
};

export default RevealAlways;
