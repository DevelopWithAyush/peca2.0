import React from "react";
import TokenDetailsCard from "./TokenDetailsCard";
import Accordian from "./Accordian";

const Content = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-12 pt-[13.5px]">
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
        <div className="flex flex-col items-start justify-start gap-8">
          <TokenDetailsCard
            title="Token address"
            desc="0xccB365D2e11aE4D6d74715c680f56cf58bF4
                  bF10"
          />
          <TokenDetailsCard
            title="Token  Supply"
            desc="0xccB365D2e11aE4D6d74715c680f56cf58bF4
                  bF10"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-8">
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
        </div>
      </div>
    </div>
  );
};

export default Content;
