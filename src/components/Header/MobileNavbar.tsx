import { cn } from "@/lib/utility";
import Link from "next/link";
import React, { useState } from "react";
import XIcon from "./XIcon";
import TelegramIcon from "./TelegramIcon";

const MobileNavbar = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  }) => {
  
    const [tooltipVisible, setTooltipVisible] = useState(false);
  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 right-0 bottom-0 bg-black z-20 opacity-50",
          isOpen ? "block" : "hidden"
        )}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(false);
        }}
      />
      <div
        className={cn(
          "fixed top-0 z-50  left-0 w-full p-5 duration-500 ease-in-out ",
          isOpen ? "top-0" : "top-[-100%]"
        )}
      >
        <nav
          className={cn(
            " w-full flex flex-col items-start justify-start gap-8 p-8 md:hidden bg-white rounded-[32px] border-[4px] border-solid border-border"
          )}
        >
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row items-center justify-start  gap-0">
              <img
                src={"/images/logo.png"}
                alt="logo"
                className="w-[51px] h-[51px]  "
              />
              <div className=" flex flex-col items-start justify-center pt-1 gap-0 ">
                <span
                  className="text-[#FFF] uppercase text-[24px] font-grandstander-black_900 leading-[82%] "
                  style={{
                    WebkitTextStrokeWidth: "5px",
                    WebkitTextStrokeColor: "#4B0082",
                    paintOrder: "stroke fill",
                  }}
                >
                  PEPIUS
                </span>
                <span
                  className="text-[#FFD700] text-[24px] font-grandstander-black_900 leading-[82%]   "
                  style={{
                    WebkitTextStrokeWidth: "5px",
                    WebkitTextStrokeColor: "#4B0082",
                    paintOrder: "stroke fill",
                  }}
                >
                  CAESAR
                </span>{" "}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <rect
                  x="3.3457"
                  y="16.5142"
                  width="3.35786"
                  height="19.3093"
                  rx="1.67893"
                  transform="rotate(-135 3.3457 16.5142)"
                  fill="#FFD700"
                  stroke="#4B0082"
                  stroke-width="1.5"
                />
                <rect
                  x="0.972656"
                  y="2.86035"
                  width="3.35786"
                  height="19.3093"
                  rx="1.67893"
                  transform="rotate(-45 0.972656 2.86035)"
                  fill="#FFD700"
                  stroke="#4B0082"
                  stroke-width="1.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <Link
              className="p-[6px] text-background text-[18px] font-grandstander-medium_500 leading-normal"
              href={"/"}
              onClick={() => setIsOpen(false)}
            >
              SupaDapp
            </Link>
            <Link
              className="p-[6px] text-background text-[18px] font-grandstander-medium_500 leading-normal"
              href={"#how-to-buy"}
              onClick={() => setIsOpen(false)}
            >
              How To Buy
            </Link>
            <Link
              className="p-[6px] text-background text-[18px] font-grandstander-medium_500 leading-normal"
              href={"#tokenomics"}
              onClick={() => setIsOpen(false)}
            >
              Tokenomics
            </Link>
            <Link
              className="p-[6px] text-background text-[18px] font-grandstander-medium_500 leading-normal"
              href={"#faqs"}
              onClick={() => setIsOpen(false)}
            >
              FAQ’s
            </Link>
            {/* <Link
              className="p-[6px] text-background text-[18px] font-grandstander-medium_500 leading-normal"
              href={"#staking"}
            >
              Staking
            </Link> */}
            <Link
              className="p-[6px] text-background text-[18px] font-grandstander-medium_500 leading-normal"
              href={"#roadmap"}
              onClick={() => setIsOpen(false)}
            >
              Roadmap
            </Link>
            {/* <Link
              className="p-[6px] text-background text-[18px] font-grandstander-medium_500 leading-normal"
              href={"https://drive.google.com/file/d/1bO_Gn5a7vZ6vREHjaEzCt5vNwQSv0l8E/view?usp=drive_link"}
              target="_blank"
              onClick={() => setIsOpen(false)}
            >
              WhitePaper
            </Link> */}
                  </div>
                  <div className="flex flex-row items-center justify-start gap-4 ">
            <Link href={"https://x.com/Pepius_Caesar"} target="_blank">
                      <XIcon />
            </Link>
            <Link href={"https://t.me/pepiuscaesar_discussions"} target="_blank">
            
                      <TelegramIcon />
            </Link>
                      <button className="flex flex-row items-center justify-between w-[79px]">
                          <div className="text-[16px] py-[7px] px-[16px] border-[2px] border-solid border-background text-background font-grandstander-medium_500 rounded-[8px] ">
                              En
                          </div>

                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                          >
                              <path
                                  d="M12.0002 16.4771L18.0102 10.4671L16.5972 9.05212L12.0002 13.6521L7.40423 9.05212L5.99023 10.4661L12.0002 16.4771Z"
                                  fill="#4B0082"
                              />
                          </svg>
                      </button>
                  </div>

          <div className="flex flex-row items-center justify-start gap-5 w-full">
            <button

              onClick={() => {
                navigator.clipboard.writeText("info@pepiuscaesar.com");
                setTooltipVisible(true);
                setTimeout(() => setTooltipVisible(false), 2000);
                window.location.href =
                  "mailto:info@pepiuscaesar.com?subject=Inquiry&body=Hello,";
              }}
              className="text-[22px] leading-[160%] relative  text-text font-grandstander-medium_500 px-8 py-[5px] bg-green rounded-[8px] flex flex-col items-center justify-center "
              style={{
                WebkitTextStrokeWidth: "5px",
                WebkitTextStrokeColor: "#4B0082",
                paintOrder: "stroke fill",
              }}
            >
              Connect
              {tooltipVisible && (
                <span className="absolute w-full -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white  font-grandstander-medium_500 text-sm rounded px-2 py-1">
                  Email copied!
                </span>
              )}
            </button>
            <button className="text-[18px] leading-[160%] text-background font-grandstander-medium_500 px-8 py-2 bg-primary rounded-[8px] flex flex-col items-center justify-center">
              Audit
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileNavbar;
