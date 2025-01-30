"use client"
import AccordianFaq from "@/components/Desktop/Slide4/AccordianFaq";
import Image from "next/image";
import React from "react";

const PecaFaqs = () => {
  return (
    <section className="bg-green pb-8 px-5 w-full">
      <div className=" flex  flex-row items-center justify-between w-full ">
              <p className="text-secondary text-[32px] font-grandstander-black_900 leading-normal "
                  style={{
                  WebkitTextStrokeWidth:"4px",
                      WebkitTextStrokeColor:"#FFD700",
                      paintOrder:"stroke fill"
              }}
              >$PECA FAQs</p>
        <Image
          src={"/images/Images/Slide4Image1.png"}
          alt="Slide3Image1"
          width={159}
                  height={148}
                  className="relative top-5"
        />
          </div>
          <div className=" flex flex-col w-full items-center justify-start gap-y-8">
              {Array.from({ length: 5 }).map((_, index) => {
                  return (
                      <AccordianFaq
                          key={index} // Use the actual index as the key
                          index={index} // Pass the actual index as a prop
                          title="What is Pepe Unchained?"
                          desc="Pepius Caesar is the right-hand man of Elon’s much-hyped Kekius Maximus. Frustrated with the lack of accessibility and convenience in the web3 world, he launched his new heroic venture to provide the crypto world with an all-in-one app named SupaDapp. His token is $PECA."
                      />
                  );
              })}
          </div>
    </section>
  );
};

export default PecaFaqs;
