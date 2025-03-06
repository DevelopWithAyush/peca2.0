import React, { useEffect, useState } from "react";
import TokenDetailsCard from "./TokenDetailsCard";
import Accordian from "./Accordian";
import Image from "next/image";
import { VectorButton } from "@/VectorImages/Image";
import TokenBuyCharacter from "./TokenBuyCharacter";

const Content = () => {

  const [targetDate] = useState(() => {
    const date = new Date('2025-04-06T00:00:00')
    return date.getTime()
  })

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      // Calculate time units
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      // Only update if the countdown hasn't finished
      if (distance > 0) {
        setTimeLeft({
          days: days.toString().padStart(2, '0'),
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
          seconds: seconds.toString().padStart(2, '0')
        })
      } else {
        clearInterval(timer)
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])
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
            title={`After ${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
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
