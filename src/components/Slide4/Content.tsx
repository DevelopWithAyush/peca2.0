import AccordianFaq from "./AccordianFaq";

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
    </div>
  );
};

export default Content;
