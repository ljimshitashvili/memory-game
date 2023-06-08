import styled from "styled-components";

export const Container = styled.div<{ isMatched: boolean; isFlipped: boolean }>`
  width: 72px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) =>
    p.isMatched ? "#BCCED9" : p.isFlipped ? "#FDA214" : "#304859"};
  transition: all 0.1s;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #fcfcfc;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 327px;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;

  img {
    width: 50%;
  }
`;
