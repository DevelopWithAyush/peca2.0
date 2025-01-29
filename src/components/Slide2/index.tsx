"use client";
import Breaking from "../Breaking";
import Header from "../Header";

import TokenBox from "../common/TokenBox";
import Content from "./Content";

const Slide2 = () => {
  return (
    <div className="bg-[url('/images/Background1.png')]   bg-no-repeat bg-contain bg-bottom  relative w-[100vw]    ">
      <div className=" w-full bg-background z-[10] ">
        <Header />
        <Breaking />
      </div>

      <div className=" w-full max-w-[88rem] mx-auto  px-8 py-[32px] ">
        <div className=" flex flex-row items-start justify-start gap-12">
          <TokenBox />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Slide2;
