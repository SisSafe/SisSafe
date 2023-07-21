import React from 'react'
import styled from 'styled-components';
import { OText } from 'components/library/OText';
import { ESize, ETextAlign, ETextColor, ETextWeight, ETextType } from 'utils/Enums';
import { Flex } from "components/library/Flex"
import { EFlex } from "utils/Enums"
import { BlockSize, SeparatorVertical } from 'components/library/utils';
import logoUSDC from "../../assets/images/usdc.png"
import TokenComponent from 'components/library/TokenComponent';
import WithdrawComponent from 'components/history-transaction/s-components/WithdrawComponent';

interface TokenProps {
  deposit?: boolean;
}

const index: React.FC<TokenProps> = ({ deposit }) => {
  return (
    <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullWidth>
      <BlockSize size='25%'>
        <TokenComponent imageUrl={logoUSDC} text='USDC' sizeImg='14' start />
      </BlockSize>
      <BlockSize size='25%'>
        <WithdrawComponent deposit={deposit} />
      </BlockSize>
      <BlockSize size='25%'>
        <OText textColor={ETextColor.gray} size={ESize.s}>$15,321.5</OText>
      </BlockSize>
      <BlockSize size='25%'>
        <OText textColor={ETextColor.gray} size={ESize.s}>15.08.23</OText>
      </BlockSize>
    </Flex>
  )
}

export default index