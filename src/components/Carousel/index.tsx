"use client";
import { DownArrow } from "@/VectorImages/Image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Slide1 from "../Slide1";
import Slide2 from "../Slide2";
import Slide3 from "../Slide3";
import Slide4 from "../Slide4";
import Slide6 from "../Slide6";

const Carousel: React.FC = () => {
  const slides = [
    <Slide1 key={1} />,
    <Slide2 key={2} />,
    <Slide3 key={3} />,
    <Slide4 key={4} />,
    // <Slide5 key={5} />,
    <Slide6 key={6} />,
    // <Slide7 key={6} />,
  ];

  const playSound = () => {
    const audio = new Audio("/Sound/click.mp3"); // Path to the audio file
    audio.play();
  };

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = (): void => {
    playSound();
    setCurrentIndex(
      currentIndex === slides.length - 1 ? currentIndex : currentIndex + 1
    );
  };

  const prevSlide = (): void => {
    playSound();
    setCurrentIndex(currentIndex === 0 ? currentIndex : currentIndex - 1);
  };

  const variants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.9 },
  };

  return (
    <>
      <div className="flex flex-col items-start justify-start ">
        <button
          className={`fixed z-[999]  top-1/2 left-[5%] 
            text-text 
            bg-text 
            p-4 aspect-square 
            rotate-90 
            rounded-full 
            border-[2px] 
            border-solid border-background transform -translate-y-1/2 ${
              currentIndex === 0 ? "hidden" : "block"
            }`}
          onClick={prevSlide}
          style={{
            boxShadow: "0px 2px 10px 0px rgba(253, 253, 253, 0.52)",
          }}
        >
          <DownArrow />
        </button>

        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute w-full ${
              index === currentIndex ? "block" : "hidden"
            }`}
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={variants}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            {slide}
          </motion.div>
        ))}

        <button
          className={`fixed z-[999] top-1/2 right-[5%]
            
             bg-text 
            p-4 aspect-square 
            rounded-full 
            border-[2px] 
            border-solid
            -rotate-90
            border-background 
            transform -translate-y-1/2 text-text ${
              currentIndex === slides.length - 1 ? "hidden" : "block"
            }`}
          onClick={nextSlide}
          style={{
            boxShadow: "0px 2px 10px 0px rgba(253, 253, 253, 0.52)",
          }}
        >
          <DownArrow />
        </button>
      </div>
    </>
  );
};

export default Carousel;
