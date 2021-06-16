import styled, { css } from 'styled-components';
import { TURN_DURATION } from '../../hooks/useTime';

export const S_PlayersContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const S_PlayerItem = styled.div`
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  border-radius: 0.5rem;

  ${({ color }) =>
    css`
      border: 4px solid ${color};
    `}

  ${({ active, time }) => {
    const percentage = (time * 100) / TURN_DURATION;
    return (
      active &&
      css`
        background-image: linear-gradient(
          to top,
          #33aa3377 ${percentage}%,
          transparent ${percentage + 0.5}%
        );
      `
    );
  }}
`;

export const S_PlayerItemName = styled.p`
  font-size: 1.3em;
`;
export const S_PlayerItemPoints = styled.p`
  font-size: 1em;
  margin-top: 0.5em;
`;

export const S_PlayersVs = styled.p`
  margin: 0 2rem;
  font-weight: 900;
`;
