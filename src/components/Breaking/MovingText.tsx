import React from "react";
import Marquee from "../ui/Infinitemovingcr";

const reviews = [
  "“Kekius Maximus Is Cunt” - Parthia Kingdom",
  "$PEPA Is Building SupaDapp!",
];

const MovingText = () => {
  return (
    <div
      className="w-full 
    
    relative "
    >
      <div
        className="absolute 
      left-0
      top-0
      z-10
      h-full
      w-[200px]
      bg-gradient-to-r from-primary to-[#ffffff]/0"
      />
      <div className="absolute right-0 top-0 z-10 h-full w-[200px] bg-gradient-to-l from-primary to-[#ffffff]/0  " />
      <Marquee className="[--duration:20s] [--gap:1.5rem] md:[--gap:4rem]">
        {reviews.map((review, index) => (
          <p
            className="text-background font-grandstander-regular_400 text-[20px] leading-normal tracking-[1.2px]"
            key={index}
          >
            {" "}
            {review}{" "}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default MovingText;
