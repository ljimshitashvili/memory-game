import { Container } from "./StartGameStyles";

export default function StartGame() {
  return (
    <Container>
      <h2>memory</h2>
      <div className="theme">
        <h1>Select Theme</h1>
        <div className="buttonContainer">
          <button>Numbers</button>
          <button>Icons</button>
        </div>
      </div>
      <div className="players">
        <h1>Number of Players</h1>
        <div className="buttonContainer">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
      </div>
      <div className="size">
        <h1>Grid Size</h1>
        <div className="buttonContainer">
          <button>4x4</button>
          <button>6x6</button>
        </div>
      </div>
      <button className="start">Start Game</button>
    </Container>
  );
}
