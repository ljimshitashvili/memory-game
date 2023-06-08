import { useEffect } from "react";
import { Container, MainContainer } from "./SmallSizeStyles";
import { useLocation } from "react-router-dom";

interface Props {
  setPath: (path: string) => void;
  cards: string[];
  setCards: (cards: string[]) => void;
  flippedCards: number[];
  setFlippedCards: (flippedCards: number[]) => void;
  matchedCards: number[];
  setMatchedCards: (matchedCards: number[]) => void;
  disabled: boolean;
  setDisabled: (disabled: boolean) => void;
}

export default function smallSize({
  setPath,
  cards,
  setCards,
  flippedCards,
  setFlippedCards,
  matchedCards,
  setMatchedCards,
  disabled,
  setDisabled,
}: Props) {
  const location = useLocation();
  setPath(location.pathname);

  useEffect(() => {
    const initialCards = cards.concat(cards);
    setCards(shuffle(initialCards));
  }, []);

  const changeFlip = (index: number) => {
    if (
      disabled ||
      flippedCards.includes(index) ||
      matchedCards.includes(index)
    ) {
      return;
    }

    setFlippedCards([...flippedCards, index]);

    if (flippedCards.length === 1) {
      setDisabled(true);

      setTimeout(() => {
        if (cards[index] === cards[flippedCards[0]]) {
          setMatchedCards([...matchedCards, index, flippedCards[0]]);
        }

        setFlippedCards([]);
        setDisabled(false);
      }, 500);
    }
  };

  const isCardFlipped = (index: number) => {
    return flippedCards.includes(index) || matchedCards.includes(index);
  };

  const isCardMatched = (index: number) => {
    return matchedCards.includes(index);
  };

  const shuffle = (array: any[]) => {
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

  return (
    <MainContainer>
      {cards.map((card, index) => (
        <Container
          key={index}
          className={`card ${isCardFlipped(index) ? "flipped" : ""}`}
          onClick={() => changeFlip(index)}
          isMatched={isCardMatched(index)}
          isFlipped={isCardFlipped(index)}
        >
          <h1>{isCardFlipped(index) ? card : ""}</h1>
        </Container>
      ))}
    </MainContainer>
  );
}
