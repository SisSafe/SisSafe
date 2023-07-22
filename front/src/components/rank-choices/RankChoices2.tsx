import React, { useState } from 'react'
import { ETextAlign, ETextColor, ESize, ETextType, ETextWeight } from "../../utils/Enums"
import styled from 'styled-components'
import { OText } from 'components/library/OText'
import { EMediaQuery } from 'utils/Enums';
import { Card } from 'components/library/Card'
import { Spacing } from "../library/Spacing"
import { OButton } from 'components/library/OButton'
import { CardExpend } from 'components/library/CardExpend';
import { Column, Gap } from 'components/library/Gap';
import { Input } from 'components/library/Input';
import { Flex } from 'components/library/Flex';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import { EFlex } from "utils/Enums"
import { BlockSize } from 'components/library/utils';

interface IRankChoices {
  rank: string;
  setOpenChoice: (value: any) => void;
  setOpportunity: (value: any) => void;
  openChoice: boolean;
  opportunity: number;
}

const ColLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.m};
  @media(max-width:${EMediaQuery.md}) {
    gap: ${({ theme }) => theme.spacing['3xs']};
  }
`

const ColRight = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing['3xs']};
  @media(max-width:${EMediaQuery.md}) {
    flex-direction: column;
  }
`

const Relative = styled.div`
  position: relative;
`;

interface SelectorProps {
  right?: string;
  width?: string;
  top?: string;

}
const Selector = styled.div<SelectorProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: ${({ right }) => right || '-120px'};
  top: ${({ top }) => top || '55%'};
  width: ${({ width }) => width || '110px'};
  background-color: #FFF;
  border: none;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  z-index: 2;
`

interface ClientProps {
  disabled?: boolean;
}

const Client = styled.div<ClientProps>`
  transition: 0.2s;
  padding: 10px;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? '#D3D3D3' : 'white')};
  &:hover {
    background-color: ${({ theme, disabled }) => (disabled ? '#FFF' : theme.colors.primary)};
    p {
      color: #FFF;
    }
  }
`;

interface ButtonState {
  [key: string]: 'Yes' | 'No' | null;
}


export const RankChoices2: React.FC<IRankChoices> = ({ rank, openChoice, setOpenChoice, setOpportunity, opportunity }) => {

  const handleChildClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {opportunity === 0 ?
        <Card anim>
          <OText textAlign={ETextAlign.center}>
            Your rank: <OText type={ETextType.span} textColor={ETextColor.orange} size={ESize.m}>{rank}</OText>
          </OText>
          <Spacing size={ESize.s} />
          <OText textAlign={ETextAlign.left}>
            What would you like to do?
          </OText>
          <Spacing size={ESize.s} />
          <Relative>
            <Card>
              <OText>Options</OText>
              <Spacing size={ESize.s} />
              <Column onClick={handleChildClick} gapSize='30px'>
                <BlockSize style={{ cursor: 'pointer' }} size='100%' onClick={() => setOpportunity(1)}>
                  <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullwidth>
                    <OText weight={ETextWeight.bold} size={ESize.ml}>Distribute airdrop</OText>
                    <BsArrowRightShort />
                  </Flex>
                </BlockSize>
                <BlockSize style={{ cursor: 'pointer' }} size='100%' onClick={() => setOpportunity(2)}>
                  <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullwidth>
                    <OText weight={ETextWeight.bold} size={ESize.ml}>Upgrade rank</OText>
                    <BsArrowRightShort />
                  </Flex>
                </BlockSize>
              </Column>
            </Card>
          </Relative>
        </Card>
        : opportunity === 1 ?
          <Card anim>
            <Gap style={{ cursor: 'pointer' }} onClick={() => setOpportunity(0)}>
              <BsArrowLeftShort />
              <OText weight={ETextWeight.bold} size={ESize.m}>Previous</OText>
            </Gap>
            <Spacing size={ESize.s} />
            <Column>
              <OText>Distribute</OText>
              <Gap onClick={handleChildClick} center>
                <Input placeholder='distribute airdrop' />
                <OButton>$MELON</OButton>
              </Gap>
            </Column>
          </Card>
          :
          <Card anim>
            <Gap style={{ cursor: 'pointer' }} onClick={() => setOpportunity(0)}>
              <BsArrowLeftShort />
              <OText weight={ETextWeight.bold} size={ESize.m}>Previous</OText>
            </Gap>
            <Spacing size={ESize.s} />
            <Card>
              <Column>
                <OText>Upgrade</OText>
                <Spacing size={ESize.s} />
                <Gap onClick={handleChildClick} center>
                  <OButton>Upgrade my rank</OButton>
                </Gap>
              </Column>
            </Card>
          </Card>
      }
    </>
  )
}

export default RankChoices2