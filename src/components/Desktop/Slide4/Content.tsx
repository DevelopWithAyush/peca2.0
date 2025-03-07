import Image from "next/image";
import AccordianFaq from "./AccordianFaq";

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
const Content = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-8 pt-[13.5px] w-full   ">
      <p
        className="text-secondary text-[48px] font-grandstander-black_900 leading-normal  "
        style={{
          WebkitTextStrokeColor: "#FFD700",
          WebkitTextStrokeWidth: "4px",
          paintOrder: "stroke fill",
        }}
      >
        $PECA FAQs
      </p>

      <div className="flex flex-col items-start justify-start gap-8 w-full ">
        <Image
          src={"/images/Images/Slide4Image1.png"}
          width={231}
          height={199}
          alt="Slide4Image1"
          className="absolute top-0 right-[39px] -translate-y-[25%] z-0"
        />
        {FaqData.map((item, index) => {
          return (
            <AccordianFaq
              key={index} // Use the actual index as the key
              index={index} // Pass the actual index as a prop
              title={item.question}
              desc={item.answer}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Content;
