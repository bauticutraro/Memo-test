import styled, { css } from 'styled-components';

export const S_BoardContainer = styled.div`
  --card-size: 100px;

  display: grid;
  grid-template-columns: repeat(4, var(--card-size));
  background: red;

  width: fit-content;

  /* width: ${100 * 4 + 16 * 3}px; */
  margin: 10rem auto;
  grid-gap: 1rem;
`;

const boardItemSide = css`
  background: orange;

  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const S_BoardItemFront = styled.div`
  ${boardItemSide};
  color: white;
`;

export const S_BoardItemBack = styled.div`
  ${boardItemSide};
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
`;

export const S_BoardItemSubcontainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

export const S_BoardItemContainer = styled.div`
  background-color: transparent;
  width: var(--card-size);
  height: var(--card-size);
  perspective: 1500px;

  :hover ${S_BoardItemSubcontainer} {
    transform: rotateY(180deg);
  }
`;
