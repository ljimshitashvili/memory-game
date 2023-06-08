import { SmallSize } from "..";
import Header from "../Header/Header";
import { Container } from "./GameModeStyles";
import { GameModeProps } from "../../types";
import SoloFinishCard from "./SoloFinishCard";

export default function GameMode({
  path,
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
  done,
  setDone,
}: GameModeProps) {
  if (matchedCards.length === cards.length) {
    setDone(true);
  }

  return (
    <Container>
      <Header done={done} />
      <SmallSize
        done={done}
        setDone={setDone}
        path={path}
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
      <SoloFinishCard
        done={done}
        elapsedTime={elapsedTime}
        count={count}
        setDone={setDone}
      />
    </Container>
  );
}
