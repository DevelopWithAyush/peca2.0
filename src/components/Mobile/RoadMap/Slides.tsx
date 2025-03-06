"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircle } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

type Phase = {
  phase: number;
  title: string;
  details: string[];
};

const phases: Phase[] = [
  {
    phase: 1,
    title: "Presale Process",
    details: [
      "Memetic branding of the project",
      "Smart contract audit and security",
      "Launch of the SPECA token during the presale",
      "Partnerships with launchpads and community growth efforts.",
    ],
  },
  {
    phase: 2,
    title: "Token Launch and Listings",
    details: [
      "Token generation event",
      "Listings on DEX and CEX platforms",
      "Community participation",
      "Focus on maintaining healthy financial indicators",
    ],
  },
  {
    phase: 3,
    title: "SupaDapp Launch",
    details: [
      "SupaDapp launch with extensive global marketing",
      "Continuous onboarding and integration of dApps",
      "Product enhancements and new feature rollouts",
    ],
  },
  {
    phase: 4,
    title: "Ecosystem Enhancements",
    details: [
      "Multifold growth in downloads and active users",
      "Partnership development",
      "Continuous improvements to maintain industry leadership",
    ],
  },
];

export default function Slides() {
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1); // 1 for next, -1 for previous

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev === phases.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? phases.length - 1 : prev - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackTouch: true,
  });

  return (
    <div {...handlers} className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={phases[index].phase}
          initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-[265px] bg-green text-white rounded-[24px] p-6 shadow-lg relative border-4 border-solid border-primary"
          style={{
            boxShadow: "4px 4px 0px 0px var(--primary, #FFD700)",
          }}
        >
          <div className="absolute top-0 -translate-y-[60%] left-5 text-purple-800 text-lg font-bold">
            <Coin number={phases[index].phase} />
          </div>
          <h2 className="text-[24px] font-grandstander-bold_700 mb-3">
            {phases[index].title}
          </h2>
          <ul className="space-y-2 text-sm">
            {phases[index].details.map((detail, i) => (
              <li
                key={i}
                className="list-disc ml-5 text-text text-[16px] font-grandstander-medium_500"
              >
                {detail}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-5 space-x-2">
        {phases.map((phase, i) => (
          <FaCircle
            key={phase.phase}
            className={`cursor-pointer transition-all duration-300 text-[12px] ${
              i === index ? "text-primary" : "text-primary text-opacity-25"
            }`}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}

const Coin = ({ number }: { number: number }) => {
  return (
    <div className="relative w-auto">
      <p
        className="absolute w-full h-full flex font-grandstander-black_900 px-[32px] py-[26px] text-text text-[24px] leading-[110%]"
        style={{
          WebkitTextStrokeWidth: "4px",
          WebkitTextStrokeColor: "#4B0082",
          paintOrder: "stroke fill",
        }}
      >
        {number}
      </p>
      <Image src="/images/Images/coin.png" width={72} height={72} alt="Coin" />
    </div>
  );
};
