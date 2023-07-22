import styled from 'styled-components';
import { EMediaQuery } from 'utils/Enums';

interface SizeProps {
  size?: string;
}

export const Input = styled.input<SizeProps>`
  border: 1px solid ${(p) => p.theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.m};
  width: ${({ theme, size }) => size ? size : '326px'};
  height: 50px;
  padding: ${({ theme }) => theme.spacing.xs};
  color: ${(p) => p.theme.colors.primary};
  &::placeholder {
    color: ${(p) => p.theme.colors.primary};
    font-size: ${(p) => p.theme.fontSize.m};
  }
  @media(max-width:${EMediaQuery.md}) {
    width: ${({ theme, size }) => size ? size : '200px'};
  }
`