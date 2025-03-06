import TokenBox from "@/components/common/TokenBox/TokenBox";
import Reward from "./Reward";
import Content from "@/components/Desktop/Slide1/Content";
import Image from "next/image";

const Herosection = () => {
  return (
    <main id="hero-section" className="flex flex-col items-center justify-start px-5 pt-8 gap-5 bg-background w-full ">
      <TokenBox />
      <Reward />
      <Content />
      <Image
        src={"/images/Images/slide1Image1.png"}
        alt="Image"
        width={390}
        height={291}
      />
    </main>
  );
};

export default Herosection;
