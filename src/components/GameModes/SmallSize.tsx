import { useEffect } from "react";
import { Container, MainContainer } from "./SmallSizeStyles";
import { useLocation } from "react-router-dom";
import FooterSolo from "../Footer/FooterSolo";
import { GameModeProps } from "../../types";

export default function SmallSize({
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
}: GameModeProps) {
  const location = useLocation();
  setPath(location.pathname);

  const changeFlip = (index: number) => {
    if (
      disabled ||
      flippedCards.includes(index) ||
      matchedCards.includes(index)
    ) {
      return;
    }

    setFlippedCards([...flippedCards, index]);

    if (flippedCards.length === 0) {
      if (startTime === 0) {
        setStartTime(Date.now());
      }
    }

    if (flippedCards.length === 1) {
      setDisabled(true);
      setCount(count + 1);

      setTimeout(() => {
        if (cards[index] === cards[flippedCards[0]]) {
          setMatchedCards([...matchedCards, index, flippedCards[0]]);
        }

        setFlippedCards([]);
        setDisabled(false);

        if (matchedCards.length === cards.length - 2) {
          setEndTime(Date.now());
        }
      }, 500);
    }
  };

  const isCardFlipped = (index: number) => {
    return flippedCards.includes(index) || matchedCards.includes(index);
  };

  const isCardMatched = (index: number) => {
    return matchedCards.includes(index);
  };

  const shuffle = (array: string[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    const initialCards = cards.concat(cards);
    setCards(shuffle(initialCards));
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (startTime !== 0 && endTime === 0) {
      interval = setInterval(() => {
        const totalSeconds = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(totalSeconds / 60)
          .toString()
          .padStart(2, "0");
        const seconds = (totalSeconds % 60).toString().padStart(2, "0");
        setElapsedTime(`${minutes}:${seconds}`);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  return (
    <MainContainer>
      {cards.map((card, index) => (
        <Container
          key={index}
          onClick={() => changeFlip(index)}
          isMatched={isCardMatched(index)}
          isFlipped={isCardFlipped(index)}
        >
          <h1>{isCardFlipped(index) ? card : ""}</h1>
        </Container>
      ))}

      <FooterSolo count={count} elapsedTime={elapsedTime} />
    </MainContainer>
  );
}
