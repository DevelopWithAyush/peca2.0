import { TokenCoin } from "@/VectorImages/Image";
import React from "react";

const Input = () => {
  return (
    <div className="flex flex-col items-start w-full justify-start">
      <div className="w-full flex flex-row items-center justify-between ">
        <p className="text-[16px] leading-[125%] font-grandstander-bold_700 text-background">
          Pay With SOL{" "}
        </p>
        <p className="text-[16px] leading-[125%] font-grandstander-bold_700 text-green">
          Max
        </p>
      </div>
      <div className="w-full relative border-[2px] border-solid border-primary py-[10px] rounded-[8px] px-6 flex flex-row items-center justify-between mt-[4px]">
        <input
          type="text"
          placeholder="0"
          className="text-[16px] text-background font-grandstander-bold_700 leading-[125%] w-full  bg-transparent placeholder:text-background  "
        />
        <TokenCoin />
      </div>
    </div>
  );
};

export default Input;
