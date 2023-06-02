import { SmallSize } from "..";
import Header from "../Header/Header";
import { Container } from "./GameModeStyles";

interface Props {
  size: string;
  setPath: (path: string) => void;
}

export default function GameMode({ size, setPath }: Props) {
  console.log(size);
  return (
    <Container>
      <Header />
      <SmallSize setPath={setPath} />
    </Container>
  );
}
