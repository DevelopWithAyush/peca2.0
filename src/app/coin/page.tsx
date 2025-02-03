// app/components/FadeInOut.js
"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Page() {
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1, // Animation duration in seconds
            repeat: Infinity, // Repeat the animation infinitely
            ease: "linear",
          }}
          className="p-6 bg-white rounded-xl shadow-xl text-center text-lg font-semibold"
        >
          This is a fade-in & fade-out animation!
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
