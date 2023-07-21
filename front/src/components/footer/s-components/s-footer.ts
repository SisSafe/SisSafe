import styled from 'styled-components';
import Image from 'next/image'
import { EMediaQuery } from 'utils/Enums';

export const SMainWrapperFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.deepBlue};
  height: 180px;
  padding: 40px 95px;
  @media(max-width:${EMediaQuery.md}) {
    padding: 20px 40px;
  }
`;

export const SImageHeader = styled(Image)`
  width: 190px;
  height: 48px;
`;