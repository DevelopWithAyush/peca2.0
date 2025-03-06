import React from "react";
import TokenDetailsCard from "./TokenDetailsCard";
import Accordian from "./Accordian";
import Image from "next/image";
import { VectorButton } from "@/VectorImages/Image";
import TokenBuyCharacter from "./TokenBuyCharacter";

const Content = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-12 pt-[13.5px] relative">
      <p
        className="text-secondary text-[48px] font-grandstander-black_900 leading-normal  "
        style={{
          WebkitTextStrokeColor: "#FFD700",
          WebkitTextStrokeWidth: "4px",
          paintOrder: "stroke fill",
        }}
      >
        HOW TO BUY $PECA TOKEN?
      </p>

      <div className="flex  flex-row items-start justify-start gap-12">
        <div className="flex flex-col items-start justify-start gap-8  ">
          <Image
            src={"/images/Images/Slide2Image2.png"}
            width={225}
            height={307}
            alt="image"
            className="absolute z-10 bottom-0 left-0 -translate-x-[55%] translate-y-[70%] "
          />

          <TokenDetailsCard
            title="After ((countdown)) "
            desc="On Raydium DEX"
          />
          {/* <TokenDetailsCard
            title="Token  Supply"
            desc="0xccB365D2e11aE4D6d74715c680f56cf58bF4
                  bF10"
          /> */}
          <div className="relative left-10 z-0 w-auto">
            <p className="px-8 py-5 absolute z-40 text-background font-grandstander-medium_500 leading-[160%]">
              Full Tokenomics
            </p>
            <VectorButton width="202" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-8 relative">
          <Image
            src={"/images/Images/Slide2Image1.png"}
            width={186}
            height={186}
            className="absolute w-[186px] h-[186px] top-0 left-0  -translate-y-[100%] translate-x-[100%] rounded-[25px] "
            alt="image"
          />
          <Accordian
            title="Get Wallet"
            desc="WEPE Army already have wallets? 🤔 But if not, try MetaMask or Best Wallet. You can even buy $WEPE directly in ‘Upcoming Tokens’ in Best Wallet."
          />
          <Accordian
            title="Fund Wallet"
            desc="Load ETH, BNB or USDT to your wallet to swap for $WEPE tokens. Send a little extra ETH or BNB to pay for gas fees. If that’s a hassle, just use a bank card. "
          />
          <Accordian
            title="Buy & Stake"
            desc="To purchase $WEPE, connect your wallet to the site. Select payment method and amount to buy. Confirm the transaction. Stake $WEPE if you want that sweet APY!"
          />

          <TokenBuyCharacter />
        </div>
      </div>
    </div>
  );
};

export default Content;
