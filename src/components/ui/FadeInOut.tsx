"use client"
import { AnimatePresence, motion } from "motion/react";
import React from "react";

const FadeInOut = ({ text }: { text: string }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{
          duration: 2, // Animation duration in seconds
          repeat: Infinity, // Repeat the animation infinitely
          repeatType: "reverse", // Reverse the animation on each repeat
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeInOut;
