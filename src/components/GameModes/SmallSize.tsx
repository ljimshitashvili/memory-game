import { Container } from "./SmallSizeStyles";
import { useLocation } from "react-router-dom";

interface Props {
  setPath: (path: string) => void;
}

export default function smallSize({ setPath }: Props) {
  const location = useLocation().pathname;
  setPath(location);
  return (
    <Container>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
}
