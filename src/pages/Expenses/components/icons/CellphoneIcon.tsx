interface Props {
  color?: string;
  width?: string;
  height?: string;
}

export function CellphoneIcon({
  color = "black",
  width = "60px",
  height = "60px",
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="-4 0 19 19"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.114 2.69v13.76a1.123 1.123 0 0 1-1.12 1.12H2.102a1.123 1.123 0 0 1-1.12-1.12V2.69a1.123 1.123 0 0 1 1.12-1.12h6.892a1.123 1.123 0 0 1 1.12 1.12zm-1.12 1.844H2.102V14.78h6.892zm-5.31-1.418a.56.56 0 0 0 .56.56h2.61a.56.56 0 0 0 0-1.12h-2.61a.56.56 0 0 0-.56.56zm2.423 13.059a.558.558 0 1 0-.559.558.558.558 0 0 0 .559-.558z" />
    </svg>
  );
}
