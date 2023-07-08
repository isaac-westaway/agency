"use client"

import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';

interface RevealOnceProps {
  children: ReactNode;
}

const RevealOnce: FC<RevealOnceProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const animateIn = () => {
      if (element) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.transition = 'opacity 1.2s, transform 1.2s';
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          animateIn();
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px', threshold: 0.01 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={ref}
      style={{
        opacity: hasAnimated ? '1' : '0',
        transform: hasAnimated ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 1.2s, transform 1.2s',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnce;
