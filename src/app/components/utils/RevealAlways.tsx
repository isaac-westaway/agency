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
            element.classList.add('reveal-animation');
          } else {
            element.classList.remove('reveal-animation');
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

  return (
    <div ref={ref} className="reveal-container">
      {children}
    </div>
  );
};

export default RevealAlways;
