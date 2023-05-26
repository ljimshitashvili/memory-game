import styled from "styled-components";

export const Container = styled.div`
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
        background: #304859;
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
