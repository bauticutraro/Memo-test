import styled, { css } from 'styled-components';

export const S_BoardContainer = styled.div`
  --card-size: 100px;

  display: grid;
  grid-template-columns: repeat(4, var(--card-size));
  /* background: red; */

  width: fit-content;
  margin: 10rem auto;
  grid-gap: 1rem;
`;

const boardItemSide = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

export const S_BoardItemFront = styled.div`
  ${boardItemSide};
`;

export const S_BoardItemBack = styled.div`
  ${boardItemSide};
  transform: rotateY(180deg);
`;

export const S_BoardItemSubcontainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

export const S_BoardItemContainer = styled.div`
  background-color: transparent;
  width: var(--card-size);
  height: var(--card-size);
  perspective: 1500px;

  ${({ show }) =>
    show &&
    css`
      ${S_BoardItemSubcontainer} {
        transform: rotateY(180deg);
      }
    `}
  ${({ isClickable }) =>
    isClickable &&
    css`
      cursor: pointer;
    `}
`;

// hidden image in the back side
export const S_BoardItemImage = styled.img`
  width: 100%;
`;
