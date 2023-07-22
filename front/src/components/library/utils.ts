import styled from 'styled-components';
import { EMediaQuery } from 'utils/Enums';

interface SizeProps {
  size?: string;
  maxWidth?: string;
  smSize?: string;
}

export const BlockSize = styled.div <SizeProps>`
  width: ${({ size }) => size ? size : '40%'};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'none')};
  @media(max-width:${EMediaQuery.md}) {
    width: ${({ smSize, size }) => (smSize ? smSize : size)};
  }
`

export const Token = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing['3xs']};
`

export const SeparatorVertical = styled.div`
  border-left: ${({ theme }) => `1px solid ${theme.colors.lightBlue}`};
  height: 40px;
`
