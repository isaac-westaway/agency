"use client";

import { AnimatePresence, motion } from "framer-motion";

import { usePathname } from "next/navigation";

interface AnimatePresenceProps {
  children: React.ReactNode;
}

const AnimatePresenceProvider: React.FC<AnimatePresenceProps> = ({
  children,
}) => {
    const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        variants={{ 
            initialState: {
                opacity: 0,
            }, 
            animateState: { 
                opacity: 1,
            },  
            existState: {

            } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatePresenceProvider;
