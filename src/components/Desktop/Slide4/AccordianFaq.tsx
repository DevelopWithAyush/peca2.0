import { cn } from "@/lib/utility";
import { MinusIcon, PlusIcon } from "@/VectorImages/Image";
import { AnimatePresence, motion } from "framer-motion"; // For advanced animations
import { useEffect, useRef, useState } from "react";

const  AccordianFaq = ({
  title,
  desc,
  index,
}: {
  title: string;
  desc: string;
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const boxRef = useRef<HTMLDivElement>(null); // Explicitly type the ref

  const handleClickOutside = (event: MouseEvent) => {
    // Check if the click happened outside the boxRef
    if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={cn(
        "pb-0 w-full relative z-20   max-w-[820px] flex flex-col items-center justify-between rounded-[24px] cursor-pointer border-[4px] border-solid overflow-hidden",
        index % 3 === 0 && "bg-border border-secondary", // Every 3rd item starting from 0
        index % 3 === 1 && "bg-background border-text", // Every 3rd item starting from 1
        index % 3 === 2 && "bg-secondary border-primary" // Every 3rd item starting from 2
      )}
      style={{
        boxShadow: `4px 4px 0px 0px ${
          index % 3 === 0 ? "#705CFE" : index % 3 === 1 ? "#F5F5F5" : "#FFD700"
        }`,
      }}
      // Click anywhere to toggle
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex flex-row items-center justify-between p-4 xl:p-6 "
      >
        <p
          className={cn(
            "text-text font-grandstander-bold_700 leading-[160%] text-[18px] xl:text-[24px]"
          )}
        >
          {title}
        </p>
        <motion.button
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          className="p-[8px] rounded-full border-background border-solid bg-text aspect-square scale-[80%] xl:scale-[100%]"
          whileHover={{ scale: 1.1 }} // Hover effect
          whileTap={{ scale: 0.9 }} // Tap effect
          style={{
            boxShadow: "0px 4px 10px 0px rgba(188, 149, 228, 0.50)",
          }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }} // Rotate the arrow
            transition={{ type: "spring", stiffness: 300, damping: 20 }} // Springy rotation
          >
            {isOpen ? <MinusIcon /> : <PlusIcon />}
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
                "text-[14px] xl:text-[16px] font-grandstander-medium_500 text-text leading-[160%] rounded-t-[24px] p-6",
                index % 3 === 0 && "bg-secondary ",
                index % 3 === 1 && "bg-text text-background",
                index % 3 === 2 && "bg-primary text-background"
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

export default AccordianFaq;
