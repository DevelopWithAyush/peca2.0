"use client";
import AccordianFaq from "@/components/Desktop/Slide4/AccordianFaq";
import Image from "next/image";
import React from "react";

const FaqData = [
  {
    question: "Who is pepius Caeser?",
    answer:
      "Pepius Caesar is the right-hand man of Elon’s much-hyped Kekius Maximus. Frustrated with the lack of accessibility and convenience in the web3 world, he launched his new heroic venture to provide the crypto world with an all-in-one app named SupaDapp. His token is $PECA.",
  },
  {
    question: "What is SupaDapp?",
    answer:
      " SupaDapp is an AI-driven crypto superapp that makes onboarding to the web3 world highly accessible and super easy for anyone with an internet connection. It is a backend revolution. Learn more about SupaDapp in the opening pages of the whitepaper.",
  },
  {
    question: "How can I buy during the Investors’ round?",
    answer:
      "You need to reach out to us at info@pepiuscaesar.com to become an early private investor. Together, we will discuss the prospects of investment. And don’t worry about the minimum or maximum funds you need to invest—we cater to each case on an individual basis.",
  },
  {
    question: "What will happen when the countdown ends?",
    answer:
      "Once the countdown is complete, our token will be launched on the decentralized exchange (DEX) Raydium. Trading will begin as usual, and we will reach new heights through strategic marketing, partnerships, community rewards, and the continuous development of our utility, SupaDapp. ",
  },
  {
    question: "What makes this project unique?",
    answer:
      "The world’s first truly crypto super app, combined with advanced AI capabilities and memetic branding, sets us apart. Don’t miss this exclusive opportunity—join us on this revolutionary journey! ",
  },
];

const PecaFaqs = () => {
  return (
    <section id="faqs" className="bg-green pb-8 px-5 w-full">
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
