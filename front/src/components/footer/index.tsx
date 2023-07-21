import React from 'react'
import { SMainWrapperFooter, SImageHeader } from './s-components/s-footer'
import AmphorLogo from '../../assets/images/amphorLogoLight.png'
import { Flex } from 'components/library/Flex'
import { EFlex, ETextColor, ESize } from "../../utils/Enums"
import styled from 'styled-components'
import { OText } from 'components/library/OText'
import { BsDiscord, BsTwitter } from 'react-icons/bs';
import { BiLogoTelegram } from 'react-icons/bi';
import { EMediaQuery } from 'utils/Enums';

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
`


const CardLogo = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing['3xs']};
  background-color: ${(p) => p.theme.colors.primary};
	border-radius: ${({ theme }) => theme.radius.m};
  height: 40px;
  width: 40px;
  cursor: pointer;
  @media(max-width:${EMediaQuery.md}) {
    height: 40px;
    width: 40px
  }
`


function Footer() {
  return (
    <SMainWrapperFooter>
      <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullWidth>
        <ColLeft>
          <SImageHeader src={AmphorLogo} alt='Amphor' />
          <OText textColor={ETextColor.white} size={ESize.m}>© 2023 Amphor</OText>
        </ColLeft>
      </Flex >
    </SMainWrapperFooter>
  )
}

export default Footer