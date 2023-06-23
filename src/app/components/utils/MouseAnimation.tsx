"use client"

import { useState } from 'react';

interface MouseAnimationProps {
    children: React.ReactNode
}

const MouseAnimation: React.FC<MouseAnimationProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative"
      onMouseMove={handleMouseMove}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transform: `rotateX(${mousePosition.y / 10}deg) rotateY(${
          -mousePosition.x / 10
        }deg)`,
      }}
    >
      {children}
    </div>
  );
};

export default MouseAnimation;
