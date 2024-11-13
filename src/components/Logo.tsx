import Heading from "./Heading";
import { Image } from "./Image";

export default function Logo() {
  return (
    <>
      <Image type="logo" />
      <Heading as="h1" $center>
        Goal tracker
      </Heading>
    </>
  );
}
