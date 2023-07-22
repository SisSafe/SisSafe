import styled from 'styled-components';
import Image from 'next/image'
import { EMediaQuery } from 'utils/Enums';


interface IWrapperProps {
  connected?: boolean;
}
export const SMainWrapperHeader = styled.div<IWrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 24px 60px;
  height: 80px;
  background-color: #FFF;
  background-color: ${({ connected, theme }) => connected ? theme.colors.deepBlue : ' #FFF'};
  @media(max-width:${EMediaQuery.md}) {
    padding: 24px 20px;
  }
`;


export const SImageHeader = styled(Image)`
  width: 50px;
  height: 50px;
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

