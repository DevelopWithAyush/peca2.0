"use client"
import React from "react";
import Header from "../../Header";
import Breaking from "../../Breaking";
import TokenBox from "../../common/TokenBox";
import Content from "./Content";
import Image from "next/image";

const Slide1 = () => {
  return (
    <div className="bg-[url('/images/Background1.png')]   bg-no-repeat bg-contain bg-bottom  relative w-[100vw] overflow-hidden   ">
      <div className=" w-full bg-background z-[10] ">
        <Header />
        <Breaking />
      </div>

      <div className=" w-full max-w-[88rem] mx-auto  px-8 py-[32px] ">
        <div className=" relative flex flex-row items-start justify-start gap-12">
          <TokenBox />
          <div className="w-full pt-[17px] flex flex-col items-start justify-start gap-5">
            <Content />

          </div>
        </div>
      </div>
      <div className="absolute right-[-100px] bottom-[-40px] w-[530px]  h-[472px] z-10 ">
        <Image
          src="/images/Images/slide1Image1.png"
          alt="slide1Image1"
          fill
          style={{ objectFit: "contain" }}
          className="relative h-auto  w-[530px]"
        />
      </div>
    </div>
  );
};

export default Slide1;
