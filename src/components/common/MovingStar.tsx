import React from "react";
import Marquee from "../ui/Infinitemovingcr";
import Image from "next/image";

const MovingStar = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-auto -z-10">
      <Marquee
        reverse
        className="[--duration:20s] [--gap:1.5rem] md:[--gap:4rem]"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <Image
              alt="star"
              height={488}
              src={"/images/Images/star.png"}
              width={211.6}
            />
            <Image
              alt="star"
              height={488}
              src={"/images/Images/star.png"}
              width={211.6}
              className="rotate-180"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MovingStar;
