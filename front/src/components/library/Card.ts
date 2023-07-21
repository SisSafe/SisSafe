import styled, { css } from 'styled-components';

interface CardProps {
  backgroundColor?: string;
  paddingSize?: string;
  isDisabled?: boolean; // New prop for disabling/enabling opacity
}

export const Card = styled.div<CardProps>`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.colors.bgTransparent};
  padding: ${({ theme, paddingSize }) => paddingSize || '27px'};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  width: 100%;

  /* Apply opacity when isDisabled is true */
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      img, p {
            opacity: 0.3;
      }
    `}
`;

export const CardSoon = styled.div`
  z-index: 2;
  background-color: #E9F1F9;
  padding: 8px;
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
`;