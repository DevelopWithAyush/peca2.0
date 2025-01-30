import { cn } from "@/lib/utility";
import { DownArrow } from "@/VectorImages/Image";
import { motion, AnimatePresence } from "framer-motion"; // For advanced animations
import React, { useEffect, useRef, useState } from "react";

const Accordian = ({ title, desc }: { title: string; desc: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const boxRef = useRef<HTMLDivElement>(null); // Explicitly type the ref

  const handleClickOutside = (event: MouseEvent) => {
    // Check if the click happened outside the boxRef
    if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={cn(
        "pb-0 w-full xl:w-[392.5px] flex flex-col items-center justify-between bg-border rounded-[24px] cursor-pointer border-[4px] border-solid overflow-hidden  ",
        title === "Get Wallet" && "bg-border border-secondary",
        title === "Fund Wallet" && "bg-green border-text ",
        title === "Buy & Stake" && "bg-secondary border-primary "
      )}
      style={{
        boxShadow: `4px 4px 0px 0px ${
          title === "Get Wallet"
            ? "#705CFE"
            : title === "Fund Wallet"
            ? "#F5F5F5"
            : "#FFD700"
        }`,
      }}
      // Click anywhere to toggle
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex flex-row items-center justify-between p-6 "
      >
        <p
          className={cn(
            "text-text font-grandstander-bold_700 leading-[160%] text-[24px]",
            title === "Get Wallet" && "text-text",
            title === "Fund Wallet" && "text-text",
            title === "Buy & Stake" && "text-text"
          )}
        >
          {title}
        </p>
        <motion.button
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          className="p-[8px] rounded-full border-background border-solid bg-text aspect-square"
          whileHover={{ scale: 1.1 }} // Hover effect
          whileTap={{ scale: 0.9 }}
          style={{
            boxShadow: "0px 4px 10px 0px rgba(188, 149, 228, 0.50)",
          }} // Tap effect
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }} // Rotate the arrow
            transition={{ type: "spring", stiffness: 300, damping: 20 }} // Springy rotation
          >
            <DownArrow />
          </motion.div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} // Start collapsed
            animate={{ height: "auto", opacity: 1 }} // Expand to full height
            exit={{ height: 0, opacity: 0 }} // Collapse
            transition={{ type: "spring", stiffness: 100, damping: 20 }} // Springy bounce
            className="overflow-hidden"
          >
            <motion.p
              className={cn(
                "text-[16px] font-grandstander-medium_500 text-text leading-[160%] rounded-t-[24px] p-6 ",

                title === "Get Wallet" && "text-text bg-secondary",
                title === "Fund Wallet" && "text-background bg-text ",
                title === "Buy & Stake" && "text-background bg-primary"
              )}
              initial={{ y: -20, opacity: 0 }} // Start slightly above and invisible
              animate={{ y: 0, opacity: 1 }} // Slide down and fade in
              exit={{ y: -20, opacity: 0 }} // Slide up and fade out
              transition={{ delay: 0.1 }} // Slight delay for a cascading effect
            >
              {desc}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordian;
