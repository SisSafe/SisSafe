import styled from 'styled-components';
import { EMediaQuery } from 'utils/Enums';

interface GapProps {
  gapSize?: string;
  center?: boolean;
  collapse?: boolean;
}

export const Gap = styled.div<GapProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme, gapSize }) => gapSize ? gapSize : theme.spacing['3xs']};
  justify-content: ${({ center }) => (center ? 'center' : 'none')};
  @media(max-width:${EMediaQuery.md}) {
    flex-direction: ${({ collapse }) => (collapse ? 'column' : 'none')};
  }
`;

export const Column = styled.div<GapProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, gapSize }) => gapSize ? gapSize : theme.spacing['3xs']};
  align-items: ${({ center }) => (center ? 'center' : 'none')};
`