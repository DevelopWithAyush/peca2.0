"use client";

import { motion } from "framer-motion";

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <motion.div
                animate={{ rotateY: [0, 180, 360] }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 border-4 border-yellow-500 shadow-lg"
            >
                🟡
            </motion.div>
        </div>
    );
};

export default Page;
