import styled from "styled-components";

export const Container = styled.div<{
  theme: string;
  players: number;
  size: string;
}>`
  width: 100%;
  max-width: 327px;
  background: #fcfcfc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  position: relative;

  .buttonContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #numbers {
    background-color: ${(p) => (p.theme === "numbers" ? "#304859" : "#BCCED9")};
  }

  #icons {
    background-color: ${(p) => (p.theme === "icons" ? "#304859" : "#BCCED9")};
  }

  #one {
    background-color: ${(p) => (p.players === 1 ? "#304859" : "#BCCED9")};
  }

  #two {
    background-color: ${(p) => (p.players === 2 ? "#304859" : "#BCCED9")};
  }

  #three {
    background-color: ${(p) => (p.players === 3 ? "#304859" : "#BCCED9")};
  }

  #four {
    background-color: ${(p) => (p.players === 4 ? "#304859" : "#BCCED9")};
  }

  #small {
    background-color: ${(p) => (p.size === "4x4" ? "#304859" : "#BCCED9")};
  }

  #big {
    background-color: ${(p) => (p.size === "6x6" ? "#304859" : "#BCCED9")};
  }

  .theme,
  .players,
  .size {
    display: flex;
    flex-direction: column;
    gap: 11px;
    width: 100%;

    .buttonContainer {
      gap: 11px;

      button {
        border: none;
        border-radius: 26px;
        width: 100%;
        padding: 10px;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #fcfcfc;
      }
    }
  }

  .start {
    margin-top: 8px;
    padding: 13px;
    border: none;
    border-radius: 26px;
    background-color: #fda214;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #fcfcfc;
    width: 100%;
  }

  h1 {
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    color: #7191a5;
  }

  h2 {
    position: absolute;
    top: -69px;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: #fcfcfc;
  }
`;
