import React from 'react'
import styled from 'styled-components';
import { OText } from 'components/library/OText';
import { ESize, ETextAlign, ETextColor, ETextWeight, ETextType } from 'utils/Enums';
import { Flex } from "components/library/Flex"
import { EFlex } from "utils/Enums"
import { BlockSize, SeparatorVertical } from 'components/library/utils';
import Header from './Header'
import { Card } from 'components/library/Card';

interface HistoryProps {
  epoch?: string;
  date?: string;
  performance?: string;
}

const index: React.FC<HistoryProps> = ({ epoch, date, performance }) => {
  return (
    <Card paddingSize='10px' backgroundColor='#E9F1F9'>
      <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullWidth>
        <BlockSize size='33%'>
          <OText weight={ETextWeight.bold} size={ESize.s}>{epoch}</OText>
        </BlockSize>
        <BlockSize size='33%'>
          <OText weight={ETextWeight.bold} size={ESize.s}>{date}</OText>
        </BlockSize>
        <BlockSize size='25%'>
          <OText weight={ETextWeight.bold} size={ESize.s}>{performance}</OText>
        </BlockSize>
      </Flex>
    </Card>
  )
}

export default index