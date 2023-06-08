import styled from "styled-components";

interface Props {
  count: number;
  elapsedTime: string;
}

export default function FooterSolo({ count, elapsedTime }: Props) {
  return (
    <Container>
      <div>
        <h1>Time</h1>
        {elapsedTime}
      </div>
      <div>
        <h1>Moves</h1>
        {count}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  div {
    width: 151px;
    height: 70px;
    background: #dfe7ec;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;

    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #304859;

    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 19px;
      text-align: center;
      color: #7191a5;
    }
  }
`;
