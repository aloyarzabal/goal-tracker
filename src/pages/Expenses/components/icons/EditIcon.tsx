interface Props {
  color?: string;
  width?: string;
  height?: string;
}

export function EditIcon({
  color = "black",
  width = "60px",
  height = "60px",
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={color}
        d="m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z"
        fill="#000000"
      />
    </svg>
  );
}
