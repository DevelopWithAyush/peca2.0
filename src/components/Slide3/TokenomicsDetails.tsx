import { cn } from "@/lib/utility";
import React from "react";

const TokenomicsDetails = ({
  colSpan = false,
  title,
  desc,
  percentage,
}: {
  colSpan?: boolean;
  title: string;
  desc: string;
  percentage: string;
}) => {
  return (
    <div
      className={cn(
        "col-span-1 flex flex-col items-start justify-start gap-2",
        colSpan && "col-span-2",
        "p-4 bg-primary rounded-[16px]"
      )}
      style={{
        boxShadow: "4px 4px 0px 0px #4B0082",
      }}
    >
      <p className="text-background text-[18px] font-grandstander-bold_700 leading-[110%] ">
        {" "}
        {title}{" "}
      </p>
      <div className="flex flex-row items-center justify-start gap-4">
        <p className="text-background text-[48px] font-grandstander-medium_500 leading-[110%] ">
          {percentage}
        </p>
        <p className="text-background text-[12px] font-grandstander-medium_500 leading-[160%]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default TokenomicsDetails;
