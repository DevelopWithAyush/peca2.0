"use client";
import Breaking from "../Breaking";
import Header from "../Header";

const Slide7 = () => {
  return (
    <div className="bg-[url('/images/Background1.png')]   bg-no-repeat bg-contain bg-bottom  relative w-[100vw] overflow-hidden   ">
      <div className=" w-full bg-background z-[10] ">
        <Header />
        <Breaking />
      </div>

      <div className=" w-full max-w-[88rem] mx-auto  px-8 py-[32px] ">
        <p
          className="text-secondary text-[48px] font-grandstander-black_900 leading-normal  "
          style={{
            WebkitTextStrokeColor: "#FFD700",
            WebkitTextStrokeWidth: "4px",
            paintOrder: "stroke fill",
          }}
        >
          $PECA SUPADAPP
        </p>
      </div>
    </div>
  );
};

export default Slide7;
