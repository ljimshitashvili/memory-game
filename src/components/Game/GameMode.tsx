import { SmallSize } from "..";
import Header from "../Header/Header";
import { Container } from "./GameModeStyles";

interface Props {
  size: string;
  setPath: (path: string) => void;
  cards: Array<string>;
  flipped: boolean[];
  setFlipped: (flipped: boolean[]) => void;
}

export default function GameMode({
  size,
  setPath,
  cards,
  flipped,
  setFlipped,
}: Props) {
  return (
    <Container>
      <Header />
      <SmallSize
        setPath={setPath}
        cards={cards}
        flipped={flipped}
        setFlipped={setFlipped}
      />
    </Container>
  );
}
