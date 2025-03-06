"use client";
// import React, { useState } from "react";
import Time from "./Time";
// import ProgressBar from "./ProgressBar";
// import { InfoButton, TokenCoin } from "@/VectorImages/Image";
// import Value from "./Value";
// import Input from "./Input";
// import { cn } from "@/lib/utility";

// 定义一个名为TokenBox的函数组件
const TokenBox = () => {
  // const [isInfoOpen, setIsInfoOpen] = useState("sol");
  return (
    <div className="xl:w-auto xl:h-auto w-full   bg-primary p-5 xl:p-6 border-[8px] border-solid border-border rounded-[44px] flex flex-col items-center justify-start gap-4  ">
      <div className="bg-background p-[9px] flex flex-row items-center rounded-[32px] justify-start gap-2 relative">
        <div className="w-[81px] bg-border rounded-[32px] h-[19px]"></div>
        <div className="w-[19px] bg-white  rounded-[32px] h-[19px]"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="110"
          height="109"
          viewBox="0 0 110 109"
          fill="none "
          className="absolute left-0 animate-pulse translate-x-1/2"
        >
          <g filter="url(#filter0_f_459_11717)">
            <path
              d="M55 9.52832L51.3866 38.0286L36.4935 13.462L44.7846 40.968L21.1869 24.5829L39.949 46.3386L11.7269 40.968L37.7158 53.2117L9.74925 59.7844L38.4712 60.3989L15.5958 77.7783L42.0845 66.6574L28.2558 91.8386L47.9311 70.9052L45.54 99.534L55 72.4078L64.46 99.534L62.0689 70.9052L81.7442 91.8386L67.9155 66.6574L94.4042 77.7783L71.5288 60.3989L100.251 59.7844L72.2842 53.2117L98.2731 40.968L70.051 46.3386L88.8131 24.5829L65.2154 40.968L73.5065 13.462L58.6134 38.0286L55 9.52832Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_459_11717"
              x="0.749023"
              y="0.52832"
              width="108.502"
              height="108.006"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="4.5"
                result="effect1_foregroundBlur_459_11717"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="bg-text p-4  xl:p-4 w-full xl:w-[418px]  rounded-[32px] flex flex-col items-center justify-start  ">
        <p
          className="text-primary text-center  font-grandstander-black_900 leading-[110%] text-[32px] xl:text-[32px]  "
          style={{
            WebkitTextStrokeWidth: "4px",
            WebkitTextStrokeColor: "#4B0082",
            paintOrder: "stroke fill",
          }}
        >
          $PECA PUBLIC SALE COUNTDOWN
        </p>
        {/* <p className="text-background text-[16px] font-grandstander-bold_700 leading-[125%]">
          Current Phase PRESALE STAGE 3
        </p> */}
        <Time />
        {/* <div className="flex flex-col items-center justify-center mt-3">
          <p className="text-background font-grandstander-bold_700 text-[18px] leading-[125%] ">
            USDT Raised : $15,999,268.79 /{" "}
            <span className="text-[#9966CC]">$16,288,989</span>
          </p>
        </div> */}
        {/* <ProgressBar /> */}
        {/* <div className="flex flex-row items-center justify-center w-full gap-[10px] mt-2">
          <p className="text-background font-grandstander-bold_700 leading-[125%] text-[16px] ">
            Your Purchased $PECA = 0
          </p>
          <InfoButton />
        </div> */}
        {/* <Value /> */}
        {/* <div className="w-full flex flex-row items-center justify-between gap-4 mt-1">
          <button
            onClick={() => {
              setIsInfoOpen("sol");
            }}
            className={cn(
              "flex flex-row items-center justify-center py-3 w-full bg-text rounded-[8px] border-solid border-[2px] border-primary gap-2 ",
              isInfoOpen === "sol" && "bg-background"
            )}
            style={{
              boxShadow: "2px 2px 0px 0px var(--primary, #FFD700)",
            }}
          >
            <TokenCoin />
            <span
              className={cn(
                "text-[16px] text-background font-grandstander-bold_700 leading-[125%]",
                isInfoOpen === "sol" && "text-white"
              )}
            >
              SOL
            </span>
          </button>
          <button
            onClick={() => {
              setIsInfoOpen("usdc");
            }}
            className={cn(
              "flex flex-row items-center justify-center py-3 w-full bg-text rounded-[8px] border-solid border-[2px] border-primary gap-2",
              isInfoOpen === "usdc" && "bg-background"
            )}
            style={{
              boxShadow: "2px 2px 0px 0px var(--primary, #FFD700)",
            }}
          >
            <TokenCoin />
            <span
              className={cn(
                "text-[16px] text-background font-grandstander-bold_700 leading-[125%]",
                isInfoOpen === "usdc" && "text-white"
              )}
            >
              USDC
            </span>
          </button>
        </div> */}
        {/* <div className="w-full mt-2 flex flex-col items-start justify-start gap-2">
          <Input />
          <Input />
        </div> */}
        {/* <div className="mt-[14px] flex flex-row items-center justify-between w-full">
          <button
            className="text-[18px] text-text font-grandstander-black_900 leading-[160%] bg-green py-[7px] px-[32px] rounded-[8px] "
            style={{
              WebkitTextStrokeColor: "#4B0082",
              WebkitTextStrokeWidth: "4px",
              paintOrder: "stroke fill",
            }}
          >
            Connect Wallet
          </button>
          <button className="text-[18px] text-background font-grandstander-black_900 leading-[160%] bg-primary py-[7px] px-[32px] rounded-[8px] ">
            Buy with ETH
          </button>
        </div> */}

        <p className="text-[30px] text-background font-grandstander-black_900 mt-[14px] leading-[156%] text-center"
          style={{
            WebkitTextStrokeColor: "#FFD700",
            WebkitTextStrokeWidth: "4px",
            paintOrder: "stroke fill",
          }}
        >
          Exclusive Opportunity !
        </p>
        <p className="text-primary text-[16px] font-grandstander-bold_700 leading-[125%] text-center mt-[14px]"
          style={{
            WebkitTextStrokeColor: "#4B0082",
            WebkitTextStrokeWidth: "2px",
            paintOrder: "stroke fill",
          }}
        >
          want to be a part of investor&apos;s round ?
        </p>
        <p className="text-primary text-[16px] font-grandstander-black_900 leading-[125%] text-center "
          style={{
            WebkitTextStrokeColor: "#4B0082",
            WebkitTextStrokeWidth: "2px",
            paintOrder: "stroke fill",
          }}
        >
          Hurry up! Talk to us today!
        </p>

        <button className="rounded-[8px] bg-background text-white border-[2px] border-solid border-primary text-[16px] font-grandstander-black_900 leading-[125%] text-center py-[14px] px-[32px] mt-[14px] "
          style={{
            boxShadow: "2px 2px 0px 0px var(--primary, #FFD700)",
        }}
        >
          Connect Now !
        </button>
      </div>
    </div>
  );
};

export default TokenBox;
