import React, { useContext, useEffect, useState } from "react";
import TokenDetailsCard from "./TokenDetailsCard";
import Accordian from "./Accordian";
import Image from "next/image";
import { VectorButton } from "@/VectorImages/Image";
import TokenBuyCharacter from "./TokenBuyCharacter";
import { HandleContext } from "@/hooks/handleState";


const Content = () => {
  const { pageJump } = useContext(HandleContext);

  const [targetDate] = useState(() => {
    const date = new Date('2025-05-11T00:00:00')
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
          <button onClick={() => pageJump(2)} className="relative left-10 z-0 w-auto">
            <p className="px-8 py-5 absolute z-40 text-background font-grandstander-medium_500 leading-[160%]">
              Full Tokenomics
            </p>
            <VectorButton width="202" />
          </button>
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
            desc="PECA Army already has wallets? 🤔 But if not, install Phantom wallet. You can even buy $PECA directly from Solana’s telegram trading bots like BloomBot, NovaBot, TrojanBot, BonkBot.
"
          />
          <Accordian
            title="Fund Wallet"
            desc="Load SOL, USDC etc to your wallet to swap for $PECA tokens. Send a little extra SOLs to pay for gas fees if you are using coins apart from SOL . If that’s a hassle, just fund with SOLs."
          />
          <Accordian
            title="Buy & Stake"
            desc="To purchase $PECA, swap your SOLs etc with a $PECA token address (Double check the address to avoid scams). Confirm the transaction. You are now all set for investment!"
          />

          <TokenBuyCharacter />
        </div>
      </div>
    </div>
  );
};

export default Content;
