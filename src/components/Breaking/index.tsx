import React from "react";
import MovingText from "./MovingText";

const Breaking = () => {
  return (
    <div className="w-full px-16 flex flex-row items-center justify-start gap-4 bg-primary border-b-[4px] border-t-[4px] border-solid border-green ">
      <p className="text-[24px] text-red font-grandstander-regular_400  leading-[160%] whitespace-nowrap ">
        Breaking :
      </p>
      <div className="flex flex-1 items-center justify-center ">
        <MovingText />
      </div>
    </div>
  );
};

export default Breaking;
