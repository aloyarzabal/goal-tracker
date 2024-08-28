interface Props {
  color?: string;
  width?: string;
  height?: string;
}

export function OthersIcon({
  color = "black",
  width = "60px",
  height = "60px",
}: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 33.926 33.926">
      <g>
        <path
          fill={color}
          d="M0,15.776c0,5.996,6.814,10.875,15.191,10.875c1.104,0,2.189-0.094,3.256-0.262
		c1.007-0.039,1.988-0.138,2.938-0.294c1.66,1.47,4.236,2.931,7.978,2.931l1.906-0.004l-0.021-0.029
		c0.84,0.018,1.721,0.009,2.678,0.008c-2.528-3.506-3.192-5.777-3.363-6.833c2.102-1.806,3.363-4.052,3.363-6.496
		c0-5.935-7.354-10.745-16.422-10.745c-0.316,0-0.629,0.014-0.94,0.023c-0.453-0.028-0.909-0.049-1.372-0.049
		C6.814,4.901,0,9.778,0,15.776z M2,15.776c0-4.895,5.918-8.875,13.191-8.875s13.191,3.98,13.191,8.875
		c0,1.879-0.892,3.688-2.58,5.23l-0.395,0.361l0.08,0.527c0.13,0.856,0.564,2.529,1.984,4.975c-2.598-0.444-4.344-1.754-5.414-2.889
		l-0.438-0.465l-0.606,0.203c-1.844,0.618-3.803,0.932-5.823,0.932C7.918,24.651,2,20.67,2,15.776z M21.867,13.935
		c1.05,0,1.902,0.852,1.902,1.902s-0.852,1.902-1.902,1.902s-1.902-0.852-1.902-1.902S20.817,13.935,21.867,13.935z M8.443,13.935
		c1.05,0,1.902,0.852,1.902,1.902s-0.852,1.902-1.902,1.902s-1.902-0.852-1.902-1.902S7.393,13.935,8.443,13.935z M15.155,13.935
		c1.05,0,1.902,0.852,1.902,1.902s-0.852,1.902-1.902,1.902s-1.902-0.852-1.902-1.902S14.105,13.935,15.155,13.935z"
        />
      </g>
    </svg>
  );
}