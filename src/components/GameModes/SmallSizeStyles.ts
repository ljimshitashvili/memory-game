import styled from "styled-components";

export const Container = styled.div<{ isMatched: boolean }>`
  width: 72px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => (p.isMatched ? "#BCCED9" : "#304859")};

  h1 {
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 327px;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
`;
