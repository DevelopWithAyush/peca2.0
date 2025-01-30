import React from "react";

const Reward = () => {
  return (
    <div className="flex flex-col items-center justify-start -rotate-12 mt-5  ">
      <p
        className="text-background text-[32px] font-grandstander-black_900 leading-[110%]"
        style={{
          WebkitTextStrokeWidth: "4px",
          WebkitTextStrokeColor: "#FFD700",
          paintOrder: "stroke fill",
        }}
      >
        REWARDS P/A
      </p>
      <p
        className="text-secondary text-center text-[48px] leading-[110%] font-grandstander-black_900  "
        style={{
          WebkitTextStrokeWidth: "4px",
          WebkitTextStrokeColor: "#FFD700",
          paintOrder: "stroke fill",
        }}
      >
        127%
      </p>
    </div>
  );
};

export default Reward;
