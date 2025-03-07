"use client"
import FadeInOut from "@/components/ui/FadeInOut";
import Image from "next/image";
import { useState } from "react";

const Content = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div className="flex flex-col w-full xl:w-auto items-start justify-start gap-y-5 ">
      <button
        className="flex items-center justify-start gap-4 pr-8 py-[6px] pl-[6px] rounded-[40px] overflow-hidden "
        style={{
          background: "rgba(255, 255, 255, 0.50)",
          backdropFilter: "blur(25px)",
        }}
      >
        <div className="w-[50px] h-[50px] rounded-full  relative bg-white ">
          <Image
            src={"/images/Gifs/gola.gif"}
            alt="gola"
            fill
            className=" opacity-50  "
          />
        </div>
        <p
          className="text-background text-center font-grandstander-bold_700 text-[24px] leading-normal"
          style={{
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#FFF",
            paintOrder: "stroke fill",
          }}
        >
          AI-Powered DApp
        </p>
      </button>
      <div className="flex flex-col items-start justify-start  gap-y-8 xl:max-w-[38vw] w-full  ">
        <p className="text-[18px]  font-grandstander-medium_500 text-text leading-[160%] ">
          Frustrated with juggling multiple dApps to perform even basic
          operations in web3, Pepius is set to launch
        </p>
        <p
          className="text-[32px] xl:text-[40px] font-grandstander-black_900  text-secondary  leading-[125%]"
          style={{
            WebkitTextStrokeWidth: "4px",
            WebkitTextStrokeColor: "#FFD700",
            paintOrder: "stroke fill",
          }}
        >
          A &quot;truly&quot; all-in-one crypto superapp - SupaDapp
        </p>
        <div className="flex flex-row items-center flex-wrap gap-y-3 justify-start gap-[11px] text-text text-[18px] font-grandstander-medium_500 ">
          <span>All your</span>
          <span className="py-2 px-6 bg-green rounded-[26px] text-[18px] leading-[160%] font-grandstander-medium_500 text-text">
            <FadeInOut text="Gaming" />
          </span>
          <span className="py-2 px-6 bg-border rounded-[26px] text-[18px] leading-[160%] font-grandstander-medium_500 text-text">
            <FadeInOut text="DeFinance" />
          </span>
          <span className="py-2 px-6 bg-primary  rounded-[26px] text-[18px] leading-[160%] font-grandstander-medium_500 text-background">
            <FadeInOut text="Entertainment" />
          </span>
          <span className="py-2 px-6 bg-secondary  rounded-[26px] text-[18px] leading-[160%] font-grandstander-medium_500 text-text">
            <FadeInOut text="Investing" />
          </span>
          <span>and</span>
          <span className="py-2 px-6 bg-text  rounded-[26px] text-[18px] leading-[160%] font-grandstander-medium_500 text-background">
            <FadeInOut text="Trading" />
          </span>
          <span>in one, organized place.</span>
        </div>
        <div className="  text-text font-grandstander-medium_500 text-[18px]  ">
          Pepius Caesar&apos;s{" "}
          <span className="text-primary font-grandstander-medium_500 leading-[160%] text-[24px] ">
            {" "}
            $PECA presale is live!
          </span>{" "}
          Buy now to get $PECA at{" "}
          <span className="text-primary text-[24px] font-grandstander-medium_500 leading-[160%] ">
            highly discounted rates
          </span>{" "}
          and enjoy{" "}
          <span className="text-primary text-[24px] font-grandstander-medium_500">
            massive staking rewards!
          </span>
        </div>
      </div>
      <button
        onClick={() => {
          navigator.clipboard.writeText("info@pepiuscaesar.com");
          setTooltipVisible(true);
          setTimeout(() => setTooltipVisible(false), 2000);
          window.location.href =
            "mailto:info@pepiuscaesar.com?subject=Inquiry&body=Hello,";
        }}
        className="self-center mt-6 relative group"
      >
        <Button />
        <p className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[25%] font-grandstander-medium_500 leading-[160%] text-[20px] text-background h-full">
          Connect With Us Today!
        </p>
        {tooltipVisible && (
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm rounded px-2 py-1">
            Email copied!
          </span>
        )}
      </button>

    </div>
  );
};

export default Content;

const Button = () => {
  return (
    <div className="group inline-block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="290"
        height="74"
        viewBox="0 0 290 74"
        fill="none"
        style={{
          filter: "drop-shadow(-2px 8px 0px #A26CD9)",
        }}
      >
        <defs>
          <linearGradient id="hoverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="31.35%" stopColor="#FFD700" />
            <stop offset="98.76%" stopColor="#9966CC" />
          </linearGradient>
        </defs>

        <g filter="url(#filter0_d_459_11759)">
          <path
            d="M4.90018 63.5272C4.90018 63.5272 3.94265 38.2085 4.90018 26.3429C5.85771 14.4774 14.9011 9.00423 27.3424 7.95973C39.7836 6.91522 286.475 2.52832 286.475 2.52832C286.475 2.52832 278.695 34.7825 271.513 47.6508C264.332 60.519 247.774 63.5968 240.393 63.5272C233.012 63.4575 4.90018 63.5272 4.90018 63.5272Z"
            fill="#FFD700"
            className="transition-all duration-500 ease-in-out group-hover:fill-[url(#hoverGradient)]"
          />
          <path
            d="M4.90018 63.5272C4.90018 63.5272 3.94265 38.2085 4.90018 26.3429C5.85771 14.4774 14.9011 9.00423 27.3424 7.95973C39.7836 6.91522 286.475 2.52832 286.475 2.52832C286.475 2.52832 278.695 34.7825 271.513 47.6508C264.332 60.519 247.774 63.5968 240.393 63.5272C233.012 63.4575 4.90018 63.5272 4.90018 63.5272Z"
            stroke="#9966CC"
            strokeWidth="4"
          />
        </g>
      </svg>
    </div>


  );
};
