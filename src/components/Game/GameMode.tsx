import { SmallSize } from "..";
import Header from "../Header/Header";
import { Container } from "./GameModeStyles";

interface Props {
  size: string;
  setPath: (path: string) => void;
  cards: string[];
  setCards: (cards: string[]) => void;
  flippedCards: number[];
  setFlippedCards: (flippedCards: number[]) => void;
  matchedCards: number[];
  setMatchedCards: (matchedCards: number[]) => void;
  disabled: boolean;
  setDisabled: (disabled: boolean) => void;
  startTime: number;
  setStartTime: (startTime: number) => void;
  endTime: number;
  setEndTime: (endTime: number) => void;
  elapsedTime: string;
  setElapsedTime: (elapsedTime: string) => void;
  count: number;
  setCount: (count: number) => void;
}

export default function GameMode({
  size,
  setPath,
  cards,
  setCards,
  flippedCards,
  setFlippedCards,
  matchedCards,
  setMatchedCards,
  disabled,
  setDisabled,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  elapsedTime,
  setElapsedTime,
  count,
  setCount,
}: Props) {
  return (
    <Container>
      <Header />
      <SmallSize
        setPath={setPath}
        cards={cards}
        flippedCards={flippedCards}
        setFlippedCards={setFlippedCards}
        setCards={setCards}
        matchedCards={matchedCards}
        setMatchedCards={setMatchedCards}
        disabled={disabled}
        setDisabled={setDisabled}
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
        elapsedTime={elapsedTime}
        setElapsedTime={setElapsedTime}
        count={count}
        setCount={setCount}
      />
    </Container>
  );
}
