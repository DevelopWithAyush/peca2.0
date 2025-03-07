import React from "react";

const Footer = () => {
  return (
    <section className="px-10 py-5 flex flex-col items-center justify-start bg-green">
      <p className="text-text text-[12px] font-grandstander-medium_500 leading-[160%]">
        © {new Date().getFullYear()} Pepius Caesar. All rights reserved.
      </p>
      <div className="text-text flex flex-col items-center justify-start gap-0">
        <p className="text-[#FFF] font-grandstander-extrabold_800 leading-[160%] ">
          Disclaimer
        </p>
        <p className="text-text font-grandstander-medium_500 leading-[160%] text-[12px] text-center ">
          Always do your own research. Nothing here is financial advice. This is
          a meme coin. This is for the lolz.
        </p>
      </div>
    </section>
  );
};

export default Footer;
