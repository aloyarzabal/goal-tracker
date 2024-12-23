interface Props {
  color?: string;
  width?: string;
  height?: string;
}

export function MoneyIcon({
  color = "black",
  width = "60px",
  height = "60px",
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="60 60 270 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize="3rem"
    >
      <g>
        <path
          d="M303.126 136.208C281.015 132.778 265.08 104.845 246.318 98.0984C244.081 97.2946 232.069 107.635 229.8 109.141C197.375 130.656 162.319 147.633 129.719 168.977C122.439 173.743 85.8024 187.889 83.1465 196.481C82.674 198.014 82.5844 200.212 83.1465 200.322C91.5257 201.965 100.174 208.769 107.257 213.499C111.791 216.526 151.723 247.346 155.006 244.84C189.824 218.255 264.876 166.587 305.77 140.126"
          stroke={color}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M312.312 160.424C262.454 184.856 195.245 257.231 155.602 278.601C153.826 279.558 139.956 268.042 137.675 266.812C123.434 259.133 110.102 248.85 97.7998 237.996"
          stroke={color}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M317 184.071C304.217 178.343 169.407 306.551 156.375 300.919C143.344 295.288 116.401 273.745 100.319 261.358"
          stroke={color}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M188.842 155.443C219.671 118.612 245.085 191.932 193.136 184.294C182.431 182.721 176.52 159.313 184.875 153.304"
          stroke={color}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M119.806 192.842C125.346 200.295 129.325 195.187 139.627 187.5"
          stroke={color}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M263.16 144.401C268.505 140.996 264.15 143.816 264.15 137.28"
          stroke={color}
          strokeOpacity="0.9"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
