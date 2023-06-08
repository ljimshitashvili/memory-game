import styled from "styled-components";

interface Props {
  done: boolean;
  elapsedTime: string;
  count: number;
  setDone: (done: boolean) => void;
}

export default function SoloFinishCard({
  done,
  elapsedTime,
  count,
  setDone,
}: Props) {
  const restartClick = () => {
    setDone(!done);
    window.location.reload();
  };

  const handleNewGame = () => {
    setDone(!done);
    window.location.replace("/");
  };

  return (
    <Container done={done}>
      <h1>You did it!</h1>
      <h2>Game over! Here’s how you got on…</h2>
      <p className="timeDiv">
        Time Elapsed <span>{elapsedTime}</span>
      </p>
      <p>
        Moves Taken <span>{count}</span>
      </p>

      <button className="restart" onClick={restartClick}>
        Restart
      </button>
      <button className="newGame" onClick={handleNewGame}>
        Setup New Game
      </button>
    </Container>
  );
}
const Container = styled.div<{ done: boolean }>`
  display: ${(p) => (p.done ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: #f2f2f2;
  width: 327px;
  border-radius: 10px;
  top: 146px;
  padding: 32px 24px 24px;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #152938;
    margin-bottom: 9px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #7191a5;
    margin-bottom: 24px;
  }

  p {
    width: 100%;
    height: 48px;
    background: #dfe7ec;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    color: #7191a5;
    margin-bottom: 8px;

    span {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 25px;
      text-align: right;
      color: #304859;
    }
  }

  button {
    width: 100%;
    height: 48px;
    border-radius: 26px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    border: none;
    margin-top: 16px;
  }

  .restart {
    background: #fda214;
    color: #fcfcfc;
  }

  .newGame {
    background: #dfe7ec;
    color: #304859;
  }
`;
