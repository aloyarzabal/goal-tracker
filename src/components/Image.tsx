import styled from "styled-components";

interface Props {
  type: "logo" | "profile";
}

export function Image({ type }: Props) {
  return (
    <ImgWrapper>
      <Img src="./dartboard_pink.png" alt={type}></Img>
    </ImgWrapper>
  );
}

const Img = styled.img`
  height: 9.6rem;
`;

const ImgWrapper = styled.div`
  text-align: center;
`;
