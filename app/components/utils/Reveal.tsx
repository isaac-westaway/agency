"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface FramerRevealProps {
  children: React.ReactNode;
}

const FramerReveal: React.FC<FramerRevealProps> = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { rootMargin: '0px', threshold: 0.2 } // Adjust the threshold and rootMargin as desired
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Adjust the duration as desired (in seconds)
        ease: 'easeOut', // Adjust the easing function as desired
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FramerReveal;
