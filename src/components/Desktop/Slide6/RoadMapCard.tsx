import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
const RoadMapCard = ({
  phase,
  title,
  details,
}: {
  phase: number;
  title: string;
  details: string[];
}) => {
  return (
    <div
      className="col-span-1 px-6 relative z-10 py-6 flex flex-col items-start justify-start gap-2 border-[4px] border-solid border-primary bg-background rounded-[24px]"
      style={{
        boxShadow: "4px 4px 0px 0px #FFD700",
      }}
    >
      <div className="absolute translate-x-[25%] -translate-y-[60%] top-0 left-0 ">
        <motion.div
          animate={{ rotateY: [0, 180, 360] }}
          transition={{
            repeat: Infinity, duration: 2, ease: "linear",
            delay: 0.5 * phase,
           }}
        >
          <p
            className="text-[24px] text-text font-grandstander-black_900  absolute left-[50%] -translate-x-[50%] top-1/2 -translate-y-1/2"
            style={{
              WebkitTextStrokeColor: "#4B0082",
              WebkitTextStrokeWidth: "4px",
              paintOrder: "stroke fill",
            }}
          >
            {" "}
            {phase}{" "}
          </p>
          <Image
            src={"/images/Images/coin.png"}
            alt="coin"
            width={72}
            height={72}
          />
        </motion.div>
      </div>
      <p className="text-text font-grandstander-bold_700 text-[24px] leading-[125%]">
        Phase {phase}: {title}
      </p>
      <ul className=" list-disc pl-[20px] flex flex-col items-start max-w-[366px]  ">
        {details.map((item, index) => {
          return (
            <li
              key={index}
              className="text-text text-[16px] leading-[160%] font-grandstander-medium_500 "
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RoadMapCard;
