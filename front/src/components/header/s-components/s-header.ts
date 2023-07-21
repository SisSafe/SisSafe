import styled from 'styled-components';
import Image from 'next/image'
import { EMediaQuery } from 'utils/Enums';

export const SMainWrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 24px 60px;
  height: 80px;
  background-color: #FFF;
  @media(max-width:${EMediaQuery.md}) {
    padding: 24px 20px;
  }
`;


export const SImageHeader = styled(Image)`
  width: 132px;
  height: 32px;
`;

export const LeftCol = styled.div`
  display: flex;
  gap: 45px;
`;

export const RightCol = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Navigation = styled.div`
  display: flex;
  gap: 60px;
  align-items:center;
`;

