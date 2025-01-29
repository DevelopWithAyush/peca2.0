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
