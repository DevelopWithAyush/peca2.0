// "use client"
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const TypingAnimation = ({ text }: { text: string }) => {
//     const [displayedText, setDisplayedText] = useState("");
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         if (index < text.length) {
//             const timeout = setTimeout(() => {
//                 setDisplayedText((prev) => prev + text.charAt(index));
//                 setIndex(index + 1);
//             }, 100);

//             return () => clearTimeout(timeout);
//         } else {
//             const resetTimeout = setTimeout(() => {
//                 setDisplayedText("");
//                 setIndex(0);
//             }, 1500); // Delay before restarting the animation

//             return () => clearTimeout(resetTimeout);
//         }
//     }, [index, text]);

//     return (
//         <motion.h1
//             className=" text-white"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//         >
//             {displayedText}
//             <motion.span
//                 className="inline-block w-[1px] h-4 bg-white ml-1"
//                 animate={{ opacity: [0, 1, 0] }}
//                 transition={{ repeat: Infinity, duration: 0.8 }}
//             />
//         </motion.h1>
//     );
// };

// export default TypingAnimation;


"use client"
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TypingAnimation = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex(index + 1);
            }, 100);

            return () => clearTimeout(timeout);
        } else {
            const resetTimeout = setTimeout(() => {
                setIsVisible(false);
                setTimeout(() => {
                    setDisplayedText("");
                    setIndex(0);
                    setIsVisible(true);
                }, 500); // Delay before fading in again
            }, 1500); // Delay before starting fade-out

            return () => clearTimeout(resetTimeout);
        }
    }, [index, text]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.h1
                    className="text-4xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {displayedText}
                    <motion.span
                        className="inline-block w-1 h-2 bg-white ml-1"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                    />
                </motion.h1>
            )}
        </AnimatePresence>
    );
};

export default TypingAnimation;
