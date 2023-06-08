import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 29px 0;
  width: 100%;
  position: relative;

  button {
    background: #fda214;
    border-radius: 26px;
    border: none;
    width: 78px;
    height: 40px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #fcfcfc;
  }
`;

export const Menu = styled.div<{ menu: boolean }>`
  display: ${(p) => (p.menu ? "flex" : "none")};
  width: 327px;
  background: #f2f2f2;
  border-radius: 10px;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  position: absolute;
  top: 222px;
  padding: 24px;

  button {
    width: 100%;
    height: 48px;
    background-color: #dfe7ec;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    border-radius: 26px;
    color: #304859;
  }

  button:focus {
    background: #fda214;
    color: #fcfcfc;
  }
`;

export const Overlay = styled.div<{ menu: boolean }>`
  display: ${(p) => (p.menu ? "" : "none")};
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: -24px;
`;
