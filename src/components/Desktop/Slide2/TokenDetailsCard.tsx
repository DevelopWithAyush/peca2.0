import React from "react";

const TokenDetailsCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div
      className="p-6 flex xl:w-auto w-full flex-col items-center justify-center gap-5 border-[4px] border-solid border-primary rounded-[24px] bg-background"
      style={{
        boxShadow: "4px 4px 0px 0px #FFD700",
      }}
    >
      <p className="text-[24px] text-text font-grandstander-bold_700 leading-[110%] uppercase ">
        {title}
      </p>
      <p className="text-[16px] text-text font-grandstander-medium_500 text-center leading-[110%] max-w-[334px]">
        {desc}
      </p>
    </div>
  );
};

export default TokenDetailsCard;
