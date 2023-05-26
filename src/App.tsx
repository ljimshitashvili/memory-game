import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <GlobalStyles />;
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;
