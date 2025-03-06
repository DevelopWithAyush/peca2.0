"use client";
import { HandleContext } from "@/hooks/handleState";
import { motion } from "motion/react";
import Image from "next/image";
import { useContext, useState } from "react";
import MovingStar from "../common/MovingStar";
import MenuIcon from "./MenuIcon";
import MobileNavbar from "./MobileNavbar";
import NavLink from "./NavLink";
import TelegramIcon from "./TelegramIcon";
import XIcon from "./XIcon";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
    const { pageJump } = useContext(HandleContext);
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
          <button  className="flex flex-row items-end justify-center  ">
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
              <motion.p
                initial={{
                  color: "#EF4444", // Start with red
                }}
                animate={{
                  color: "#22C55E", // Animate to green
                }}
                transition={{
                  duration: 1, // Animation duration in seconds
                  repeat: Infinity, // Repeat the animation infinitely
                  ease :"linear",
                }}
                className="px-[5px] text-[9px] font-grandstander-medium_500 whitespace-nowrap leading-[110%] inline-block"
              >
                Coming Soon
              </motion.p>
              <p className="px-1  text-[16px] font-grandstander-medium_500 text-background leading-[140%] hover:text-secondary duration-300 ease-in-out  ">
                SupaDapp
              </p>
            </div>
          </button>
          <button onClick={() => pageJump(1)}>
            <NavLink title="how to buy" />
          </button>

          <button onClick={() => pageJump(2)}>
            <NavLink title="Tokenomics" />
          </button>
          <button onClick={() => pageJump(3)}>
            <NavLink title="FAQs" />
          </button>
          {/* <Link href={"/"} className="flex flex-row items-end justify-center  ">
            <div className="flex flex-col items-end">
              <motion.p
                initial={{
                  color: "#EF4444", // Start with red
                }}
                animate={{
                  color: "#22C55E", // Animate to green
                }}
                transition={{
                  duration: 1, // Animation duration in seconds
                  repeat: Infinity, // Repeat the animation infinitely
                  ease: "linear",
                }}
                className="px-[5px] text-[9px] font-grandstander-medium_500 whitespace-nowrap leading-[110%] inline-block"
              >
                Coming Soon
              </motion.p>
              <p className="px-1  text-[16px] font-grandstander-medium_500 text-background  leading-[140%] hover:text-secondary duration-300 ease-in-out  ">
                Staking
              </p>
            </div>
          </Link> */}

          <button onClick={() => pageJump(4)}>
            <NavLink   title="Roadmap" />
          </button>
          <Link href={"https://drive.google.com/file/d/1bO_Gn5a7vZ6vREHjaEzCt5vNwQSv0l8E/view?usp=drive_link"} target="_blank">
            <NavLink title="Whitepaper" />
          </Link>
        </nav>
        <div className=" hidden flex-row items-center justify-start gap-4 xl:flex">
          <Link href={"https://x.com/Pepius_Caesar"} target="_blank">
          <XIcon />
          </Link>
          <Link href={"https://t.me/pepiuscaesar_discussions"} target="_blank">
          <TelegramIcon />
          </Link>
          <button
          
            className="text-[18px] leading-[160%] text-background font-grandstander-medium_500 px-8 py-2  duration-500 ease-in-out
            hover:bg-[linear-gradient(100deg,#FFD700_31.35%,#96C_98.76%)] 
            bg-primary rounded-[8px] flex flex-col items-center justify-center">
            Audit
          </button>
          <button
            className="text-[22px]
            duration-500 ease-in-out
            hover:bg-[linear-gradient(100deg,#55A330_31.35%,#96C_98.76%)] 
            leading-[160%] text-text font-grandstander-medium_500 px-8 py-[5px] bg-green rounded-[8px] flex flex-col items-center justify-center "
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
            setIsOpen(true);
          }}
          className="xl:hidden flex flex-col items-center justify-center"
        >
          <MenuIcon />
        </button>
      </header>
      <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <MovingStar />
    </div>
  );
};

export default Header;
