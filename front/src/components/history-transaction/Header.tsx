import React from 'react'
import { OText } from 'components/library/OText';
import { ESize, ETextAlign, ETextColor, ETextWeight, ETextType } from 'utils/Enums';
import { Flex } from "components/library/Flex"
import { EFlex } from "utils/Enums"
import { BlockSize } from 'components/library/utils';


const index: React.FC = () => {
  return (
    <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullwidth>
      <BlockSize size='25%'>
        <OText textColor={ETextColor.gray} size={ESize.mm}>Strategy</OText>
      </BlockSize>
      <BlockSize size='25%'>
        <OText textColor={ETextColor.gray} size={ESize.mm}>Transaction</OText>
      </BlockSize>
      <BlockSize size='25%'>
        <OText textColor={ETextColor.gray} size={ESize.mm}>Amount</OText>
      </BlockSize>
      <BlockSize size='25%'>
        <OText textColor={ETextColor.gray} size={ESize.mm}>Date</OText>
      </BlockSize>
    </Flex>
  )
}

export default index