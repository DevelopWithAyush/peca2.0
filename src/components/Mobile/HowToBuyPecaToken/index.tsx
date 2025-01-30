"use client";
import Accordian from "@/components/Desktop/Slide2/Accordian";
import TokenDetailsCard from "@/components/Desktop/Slide2/TokenDetailsCard";
import { VectorButton } from "@/VectorImages/Image";
import Image from "next/image";

const HowToBuyPecaToken = () => {
  return (
    <main className="flex flex-col items-start justify-start py-8 px-5 bg-green w-full gap-5">
      <p
        className="text-[32px] font-grandstander-black_900 text-secondary "
        style={{
          WebkitTextStrokeWidth: "4px",
          WebkitTextStrokeColor: "#FFD700",
          paintOrder: "stroke fill",
        }}
      >
        HOW TO BUY $PECA TOKEN?
      </p>
      <TokenDetailsCard
        title="TOKEN ADDRESS"
        desc="0xccB365D2e11aE4D6d74715c680f56cf58bF4bF10"
      />
      <TokenDetailsCard
        title="TOKEN ADDRESS"
        desc="0xccB365D2e11aE4D6d74715c680f56cf58bF4bF10"
      />
      <div className="flex flex-col items-start justify-start w-full mt-3 ">
        <div className="flex flex-row items-start w-full justify-between">
          <Image
            src={"/images/Images/Slide2Image2.png"}
            alt="Slide2Image1"
            width={146}
            height={199}
          />
          <button className="relative">
            <p className="absolute top-0 left-0 z-30 py-4 px-8 text-background text-[18px] font-grandstander-medium_500 ">
              Full Tokenomics
            </p>
            <VectorButton width="202" />
          </button>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-y-5">
          <Accordian
            title="Get Wallet"
            desc="Load ETH, BNB or USDT to your wallet to swap for $WEPE tokens. Send a little extra ETH or BNB to pay for gas fees. If that’s a hassle, just use a bank card. "
          />
          <Accordian
            title="Fund Wallet"
            desc="Load ETH, BNB or USDT to your wallet to swap for $WEPE tokens. Send a little extra ETH or BNB to pay for gas fees. If that’s a hassle, just use a bank card. "
          />
          <Accordian
            title="Buy & Stake"
            desc="Load ETH, BNB or USDT to your wallet to swap for $WEPE tokens. Send a little extra ETH or BNB to pay for gas fees. If that’s a hassle, just use a bank card. "
          />
        </div>
      </div>
    </main>
  );
};

export default HowToBuyPecaToken;
