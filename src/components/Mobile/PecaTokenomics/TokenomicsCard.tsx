import { cn } from "@/lib/utility";
import React from "react";

const TokenomicsCard = ({
  title,
  percentage,
  desc,
  colspan = false,
}: {
  title: string;
  percentage: string;
  desc: string;
  colspan?: boolean;
}) => {
  return (
    <div
      className={cn(
        "col-span-1 flex flex-col w-full items-start justify-start gap-4 bg-primary p-4 rounded-[16px]",
        colspan && "col-span-2"
      )}
      style={{
        boxShadow: "4px 4px 0px 0px var(--background, #4B0082)",
      }}
    >
      <div className="flex flex-row items-start justify-between w-full ">
        <p className="text-[16px] font-grandstander-bold_700 leading-[120%] text-background ">
          {" "}
          {title}{" "}
        </p>
        <p className="text-[24px] font-grandstander-medium_500 leading-[110%] text-background ">
          {percentage}
        </p>
      </div>
      <p className="w-full text-[12px] text-background leading-[160%] font-grandstander-medium_500 ">
        {" "}
        {desc}{" "}
      </p>
    </div>
  );
};

export default TokenomicsCard;
