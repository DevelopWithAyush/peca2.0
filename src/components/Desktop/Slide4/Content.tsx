import Image from "next/image";
import AccordianFaq from "./AccordianFaq";

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
    question: "What will happen when the countdown ends?",
    answer:
      "Staking, up to xxx%, in the $PECA project allows you to multiply your tokens. Simply click the “Stake $PECA” button to stake your tokens in the staking pool.",
  },
  {
    question: "What makes this project unique?",
    answer:
      "The world’s first truly crypto super app, combined with advanced AI capabilities and memetic branding, sets us apart. Don’t miss this exclusive opportunity—join us on this revolutionary journey!",
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
