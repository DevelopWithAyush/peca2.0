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
                className="flex flex-col p-6 border border-solid border-primary rounded-[24px]  items-start justify-start gap-12 bg-green "
                style={{
                    boxShadow: "4px 4px 0px 0px #FFD700",
                }}
            >
                <p className="text-text font-grandstander-bold_700 leading-[110%] ">
                    The engine that makes the $PECA machine run.
                </p>
                <div className="grid grid-cols-2 gap-x-5 gap-y-5">
                    <TokenomicsDetails percentage="35%" title="Project Development " desc="Dedicated to the development and continuous enhancement of SupaDapp" />
                    <TokenomicsDetails percentage="10%" title="Presale " desc="Allocated for early soldiers to join Pepius’s venture at the best entry price." />
                    <TokenomicsDetails percentage="10%" title="Staking & Rewards " desc="Programmed to incentivise committed holders for project’s long term stability." />
                    <TokenomicsDetails percentage="25%" title="Marketing  " desc="Earmarked for marketing and community growth initiatives. Feel the storm!" />
                    <TokenomicsDetails colSpan percentage="20%" title="Liquidity " desc="This allocation is reserved for smooth trading and stable market health at DEXs and CEXs." />
                    {/* <TokenomicsDetails/>
                  <TokenomicsDetails/> */}
                </div>
            </div>
        </div>
    );
};

export default Content;
