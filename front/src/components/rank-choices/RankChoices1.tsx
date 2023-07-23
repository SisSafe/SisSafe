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


export const RankChoices1: React.FC<IRankChoices> = ({ rank, openChoice, setOpenChoice, setOpportunity, opportunity }) => {
  const [selectedButtons, setSelectedButtons] = useState<ButtonState>({
    polygon: null,
    gnosis: null,
    // Add more questions here
  });

  const handleButtonClick = (question: string, buttonName: 'Yes' | 'No') => {
    setSelectedButtons(prev => ({ ...prev, [question]: buttonName }));
  };

  const selectClient = (arg: number) => {
    setOpportunity(arg)
    setOpenChoice(!openChoice)
  }

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
                <BlockSize size='100%' onClick={() => setOpportunity(1)}>
                  <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullwidth>
                    <OText weight={ETextWeight.bold} size={ESize.ml}>Vote proposals</OText>
                    <BsArrowRightShort />
                  </Flex>
                </BlockSize>
                <BlockSize size='100%' onClick={() => setOpportunity(2)}>
                  <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullwidth>
                    <OText weight={ETextWeight.bold} size={ESize.ml}>Claim airdrop</OText>
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
              {Object.keys(selectedButtons).map((question, index) => (
                <CardExpend title={`Should Melon deploy on ${question}?`} key={index}>
                  <Column>
                    <Spacing size={ESize.s} />
                    <Gap onClick={handleChildClick} center>
                      <OButton onClick={() => handleButtonClick(question, 'Yes')} selected={selectedButtons[question] === 'Yes'}>Yes</OButton>
                      <OButton onClick={() => handleButtonClick(question, 'No')} selected={selectedButtons[question] === 'No'}>No</OButton>
                    </Gap>
                    <Gap onClick={handleChildClick} center>
                      {/* <Input placeholder='amount' />
                      <OButton>$MELON</OButton> */}
                      <OText weight={ETextWeight.bold} size={ESize.m}>Your weight: 100 $MELON</OText>
                    </Gap>
                  </Column>
                </CardExpend>
              ))}
              <OButton>Submit</OButton>
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
                <OText>Claim</OText>
                <Spacing size={ESize.s} />
                <Gap onClick={handleChildClick} center>
                  <OButton>100 $MELON</OButton>
                </Gap>
              </Column>
            </Card>
          </Card>
      }
    </>
  )
}

export default RankChoices1