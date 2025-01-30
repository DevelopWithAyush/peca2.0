"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import TelegramIcon from "./TelegramIcon";
import XIcon from "./XIcon";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="xl:p-8 px-5 py-4 w-full">
      <header className="   z-10 flex flex-row justify-between items-center  w-full rounded-[56px] border-[4px] border-solid border-border bg-text px-5 py-2  xl:px-8 xl:py-3 ">
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
        <nav className="hidden flex-row items-end  justify-start gap-2 w-auto xl:flex">
          <Link href={"/"} className="flex flex-row items-end justify-center  ">
            <div className="w-[24px] h-[24px] relative">
              <Image
                src="/images/Gifs/fire.png"
                alt="fire"
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </div>
            <div className="flex flex-col items-end">
              <p className="px-[5px]  text-green text-[9px] font-grandstander-medium_500 whitespace-nowrap leading-[110%] ">
                Coming Soon
              </p>
              <p className="px-1  text-[16px] font-grandstander-medium_500 text-background leading-[140%] hover:text-secondary duration-300 ease-in-out  ">
                SupaDapp
              </p>
            </div>
          </Link>

          <NavLink title="how to buy" link={"/how-to-buy"} />
          <NavLink title="Tokenomics" link={"/tokenomics"} />
          <NavLink title="FAQs" link={"/faqs"} />
          <Link href={"/"} className="flex flex-row items-end justify-center  ">
            <div className="flex flex-col items-end">
              <p className="px-[5px]  text-green text-[9px] font-grandstander-medium_500 whitespace-nowrap leading-[110%] ">
                Coming Soon
              </p>
              <p className="px-1  text-[16px] font-grandstander-medium_500 text-background  leading-[140%] hover:text-secondary duration-300 ease-in-out  ">
                Staking
              </p>
            </div>
          </Link>

          <NavLink title="Roadmap" link={"/roadmap"} />
          <NavLink title="Whitepaper" link={"/whitepaper"} />
        </nav>
        <div className=" hidden flex-row items-center justify-start gap-4 xl:flex">
          <XIcon />
          <TelegramIcon />
          <button className="text-[18px] leading-[160%] text-background font-grandstander-medium_500 px-8 py-2 bg-primary rounded-[8px] flex flex-col items-center justify-center">
            Audit
          </button>
          <button
            className="text-[22px] leading-[160%] text-text font-grandstander-medium_500 px-8 py-[5px] bg-green rounded-[8px] flex flex-col items-center justify-center "
            style={{
              WebkitTextStrokeWidth: "5px",
              WebkitTextStrokeColor: "#4B0082",
              paintOrder: "stroke fill",
            }}
          >
            Connect
          </button>
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

        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="xl:hidden flex flex-col items-center justify-center"
        >
          <MenuIcon />
        </button>
      </header>
      {/* <nav className=" fixed top-[10px] z-50  left-0 w-full flex flex-col items-start justify-start gap-8 p-8 md:hidden bg-white rounded-[32px] border-[4px] border-solid border-border">
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
              setIsOpen(!isOpen);
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
          >
            SupaDapp
          </Link>
          <Link
            className="p-[6px] text-background text-[18px] font-grandstander-medium_500 leading-normal"
            href={"/"}
          >
            How To Buy
          </Link>
          <Link
            className="p-[6px] text-background text-[18px] font-grandstander-medium_500 leading-normal"
            href={"/"}
          >
            Tokenomics
          </Link>
          <Link
            className="p-[6px] text-background text-[18px] font-grandstander-medium_500 leading-normal"
            href={"/"}
          >
            FAQ’s
          </Link>
          <Link
            className="p-[6px] text-background text-[18px] font-grandstander-medium_500 leading-normal"
            href={"/"}
          >
            Staking
          </Link>
          <Link
            className="p-[6px] text-background text-[18px] font-grandstander-medium_500 leading-normal"
            href={"/"}
          >
            Roadmap
          </Link>
          <Link
            className="p-[6px] text-background text-[18px] font-grandstander-medium_500 leading-normal"
            href={"/"}
          >
            WhitePaper
          </Link>
        </div>

        <div className="flex flex-row items-center justify-between w-full">
          <button
            className="text-[22px] leading-[160%] text-text font-grandstander-medium_500 px-8 py-[5px] bg-green rounded-[8px] flex flex-col items-center justify-center "
            style={{
              WebkitTextStrokeWidth: "5px",
              WebkitTextStrokeColor: "#4B0082",
              paintOrder: "stroke fill",
            }}
          >
            Connect
          </button>
          <button className="text-[18px] leading-[160%] text-background font-grandstander-medium_500 px-8 py-2 bg-primary rounded-[8px] flex flex-col items-center justify-center">
            Audit
          </button>
        </div>
      </nav> */}
    </div>
  );
};

export default Header;

const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
    >
      <g clip-path="url(#clip0_97_2737)">
        <path
          d="M5.33333 17.8333C6.06971 17.8333 6.66667 17.2363 6.66667 16.5C6.66667 15.7636 6.06971 15.1666 5.33333 15.1666C4.59695 15.1666 4 15.7636 4 16.5C4 17.2363 4.59695 17.8333 5.33333 17.8333Z"
          fill="#FFD700"
          stroke="#4B0082"
          stroke-width="1.5"
        />
        <path
          d="M26.7463 15.1666H10.5863C9.89414 15.1666 9.33301 15.7278 9.33301 16.42V16.58C9.33301 17.2722 9.89414 17.8333 10.5863 17.8333H26.7463C27.4385 17.8333 27.9997 17.2722 27.9997 16.58V16.42C27.9997 15.7278 27.4385 15.1666 26.7463 15.1666Z"
          fill="#FFD700"
          stroke="#4B0082"
          stroke-width="1.5"
        />
        <path
          d="M26.7467 21.8334H5.25333C4.56114 21.8334 4 22.3945 4 23.0867V23.2467C4 23.9389 4.56114 24.5 5.25333 24.5H26.7467C27.4389 24.5 28 23.9389 28 23.2467V23.0867C28 22.3945 27.4389 21.8334 26.7467 21.8334Z"
          fill="#FFD700"
          stroke="#4B0082"
          stroke-width="1.5"
        />
        <path
          d="M26.7467 8.5H5.25333C4.56114 8.5 4 9.06114 4 9.75333V9.91333C4 10.6055 4.56114 11.1667 5.25333 11.1667H26.7467C27.4389 11.1667 28 10.6055 28 9.91333V9.75333C28 9.06114 27.4389 8.5 26.7467 8.5Z"
          fill="#FFD700"
          stroke="#4B0082"
          stroke-width="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_97_2737">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
