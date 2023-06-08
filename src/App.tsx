import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { StartGame, GameMode } from "./components";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { shuffle } from "lodash";

function App() {
  const [path, setPath] = useState<string>("");
  const [theme, setTheme] = useState<string>("numbers");
  const [players, setPlayers] = useState<number>(1);
  const [size, setSize] = useState<string>("4x4");
  const [cards, setCards] = useState<string[]>([
    "1",
    "1",
    "2",
    "2",
    "3",
    "3",
    "4",
    "4",
    "5",
    "5",
    "6",
    "6",
    "7",
    "7",
    "8",
    "8",
  ]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<string>("00:00");
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCards(shuffle(cards));
  }, [path]);

  return (
    <Router>
      <Container path={path}>
        <GlobalStyles />

        <Routes>
          <Route
            path="/"
            element={
              <StartGame
                theme={theme}
                setTheme={setTheme}
                players={players}
                setPlayers={setPlayers}
                size={size}
                setSize={setSize}
                setPath={setPath}
              />
            }
          ></Route>
          <Route
            path="game"
            element={
              <GameMode
                path={path}
                setPath={setPath}
                cards={cards}
                setCards={setCards}
                flippedCards={flippedCards}
                setFlippedCards={setFlippedCards}
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
            }
          ></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div<{ path: string }>`
  width: 100%;
  min-height: 100vh;
  background-color: ${(p) => (p.path.includes("game") ? "#FCFCFC" : "#152938")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
