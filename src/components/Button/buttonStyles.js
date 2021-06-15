import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 0;
  background-color: ${({ color = 'info' }) => `var(--${color})`};
  cursor: pointer;
  color: #fff;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
  margin: 1rem 0;

  :not(:hover) {
    opacity: 0.9;
  }

  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.6;
          cursor: not-allowed;
        `
      : css`
          :active {
            transform: scale(0.98);
          }
        `}
`;
