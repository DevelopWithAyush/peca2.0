import React from "react";
import TokenomicsCard from "./TokenomicsCard";

const Content = () => {
  return (
    <div
      className=" grid grid-cols-2 p-5 gap-[15px]  bg-green border-solid border-[4px] border-primary w-full rounded-[16px]"
      style={{
        boxShadow: "4px 4px 0px 0px var(--primary, #FFD700)",
      }}
    >
      <p className="text-[24px] leading-[160%] w-full  col-span-2 text-text font-grandstander-bold_700  ">
        The engine that makes the $PECA machine run.
      </p>
      <TokenomicsCard
        percentage="35%"
        title="Project Development "
        desc="Dedicated to the development and continuous enhancement of SupaDapp"
      />
      <TokenomicsCard
        percentage="35%"
        title="Project Development "
        desc="Dedicated to the development and continuous enhancement of SupaDapp"
      />
      <TokenomicsCard
        percentage="35%"
        title="Project Development "
        desc="Dedicated to the development and continuous enhancement of SupaDapp"
      />
      <TokenomicsCard
        percentage="35%"
        title="Project Development "
        desc="Dedicated to the development and continuous enhancement of SupaDapp"
      />
      <TokenomicsCard
        colspan
        percentage="35%"
        title="Project Development "
        desc="Dedicated to the development and continuous enhancement of SupaDapp"
      />
      <div className="col-span-2 flex flex-col items-start justify-start ">
        <p className="text-[20px] leading-normal text-primary font-grandstander-black_900">
          READ $PECA WHITEPAPER
        </p>
        <p className="text-[20px] leading-normal text-primary font-grandstander-black_900">
          TOTAL TOKEN AMOUNT: 80,000,000,000
        </p>
      </div>
    </div>
  );
};

export default Content;
