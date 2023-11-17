import { Overlay } from "./styles";
import ClipLoader from "react-spinners/ClipLoader";

export function Loading() {
  return (
    <Overlay>
      <ClipLoader />
    </Overlay>
  );
}
