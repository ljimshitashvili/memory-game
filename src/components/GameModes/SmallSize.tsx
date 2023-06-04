import { Container, MainContainer } from "./SmallSizeStyles";
import { useLocation } from "react-router-dom";

interface Props {
  setPath: (path: string) => void;
  cards: Array<string>;
  flipped: boolean[];
  setFlipped: (flipped: boolean[]) => void;
}

export default function smallSize({
  setPath,
  cards,
  flipped,
  setFlipped,
}: Props) {
  const location = useLocation().pathname;
  setPath(location);

  const changeFlip = (index: number): void => {
    const newFlipped: boolean[] = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };
  return (
    <MainContainer style={{ width: "100%" }}>
      {cards.map((card, index) => (
        <Container
          flipped={flipped[index]}
          key={index}
          onClick={() => changeFlip(index)}
        >
          <h1>{card}</h1>
        </Container>
      ))}
    </MainContainer>
  );
}
