import React from 'react'
import { OText } from 'components/library/OText';
import { ESize, ETextAlign, ETextColor, ETextWeight, ETextType } from 'utils/Enums';
import { Flex } from "components/library/Flex"
import { EFlex } from "utils/Enums"
import { BlockSize } from 'components/library/utils';


const Header: React.FC = () => {
  return (
    <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullwidth>
      <BlockSize size='33%'>
        <OText textColor={ETextColor.gray} size={ESize.s}>Epoch</OText>
      </BlockSize>
      <BlockSize size='33%'>
        <OText textColor={ETextColor.gray} size={ESize.s}>Timeframe</OText>
      </BlockSize>
      <BlockSize size='25%'>
        <OText textColor={ETextColor.gray} size={ESize.s}>Return</OText>
      </BlockSize>
    </Flex>
  )
}

export default Header