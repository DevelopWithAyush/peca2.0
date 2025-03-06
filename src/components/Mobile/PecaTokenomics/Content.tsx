import React from "react";
import TokenomicsCard from "./TokenomicsCard";

const data = [
  {
    category: "Liquidity",
    percentage: "15%",
    description:
      "This allocation is reserved for smooth trading and stable market health at DEXs and CEXs.",
  },
  {
    category: "Partnership",
    percentage: "10%",
    description:
      "Suitably planned for partnering with launchpads and other players",
  },
  {
    category: "Marketing",
    percentage: "20%",
    description:
      "Earmarked for marketing and community growth initiatives. Feel the storm!",
  },
  {
    category: "Investors",
    percentage: "15%",
    description:
      "Allocated for early soldiers to join Pepius’s venture before it’s public launch.",
  },
  {
    category: "Project Development",
    percentage: "35%",
    description:
      "Dedicated to the development and continuous enhancement of SupaDapp.",
  },
  {
    category: "Community Incentives",
    percentage: "5%",
    description:
      "Programmed to incentivise committed community members for project’s long term stability.",
  },
];

const Content = () => {
  return (
    <div
      className=" grid grid-cols-2 p-5 gap-[15px]  bg-green border-solid border-[4px] border-primary w-full rounded-[16px]"
      style={{
        boxShadow: "4px 4px 0px 0px var(--primary, #FFD700)",
      }}
    >
      <p className="text-[24px] leading-[160%] w-full  col-span-2 text-text font-grandstander-bold_700  ">
        The engine that makes the $PECA machine run.
      </p>

      {data.map((items, index) => {
        return (
          <TokenomicsCard
            // colspan={data.length === index + 1 }
            key={index}
            percentage={items.percentage}
            title={items.category}
            desc={items.description}
          />
        );
      })}

      <div className="col-span-2 flex flex-col items-start justify-start ">
        <p className="text-[20px] leading-normal text-primary font-grandstander-black_900">
          READ $PECA WHITEPAPER
        </p>
        <p className="text-[20px] leading-normal text-primary font-grandstander-black_900">
          TOTAL TOKEN AMOUNT: 80,000,000,000
        </p>
      </div>
    </div>
  );
};

export default Content;
