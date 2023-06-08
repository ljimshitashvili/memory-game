import { Container, Menu, Overlay } from "./HeaderStyles";
import { useState } from "react";

interface Props {
  done: boolean;
}

export default function Header({ done }: Props) {
  const [menu, setMenu] = useState<boolean>(false);

  const handleRestartClick = () => {
    setMenu(!menu);
    location.reload();
  };

  const handleClick = () => {
    setMenu(!menu);
  };

  const handleNewGameClick = () => {
    setMenu(!menu);
    window.location.replace("/");
  };

  return (
    <Container>
      <h1>memory</h1>
      <button
        onClick={() => {
          setMenu(!menu);
        }}
      >
        Menu
      </button>
      <Overlay menu={menu} done={done} />
      <Menu menu={menu}>
        <button className="restart" onClick={handleRestartClick}>
          Restart
        </button>
        <button onClick={handleNewGameClick}>New Game</button>
        <button onClick={handleClick}>Resume Game</button>
      </Menu>
    </Container>
  );
}
