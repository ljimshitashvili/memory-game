import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { StartGame } from "./components";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <StartGame />
    </Container>
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
