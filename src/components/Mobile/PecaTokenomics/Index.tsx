import Image from "next/image";
import Content from "./Content";
import { VectorButton } from "@/VectorImages/Image";

const PecaTokenomics = () => {
  return (
    <section id="tokenomics" className="flex flex-col items-start justify-start w-full px-5 pt-8">
      <p
        className="text-[32px] text-secondary font-grandstander-black_900 "
        style={{
          WebkitTextStrokeWidth: "4px",
          WebkitTextStrokeColor: "#FFD700",
          paintOrder: "stroke fill",
        }}
      >
        $PECA TOKENOMICS
      </p>
      <div className="flex flex-col w-full items-center justify-start">
        <Image
          src={"/images/Images/Slide3Image3.png"}
          alt="pecatokenomics"
          width={265}
          height={199}
        />
        <Content />
      </div>
      <div className=" flex w-full items-center flex-row mt-5 relative left-[-50px]">
        <Image
          src={"/images/Images/Slide3Image1.png"}
          alt="pecatokenomics"
          width={231}
          height={199}
          className="z-50"
        />
        <div className="relative w-auto left-[-80px] ">
          <p className="text-background z-30 text-[18px] font-grandstander-medium_500 leading-[125%] absolute top-0 left-0 px-8 py-5  ">
            Nice try, Didddy!
          </p>
          <VectorButton width="210" />
        </div>
      </div>
    </section>
  );
};

export default PecaTokenomics;
