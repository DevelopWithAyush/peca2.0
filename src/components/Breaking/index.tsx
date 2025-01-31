import React from "react";
import MovingText from "./MovingText";

const Breaking = () => {
  return (
    <div className="w-full px-5 xl:px-16 flex flex-row items-center justify-start gap-4 bg-primary border-b-[4px] border-t-[4px] border-solid border-green">
      <p className="text-[16px] leading-[0.96px]  xl:text-[24px] text-red font-grandstander-regular_400  xl:leading-[160%] whitespace-nowrap ">
        Breaking :
      </p>
      <div className="flex flex-1 items-center justify-center ">
        <MovingText />
      </div>
    </div>
  );
};

export default Breaking;
