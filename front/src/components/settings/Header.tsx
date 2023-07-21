import React from 'react'
import styled from 'styled-components';
import { OText } from 'components/library/OText';
import { ESize, ETextAlign, ETextColor, ETextWeight, ETextType } from 'utils/Enums';
import { Flex } from "components/library/Flex"
import { EFlex } from "utils/Enums"
import { BlockSize } from 'components/library/utils';

interface HeaderProps {
  handleTab: ({ num }: { num: number }) => void;
  tab: number;
}

interface BoxProps {
  tab: number;
  num: number
}

const Wrapper = styled.div`
  display: flex;
  gap: 18px;
`;

const Box = styled.div<BoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  cursor: pointer;
  border-bottom: ${({ tab, num }) => tab === num ? '2px solid rgba(29, 34, 45, 1)' : 'none'};
`;

const Header: React.FC<HeaderProps> = ({ handleTab, tab }) => {
  return (
    <Wrapper>
      <Box num={0} tab={tab} onClick={() => handleTab({ num: 0 })}>
        <OText textColor={tab === 0 ? ETextColor.normal : ETextColor.gray} size={ESize.mm}>Account</OText>
      </Box>
      <Box num={1} tab={tab} onClick={() => handleTab({ num: 1 })}>
        <OText textColor={tab === 1 ? ETextColor.normal : ETextColor.gray} size={ESize.mm}>Notification</OText>
      </Box>
    </Wrapper>
  )
}

export default Header