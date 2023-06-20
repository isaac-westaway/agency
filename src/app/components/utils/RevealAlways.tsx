"use client"

import React, { FC, ReactNode, useEffect, useRef } from 'react';

interface RevealAlwaysProps {
  children: ReactNode;
}

const RevealAlways: FC<RevealAlwaysProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          animateIn();
        } else {
          animateOut();
        }
      },
      { rootMargin: "0px", threshold: 0.2 } // Adjust the threshold and rootMargin as desired
    );

    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const animateIn = () => {
    const element = ref.current;

    if (element) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
      element.style.transition = "opacity 1.2s, transform 1.2s";
    }
  };

  const animateOut = () => {
    const element = ref.current;

    if (element) {
      element.style.opacity = "0";
      element.style.transform = "translateY(40px)";
      element.style.transition = "opacity 1.2s, transform 1.2s";
    }
  };

  return (
    <div ref={ref} style={{ opacity: 0, transform: "translateY(40px)" }}>
      {children}
    </div>
  );
};

export default RevealAlways;
