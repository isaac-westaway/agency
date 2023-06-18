"use client"

import { FC, ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedImageProps {
  children: ReactNode;
  flyInRight?: boolean;
}

const AnimatedImage: FC<AnimatedImageProps> = ({ children, flyInRight = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      // Element is scrolled into view, perform any additional actions if needed
    }
  }, [inView]);

  const variants = {
    hidden: { opacity: 0, x: flyInRight ? '100%' : '-100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const containerStyles = {
    overflow: 'hidden',
    width: '100%', // Set container width to 100% by default
  };

  const containerStylesMobile = {
    ...containerStyles,
    '@media (max-width: 640px)': {
      width: 'auto', // Adjust container width for mobile devices
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      style={containerStylesMobile}
    >
      {inView && children}
    </motion.div>
  );
};

export default AnimatedImage;
