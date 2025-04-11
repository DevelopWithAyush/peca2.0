"use client";
import Accordian from "@/components/Desktop/Slide2/Accordian";
import TokenBuyCharacter from "@/components/Desktop/Slide2/TokenBuyCharacter";
import TokenDetailsCard from "@/components/Desktop/Slide2/TokenDetailsCard";
import { VectorButton } from "@/VectorImages/Image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HowToBuyPecaToken = () => {

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
    <main id="how-to-buy" className="flex flex-col items-start justify-start pt-8 px-5 bg-green w-full gap-5">
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
        title={`After ${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        desc="On Raydium DEX"
      />
      {/* <TokenDetailsCard
        title="TOKEN ADDRESS" 
        desc="0xccB365D2e11aE4D6d74715c680f56cf58bF4bF10"
      /> */}
      <div className="flex flex-col items-start justify-start w-full mt-3 ">
        <div className="flex flex-row items-start w-full justify-between">
          <Image
            src={"/images/Images/Slide2Image2.png"}
            alt="Slide2Image1"
            width={146}
            height={199}
          />
          <Link href={"#tokenomics"} className="relative">
            <p className="absolute top-0 left-0 z-30 py-4 px-8 text-background text-[18px] font-grandstander-medium_500 ">
              Full Tokenomics
            </p>
            <VectorButton width="202" />
          </Link>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-y-5">
          <Accordian
            title="Get Wallet"
            desc="PECA Army already has wallets? 🤔 But if not, install Phantom wallet. You can even buy $PECA directly from Solana’s telegram trading bots like BloomBot, NovaBot, TrojanBot, BonkBot.
"
          />
          <Accordian
            title="Fund Wallet"
            desc="Load SOL, USDC etc to your wallet to swap for $PECA tokens. Send a little extra SOLs to pay for gas fees if you are using coins apart from SOL . If that’s a hassle, just fund with SOLs.  "
          />
          <Accordian
            title="Buy & Stake"
            desc="To purchase $PECA, swap your SOLs etc with a $PECA token address (Double check the address to avoid scams). Confirm the transaction. You are now all set for investment!"
          />
        </div>
      </div>
      <TokenBuyCharacter />
    </main>
  );
};

export default HowToBuyPecaToken;
