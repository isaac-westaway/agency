"use client"

import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';

interface RevealOnceProps {
  children: ReactNode;
}

const RevealOnce: FC<RevealOnceProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          animateIn();
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px", threshold: 0.2 }
    );

    const element = containerRef.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasAnimated]);

  const animateIn = () => {
    const element = containerRef.current;

    if (element) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
      element.style.transition = "opacity 0.3s, transform 1.2s"; // Shortened animation duration
    }
  };

  return (
    <div ref={containerRef} style={{ opacity: 0, transform: "translateY(40px)" }}>
      {children}
    </div>
  );
};

export default RevealOnce;
