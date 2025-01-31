"use client";
import AccordianFaq from "@/components/Desktop/Slide4/AccordianFaq";
import Image from "next/image";
import React from "react";

const FaqData = [
  {
    question: "What is SupaDapp?",
    answer:
      "SupaDapp is an AI-driven crypto superapp that makes onboarding to the web3 world highly accessible and super easy for anyone with an internet connection. It is a backend revolution. Learn more about SupaDapp in the opening pages of the whitepaper.",
  },
  {
    question: "How can I buy during the presale?",
    answer:
      "You need to connect your wallet to the official website (double-check the domain URL). Ensure you have Solana from the Solana chain in your wallet. This simplifies the process, as you will need a small gas fee from the Solana network. Then, simply enter your desired amount and buy $PECA. The presale is the only way to get the token at a discounted rate. The price increases in each phase—the earlier you buy, the better.",
  },
  {
    question: "How do I stake?",
    answer:
      "Staking, up to xxx%, in the $PECA project allows you to multiply your tokens. Simply click the “Stake $PECA” button to stake your tokens in the staking pool.",
  },
  {
    question: "What makes this project unique?",
    answer:
      "The world’s first truly crypto super app, combined with advanced AI capabilities and memetic branding, sets us apart. Don’t miss this exclusive opportunity—join us on this revolutionary journey!",
  },
];

const PecaFaqs = () => {
  return (
    <section className="bg-green pb-8 px-5 w-full">
      <div className=" flex  flex-row items-center justify-between w-full ">
        <p
          className="text-secondary text-[32px] font-grandstander-black_900 leading-normal "
          style={{
            WebkitTextStrokeWidth: "4px",
            WebkitTextStrokeColor: "#FFD700",
            paintOrder: "stroke fill",
          }}
        >
          $PECA FAQs
        </p>
        <Image
          src={"/images/Images/Slide4Image1.png"}
          alt="Slide3Image1"
          width={159}
          height={148}
          className="relative top-5"
        />
      </div>
      <div className=" flex flex-col w-full items-center justify-start gap-y-8">
        {FaqData.map((data, index) => {
          return (
            <AccordianFaq
              key={index} // Use the actual index as the key
              index={index} // Pass the actual index as a prop
              title={data.question}
              desc={data.answer} 
            />
          );
        })}
      </div>
    </section>
  );
};

export default PecaFaqs;
