import Image from "next/image";
import TokenomicsDetails from "./TokenomicsDetails";

const Content = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-8 pt-[13.5px]">
      <p
        className="text-secondary text-[48px] font-grandstander-black_900 leading-normal  "
        style={{
          WebkitTextStrokeColor: "#FFD700",
          WebkitTextStrokeWidth: "4px",
          paintOrder: "stroke fill",
        }}
      >
        $PECA TOKENOMICS
      </p>

      <div
        className="flex flex-col p-6 border-[4px] border-solid border-primary rounded-[24px]  relative  items-start justify-start gap-5 bg-green max-w-[844px] "
        style={{
          boxShadow: "4px 4px 0px 0px #FFD700",
        }}
      >
        <Image
          src={"/images/Images/Slide3Image3.png"}
          alt="Slide3Image1"
          width={225}
          height={169}
          className="absolute right-0 top-0 -translate-y-[100%] z-0"
        />
        <p className="text-text font-grandstander-bold_700 leading-[110%] ">
          The engine that makes the $PECA machine run.
        </p>
        <div className="grid grid-cols-2 gap-x-5 gap-y-5 ">
          <TokenomicsDetails
            percentage="35%"
            title="Project Development "
            desc="Dedicated to the development and continuous enhancement of SupaDapp"
          />
          <TokenomicsDetails
            percentage="15%"
            title="Investors "
            desc="Allocated for early soldiers to join Pepius’s venture before it’s public launch."
          />
          <TokenomicsDetails
            percentage="10%"
            title="Partnership"
            desc="Suitably planned for partnering with launchpads and other players"
          />
          <TokenomicsDetails
            percentage="20%"
            title="Marketing  "
            desc="Earmarked for marketing and community growth initiatives. Feel the storm!"
          />
          <TokenomicsDetails
            
            percentage="15%"
            title="Liquidity "
            desc="This allocation is reserved for smooth trading and stable market health at DEXs and CEXs."
          />
          <TokenomicsDetails
            
            percentage="5%"
            title="Community Incentives "
            desc="Programmed to incentivise committed community members for project’s long term stability."
          />
          {/* <TokenomicsDetails/>
                  <TokenomicsDetails/> */}
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <p className="text-primary font-grandstander-black_900 leading-[110%] text-[24px]">
            READ $PECA WHITEPAPER
          </p>
          <p className="text-primary font-grandstander-black_900 leading-[110%] text-[24px]">
            TOTAL TOKEN AMOUNT: 500,000,000 or 500 Million
          </p>
        </div>
        <Image
          src={"/images/Images/Slide3Image2.png"}
          alt="Slide3Image2"
          width={206}
          height={108}
          className="absolute right-0 bottom-[0]  translate-x-[15%] z-10 "
        />
      </div>
    </div>
  );
};

export default Content;
