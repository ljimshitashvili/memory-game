import { Container } from "./StartGameStyles";
import { Props } from "../../types";

export default function StartGame({
  theme,
  setTheme,
  players,
  setPlayers,
  size,
  setSize,
}: Props) {
  const changePlayerValue = (e: number) => {
    setPlayers(e);
  };

  const changeThemeValue = (e: string) => {
    setTheme(e);
  };

  const changeSizeValue = (e: string) => {
    setSize(e);
  };

  return (
    <Container theme={theme} players={players} size={size}>
      <h2>memory</h2>
      <div className="theme">
        <h1>Select Theme</h1>
        <div className="buttonContainer">
          <button id="numbers" onClick={() => changeThemeValue("numbers")}>
            Numbers
          </button>
          <button id="icons" onClick={() => changeThemeValue("icons")}>
            Icons
          </button>
        </div>
      </div>
      <div className="players">
        <h1>Number of Players</h1>
        <div className="buttonContainer">
          <button id="one" onClick={() => changePlayerValue(1)}>
            1
          </button>
          <button id="two" onClick={() => changePlayerValue(2)}>
            2
          </button>
          <button id="three" onClick={() => changePlayerValue(3)}>
            3
          </button>
          <button id="four" onClick={() => changePlayerValue(4)}>
            4
          </button>
        </div>
      </div>
      <div className="size">
        <h1>Grid Size</h1>
        <div className="buttonContainer">
          <button id="small" onClick={() => changeSizeValue("4x4")}>
            4x4
          </button>
          <button id="big" onClick={() => changeSizeValue("6x6")}>
            6x6
          </button>
        </div>
      </div>
      <button className="start">Start Game</button>
    </Container>
  );
}
