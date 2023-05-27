import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { StartGame } from "./components";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState<string>("numbers");
  const [players, setPlayers] = useState<number>(1);
  const [size, setSize] = useState<string>("4x4");

  return (
    <Router>
      <Container>
        <GlobalStyles />
        <StartGame
          theme={theme}
          setTheme={setTheme}
          players={players}
          setPlayers={setPlayers}
          size={size}
          setSize={setSize}
        />
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #152938;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
