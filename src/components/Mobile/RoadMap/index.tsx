import Image from "next/image";
import React from "react";
import Slides from "./Slides";

const RoadMap = () => {
  return (
    <section className=" flex flex-col items-start justify-start  py-8 px-5 bg-background w-full gap-4">
      <p
        className="text-[32px] font-grandstander-black_900 leading-normal text-secondary "
        style={{
          WebkitTextStrokeColor: "#FFD700",
          WebkitTextStrokeWidth: "4px",
          paintOrder: "stroke fill",
        }}
      >
        PEPIUS CAESAR’S ROADMAP
      </p>
      <div className=" flex w-full flex-col items-start justify-start ">
        <Image
          src={"/images/Images/Slide6Image1.png"}
          alt="Roadmap"
          width={233}
          height={175}
          className="self-end "
        />

        <div className="w-full">
          <Slides />
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
