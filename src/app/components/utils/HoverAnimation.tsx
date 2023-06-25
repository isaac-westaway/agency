"use client"

import React, { useRef, useEffect } from 'react';

interface HoverAnimationProps {
  speed: number;
  children: React.ReactNode;
}

const HoverAnimation: React.FC<HoverAnimationProps> = ({ speed, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const containerElement = containerRef.current;

      const animation = containerElement.animate(
        [
          { transform: 'translateY(100%)', opacity: 0 },
          { transform: 'translateY(0)', opacity: 1 }
        ],
        { duration: speed * 1000, easing: 'ease-in-out', fill: 'forwards' }
      );

      return () => {
        // Cleanup animation on unmount
        animation.cancel();
      };
    }
  }, [speed]);

  return <span ref={containerRef}>{children}</span>;
};

export default HoverAnimation;
