"use client";
import { VectorButton } from "@/VectorImages/Image";
import Breaking from "../Breaking";
import Header from "../Header";
import TokenStakingCard from "./TokenStakingCard";
import Image from "next/image";

const Slide5 = () => {
  return (
    <div className="bg-[url('/images/Background1.png')]   bg-no-repeat bg-contain bg-bottom  relative w-[100vw] overflow-hidden   ">
      <div className=" w-full bg-background z-[10] ">
        <Header />
        <Breaking />
      </div>

      <div className=" w-full max-w-[88rem] mx-auto px-8 py-[32px] flex flex-col items-start justify-start gap-12 ">
        <div className="flex flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-start justify-start gap-8">
            <p
              className="text-secondary text-[48px] font-grandstander-black_900 leading-[160%]  "
              style={{
                WebkitTextStrokeColor: "#FFD700",
                WebkitTextStrokeWidth: "4px",
                paintOrder: "stroke fill",
              }}
            >
              $PECA FAQs
            </p>
            <p className="text-[18px] leading-[160%] font-grandstander-medium_500 text-text">
              Are you ready to stake like Pepe? Wallets staking $WEPE receive
              WEPEs top alpha and daily token rewards distributed over 3 years
              at a rate of 3044.14 $WEPE tokens per ETH block.
            </p>
          </div>
          <button className="relative w-auto">
            <p className="text-[18px] leading-[160%] font-grandstander-medium_500 text-background absolute top-0 left-0 z-10 px-8 py-6 ">
              Unstake Your Tokens
            </p>
            <VectorButton width="244" />
          </button>
        </div>
        <div className="flex flex-row w-full justify-between gap-5">
          <TokenStakingCard withButton button={"Buy and Stake"} />
          <TokenStakingCard />
          <TokenStakingCard />
          <TokenStakingCard />
          <TokenStakingCard withButton button={"Claim Rewards"} />
        </div>
        <div className="flex w-full flex-row items-start justify-start gap-[32px]">
          <div
            className="flex w-full flex-col items-center justify-center py-8 p-6 bg-text h-[442px] rounded-[24px] border-[4px] border-solid border-border "
            style={{
              boxShadow: "8px 8px 0px 0px #96C",
            }}
          >
            <Image
              className=""
              src={"/images/Images/comingSoon.png"}
              width={271}
              height={220}
              alt="coming soon"
            />
          </div>
          <div className=" flex flex-col items-center justify-center mt-[39px]">
            <Image
              src={"/images/Images/Slide5Image1.png"}
              alt="peca"
              width={296}
              height={403}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide5;
