import { Link } from "react-router-dom";
import { Container, Menu, Overlay } from "./HeaderStyles";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState<boolean>(false);

  const handleRestartClick = () => {
    setMenu(!menu);
    location.reload();
  };

  const handleNewGameClick = () => {
    setMenu(!menu);
  };

  const handleResumeGameClick = () => {
    setMenu(!menu);
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
      <Overlay menu={menu} />
      <Menu menu={menu}>
        <button onClick={handleRestartClick}>Restart</button>
        <Link to="/">
          <button onClick={handleNewGameClick}>New Game</button>
        </Link>
        <button onClick={handleResumeGameClick}>Resume Game</button>
      </Menu>
    </Container>
  );
}
