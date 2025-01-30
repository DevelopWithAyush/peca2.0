import { VectorButton } from "@/VectorImages/Image";
import React from "react";

const TokenStakingCard = ({ withButton, button }: { withButton?: boolean, button?: string }) => {
  return (
    <div
      className="flex w-full flex-col items-start justify-start gap-3 py-8 px-6 bg-green rounded-[24px] border-solid border-[4px] border-primary  "
      style={{
        boxShadow: "4px 4px 0px 0px  #FFD700",
      }}
    >
      <div className="flex flex-col items-start justify-start gap-y-1">
        <p className="text-text font-grandstander-bold_700 leading-[160%] ">
          Staked Balance
        </p>
        <p className="text-text font-grandstander-medium_500 text-[16px] leading-[160%] ">
          0 $PECA
        </p>
      </div>
      <div className="flex flex-col items-start justify-start gap-y-1">
        <p className="text-text font-grandstander-bold_700 leading-[160%] ">
          Available To Stake
        </p>
        <p className="text-text font-grandstander-medium_500 text-[16px] leading-[160%] ">
          0 $PECA
        </p>
      </div>

      {withButton && (
        <button className="relative w-auto group">
          <VectorButton width="188" />
          <p className="absolute top-0 left-0 py-4 px-[25px] text-background font-grandstander-medium_500 leading-[160%] text-[18px] whitespace-nowrap ">
         {button}
          </p>
        </button>
      )}
    </div>
  );
};

export default TokenStakingCard;
