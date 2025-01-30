import React from "react";

// 定义一个名为TokenBox的函数组件
const TokenBox = () => {
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
      <div className="bg-text p-4  xl:p-8 w-full xl:w-[418px] h-[573px] rounded-[32px] flex flex-col items-center justify-start  ">
        <p
          className="text-primary whitespace-nowrap font-grandstander-black_900 leading-[110%] text-[24px] xl:text-[32px]  "
          style={{
            WebkitTextStrokeWidth: "4px",
            WebkitTextStrokeColor: "#4B0082",
            paintOrder: "stroke fill",
          }}
        >
          BUY $PECA IN PRESALE
        </p>
      </div>
    </div>
  );
};

export default TokenBox;
