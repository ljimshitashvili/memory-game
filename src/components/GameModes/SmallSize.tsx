import { useRef } from "react";
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

  const countRef = useRef<number>(0);

  const changeFlip = (index: number): void => {
    const newFlipped: boolean[] = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
    countRef.current++;

    if (countRef.current % 2 === 0) {
      const lastFlippedIndex = newFlipped.lastIndexOf(true);
      const secondLastFlippedIndex = newFlipped.lastIndexOf(
        true,
        lastFlippedIndex - 1
      );

      if (lastFlippedIndex !== -1 && secondLastFlippedIndex !== -1) {
        const lastFlippedCard = cards[lastFlippedIndex];
        const secondLastFlippedCard = cards[secondLastFlippedIndex];

        if (lastFlippedCard !== secondLastFlippedCard) {
          setTimeout(() => {
            // Reset the flipped cards
            const resetFlipped = [...newFlipped];
            resetFlipped[lastFlippedIndex] = false;
            resetFlipped[secondLastFlippedIndex] = false;
            setFlipped(resetFlipped);
          }, 1000);
        }
      }
    }
  };

  return (
    <MainContainer>
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
