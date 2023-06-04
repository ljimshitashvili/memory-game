import styled from "styled-components";

export const Container = styled.div<{ flipped: boolean }>`
  width: 72px;
  aspect-ratio: 1/1;
  background: #304859;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    display: ${(p) => (p.flipped ? "block" : "none")};
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 327px;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
`;
