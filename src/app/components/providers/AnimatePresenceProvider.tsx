"use client";

import { motion, AnimatePresence } from "framer-motion";

import { usePathname } from "next/navigation";

interface AnimatePresenceProps {
  children: React.ReactNode;
}

const AnimatePresenceProvider: React.FC<AnimatePresenceProps> = ({
  children,
}) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
      >
      {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatePresenceProvider;
