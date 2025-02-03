import { cn } from "@/lib/utility";

export const DownArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="16"
      viewBox="0 0 27 16"
      fill="none"
    >
      <path
        d="M2.76047 1.84891C3.63961 0.949535 4.86286 0.879069 5.93718 1.84891L13.8137 9.40024L21.69 1.84891C22.7646 0.879069 23.99 0.949535 24.8618 1.84891C25.2721 2.29155 25.5001 2.87283 25.5001 3.47639C25.5001 4.07994 25.2721 4.66122 24.8618 5.10386C24.0432 5.94656 15.3995 14.177 15.3995 14.177C15.1939 14.3905 14.9472 14.5604 14.6744 14.6764C14.4016 14.7924 14.1082 14.8522 13.8117 14.8522C13.5152 14.8522 13.2218 14.7924 12.949 14.6764C12.6762 14.5604 12.4296 14.3905 12.2239 14.177C12.2239 14.177 3.58426 5.94656 2.7618 5.10386C2.35121 4.66137 2.12305 4.08003 2.12305 3.47639C2.12305 2.87274 2.35121 2.29141 2.7618 1.84891H2.76047Z"
        fill="#FFD700"
        stroke="#4B0082"
        stroke-width="1.5"
      />
    </svg>
  );
};

export const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
    >
      <rect
        x="2.01172"
        y="13.0127"
        width="3.35786"
        height="19.3093"
        rx="1.67893"
        transform="rotate(-90 2.01172 13.0127)"
        fill="#FFD700"
        stroke="#4B0082"
        stroke-width="1.5"
      />
      <rect
        x="9.9873"
        y="1.6792"
        width="3.35786"
        height="19.3093"
        rx="1.67893"
        fill="#FFD700"
        stroke="#4B0082"
        stroke-width="1.5"
      />
    </svg>
  );
};

export const MinusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
    >
      <rect
        x="2.01172"
        y="13.687"
        width="3.35786"
        height="19.3093"
        rx="1.67893"
        transform="rotate(-90 2.01172 13.687)"
        fill="#FFD700"
        stroke="#4B0082"
        stroke-width="1.5"
      />
      <rect
        x="1.99707"
        y="13.6875"
        width="3.35786"
        height="19.3093"
        rx="1.67893"
        transform="rotate(-90 1.99707 13.6875)"
        fill="#FFD700"
        stroke="#4B0082"
        stroke-width="1.5"
      />
    </svg>
  );
};

export const VectorButton = ({ width }: { width: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height="100%"
      viewBox="0 0 248 75"
      fill="none"
      className={cn("  ")}
      style={{
        filter: "drop-shadow(-2px 8px 0px #A26CD9)",
      }}
    >
      <g filter="url(#filter0_d_459_11920)">
        <path
          d="M4.36822 64.0272C4.36822 64.0272 3.53972 38.7085 4.36822 26.8429C5.19673 14.9774 13.0215 9.50423 23.7863 8.45973C34.5511 7.41522 248 3.02832 248 3.02832C248 3.02832 241.268 35.2825 235.055 48.1508C228.841 61.019 214.515 64.0968 208.128 64.0272C201.742 63.9575 4.36822 64.0272 4.36822 64.0272Z"
          fill="#FFD700"
        />
        <path
          d="M4.36822 64.0272C4.36822 64.0272 3.53972 38.7085 4.36822 26.8429C5.19673 14.9774 13.0215 9.50423 23.7863 8.45973C34.5511 7.41522 248 3.02832 248 3.02832C248 3.02832 241.268 35.2825 235.055 48.1508C228.841 61.019 214.515 64.0968 208.128 64.0272C201.742 63.9575 4.36822 64.0272 4.36822 64.0272Z"
          stroke="#9966CC"
          stroke-width="4"
        />
      </g>
      <defs>
        {/* <filter
          id="filter0_d_459_11920"
          x="0"
          y="0.977051"
          width="250.472"
          height="73.0513"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2" dy="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.63567 0 0 0 0 0.424748 0 0 0 0 0.849137 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_459_11920"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_459_11920"
            result="shape"
          />
        </filter> */}
      </defs>
    </svg>
  );
};

