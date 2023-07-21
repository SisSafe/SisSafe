import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Spacing } from './Spacing'
import { ESize, ETextColor, ETextWeight, EFlex } from 'utils/Enums'
import { OText } from './OText';
import expendIcon from '../../assets/images/expendIcon.png'
import Image from 'next/image'
import { Flex } from './Flex';

interface CardProps {
  onClick?: () => void;
  title: string;
  children?: React.ReactNode;
}

const slideOutAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const slideInAnimation = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgTransparent};
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  width: 100%;
  cursor: pointer;
`;

const GapContainer = styled.div<{ isExpanded: boolean }>`
  max-height: ${({ isExpanded }) => (isExpanded ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height .5s ease-in-out;
  overflow: hidden;
`;

const GapContent = styled.div`
  /* Gap content styles */
`;

const SImage = styled(Image) <{ isExpanded: boolean }>`
  transition: transform 0.5s ease; /* Add a smooth transition effect */
  
  ${(props) =>
    props.isExpanded &&
    css`
      transform: rotate(180deg);
    `}
`;

export const CardExpend: React.FC<CardProps> = ({ onClick, title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    if (onClick) {
      onClick();
    }
  };

  return (
    <CardContainer onClick={handleClick}>
      <Flex horizontal={EFlex.between} vertical={EFlex.center}>
        <OText textColor={ETextColor.gray} size={ESize.l} weight={ETextWeight.bold}>{title}</OText>
        <SImage src={expendIcon} alt='Melon' isExpanded={isExpanded} />
      </Flex>
      <GapContainer isExpanded={isExpanded}>
        <GapContent>
          {children}
        </GapContent>
      </GapContainer>
    </CardContainer>
  );
};