import React, { useState } from 'react'
import { ETextAlign, ETextColor, ESize, ETextType } from "../../utils/Enums"
import styled from 'styled-components'
import { OText } from 'components/library/OText'
import { EMediaQuery } from 'utils/Enums';
import { Card } from 'components/library/Card'
import { Spacing } from "../library/Spacing"
import { OButton } from 'components/library/OButton'
import { CardExpend } from 'components/library/CardExpend';
import { Column, Gap } from 'components/library/Gap';

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


export const RankChoices: React.FC<IRankChoices> = ({ rank, openChoice, setOpenChoice, setOpportunity, opportunity }) => {

  const selectClient = (arg: number) => {
    setOpportunity(arg)
    setOpenChoice(!openChoice)
  }

  const handleChildClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
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
        <OButton onClick={() => setOpenChoice(!openChoice)}>Select</OButton>
        {openChoice &&
          <Selector top='10%' right="50px" width="300px">
            <Client onClick={() => selectClient(1)}>
              <OText>
                Vote on proposal
              </OText>
            </Client>
          </Selector>
        }
      </Relative>

      <Spacing size={ESize.s} />
      {opportunity === 1 &&
        <Column>
          <CardExpend title='Should Melon deploy on Polygon?'>
            <Spacing size={ESize.s} />
            <Gap onClick={handleChildClick} center>
              <OButton>Yes</OButton>
              <OButton>No</OButton>
            </Gap>
          </CardExpend>
          <CardExpend title='Should Melon deploy on Gnosis?'>
            <Spacing size={ESize.s} />
            <Gap onClick={handleChildClick} center>
              <OButton>Yes</OButton>
              <OButton>No</OButton>
            </Gap>
          </CardExpend>
        </Column>
      }
    </Card>
  )
}

export default RankChoices