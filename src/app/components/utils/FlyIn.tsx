"use client"

import { FC, ReactNode, useEffect, useRef, useState } from 'react';

interface AnimatedImageProps {
  children: ReactNode;
  flyInRight?: boolean;
}

const AnimatedImage: FC<AnimatedImageProps> = ({ children, flyInRight = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const currentContainerRef = containerRef.current;

    if (currentContainerRef) {
      observer.observe(currentContainerRef);
    }

    return () => {
      if (currentContainerRef) {
        observer.unobserve(currentContainerRef);
      }
    };
  }, []);

  const containerStyles: React.CSSProperties = {
    overflow: 'hidden',
    width: '100%',
  };

  const containerStylesMobile: React.CSSProperties = {
    ...containerStyles,
    // Media query styles
    ...(isVisible && {
      '@media (max-width: 640px)': {
        width: 'auto',
      },
    }),
  };

  const animationStyles: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : `translateX(${flyInRight ? '100%' : '-100%'})`,
    transition: 'opacity 1s, transform 1s',
  };

  return (
    <div ref={containerRef} style={containerStylesMobile}>
      <div style={animationStyles}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedImage;