export const InfoButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <g clip-path="url(#clip0_543_12412)">
        <path
          d="M8.03043 13.3631C7.8913 13.3631 7.75217 13.3109 7.64783 13.224C7.47391 13.0848 7.38696 12.8588 7.43913 12.6327L8.2913 8.28484L7.82174 8.54571C7.52609 8.70223 7.16087 8.61528 6.98696 8.31962C6.83043 8.02397 6.91739 7.65876 7.21304 7.48484L8.83043 6.5631C9.03913 6.44136 9.3 6.45876 9.4913 6.59789C9.68261 6.73702 9.76957 6.98049 9.73478 7.20658L8.84783 11.7283L9.57826 11.4153C9.8913 11.2761 10.2391 11.4153 10.3783 11.7283C10.5174 12.0414 10.3783 12.3892 10.0652 12.5283L8.27391 13.3109C8.20435 13.3457 8.11739 13.3631 8.03043 13.3631ZM9.75217 5.05006C9.9087 4.89354 10.013 4.66745 10.013 4.44136C10.013 4.21528 9.92609 3.98919 9.75217 3.83267C9.59565 3.67615 9.36957 3.5718 9.14348 3.5718C8.91739 3.5718 8.6913 3.65876 8.53478 3.83267C8.37826 3.98919 8.27391 4.21528 8.27391 4.44136C8.27391 4.66745 8.36087 4.89354 8.53478 5.05006C8.6913 5.20658 8.91739 5.31093 9.14348 5.31093C9.36957 5.31093 9.59565 5.22397 9.75217 5.05006ZM16.5 8.52832C16.5 4.11093 12.9174 0.52832 8.5 0.52832C4.08261 0.52832 0.5 4.11093 0.5 8.52832C0.5 12.9457 4.08261 16.5283 8.5 16.5283C12.9174 16.5283 16.5 12.9457 16.5 8.52832ZM15.1087 8.52832C15.1087 12.1805 12.1522 15.137 8.5 15.137C4.84783 15.137 1.8913 12.1805 1.8913 8.52832C1.8913 4.87615 4.84783 1.91962 8.5 1.91962C12.1522 1.91962 15.1087 4.87615 15.1087 8.52832Z"
          fill="#9966CC"
        />
      </g>
      <defs>
        <clipPath id="clip0_543_12412">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.5 0.52832)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const  TokenCoin = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
    >
      <path
        d="M10.5 1.15332C8.6458 1.15332 6.83324 1.70315 5.29153 2.73329C3.74982 3.76343 2.54821 5.22761 1.83863 6.94066C1.12906 8.65372 0.943406 10.5387 1.30514 12.3573C1.66688 14.1759 2.55976 15.8463 3.87088 17.1574C5.182 18.4686 6.85246 19.3614 8.67103 19.7232C10.4896 20.0849 12.3746 19.8993 14.0877 19.1897C15.8007 18.4801 17.2649 17.2785 18.295 15.7368C19.3252 14.1951 19.875 12.3825 19.875 10.5283C19.875 8.04192 18.8873 5.65735 17.1291 3.89919C15.371 2.14104 12.9864 1.15332 10.5 1.15332ZM10.5 18.1564C8.9913 18.1564 7.51648 17.7091 6.26205 16.8709C5.00761 16.0327 4.02989 14.8413 3.45254 13.4475C2.87518 12.0536 2.72412 10.5199 3.01845 9.04015C3.31278 7.56044 4.03929 6.20123 5.10611 5.13442C6.17292 4.06761 7.53212 3.3411 9.01183 3.04677C10.4915 2.75243 12.0253 2.9035 13.4192 3.48085C14.813 4.05821 16.0044 5.03592 16.8426 6.29036C17.6807 7.5448 18.1281 9.01962 18.1281 10.5283C18.1281 12.5514 17.3245 14.4917 15.8939 15.9222C14.4634 17.3528 12.5231 18.1564 10.5 18.1564Z"
        fill="#FF9909"
      />
      <path
        d="M13.419 17.5753C17.3112 15.9631 19.1595 11.5009 17.5473 7.60869C15.9351 3.71648 11.4729 1.86817 7.58067 3.48038C3.68846 5.09258 1.84015 9.5548 3.45236 13.447C5.06457 17.3392 9.52678 19.1875 13.419 17.5753Z"
        fill="#FBCB00"
      />
      <path
        d="M11.9252 9.90333H9.0752C8.90944 9.90333 8.75046 9.83748 8.63325 9.72027C8.51604 9.60306 8.4502 9.44409 8.4502 9.27833V7.77208C8.4502 7.60632 8.51604 7.44735 8.63325 7.33014C8.75046 7.21293 8.90944 7.14708 9.0752 7.14708H13.6064V5.89708H11.1252V4.75958H9.8752V5.90958H9.0752C8.57791 5.90958 8.101 6.10713 7.74937 6.45876C7.39774 6.81039 7.2002 7.2873 7.2002 7.78458V9.27833C7.2002 9.77561 7.39774 10.2525 7.74937 10.6042C8.101 10.9558 8.57791 11.1533 9.0752 11.1533H11.9252C12.091 11.1533 12.2499 11.2192 12.3671 11.3364C12.4843 11.4536 12.5502 11.6126 12.5502 11.7783V13.2971C12.5502 13.4628 12.4843 13.6218 12.3671 13.739C12.2499 13.8562 12.091 13.9221 11.9252 13.9221H7.39394V15.1721H9.8752V16.3221H11.1252V15.1471H11.9252C12.4225 15.1471 12.8994 14.9495 13.251 14.5979C13.6027 14.2463 13.8002 13.7694 13.8002 13.2721V11.7783C13.8002 11.2811 13.6027 10.8041 13.251 10.4525C12.8994 10.1009 12.4225 9.90333 11.9252 9.90333Z"
        fill="#E6E7E8"
      />
    </svg>
  );
};
