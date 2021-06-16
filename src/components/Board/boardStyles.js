import styled, { css } from 'styled-components';

export const S_BoardContainer = styled.div`
  --card-size: 100px;

  display: grid;
  grid-template-columns: repeat(4, var(--card-size));
  grid-template-rows: repeat(5, var(--card-size));

  width: fit-content;
  margin: 3rem auto;
  grid-gap: 1rem;
`;

// item side
const boardItemSide = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  background-color: var(--light);
`;

export const S_BoardItemFront = styled.div`
  ${boardItemSide};
`;

export const S_BoardItemBack = styled.div`
  ${boardItemSide};
  transform: rotateY(180deg);

  ${({ color }) =>
    color &&
    css`
      border: 4px solid ${color};
    `}
`;

// item containers
export const S_BoardItemContainer = styled.div`
  background-color: transparent;
  width: var(--card-size);
  height: var(--card-size);
  perspective: 1500px;
  transition: all 0.5s ease;
  border-radius: 0.5rem;

  ${({ isClickable, reset }) =>
    reset
      ? css`
          transform: scale(0);
          transition-delay: 0.5s;
        `
      : isClickable &&
        css`
          cursor: pointer;
          :hover {
            transform: scale(1.05);

            ${S_BoardItemFront}, ${S_BoardItemBack} {
              box-shadow: 0 3px 16px rgba(0, 0, 0, 0.15);
            }
          }
        `}
`;

export const S_BoardItemSubcontainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;

  ${({ show }) =>
    show &&
    css`
      transform: rotateY(180deg);
    `}
`;

// hidden image in the back side
export const S_BoardItemImage = styled.img`
  width: 100%;
  user-select: none;
`;

export const S_ButtonContainer = styled.div``;

export const S_TimeText = styled.p`
  font-size: 2rem;
  color: var(--dark);
  margin-top: 2rem;
`;
