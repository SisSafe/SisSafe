import React, { useState } from 'react'
import styled from 'styled-components';
import { OText } from 'components/library/OText';
import { ESize, ETextAlign, ETextColor, ETextWeight, ETextType } from 'utils/Enums';
import { Flex } from "components/library/Flex"
import { EFlex } from "utils/Enums"
import { BlockSize } from 'components/library/utils';
import { Wrapper } from './s-components';
import { Input } from 'components/library/Input';
import { Spacing } from "components/library/Spacing"
import { Column } from 'components/library/Gap';
import { OButton } from 'components/library/OButton';
import { Card } from 'components/library/Card';
import { Slider, HiddenInput, Switch } from './s-components'

const NotificationsTab: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <Column gapSize='30px'>
      <Card paddingSize='20px'>
        <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullWidth>
          <OText weight={ETextWeight.bold}>Vaults</OText>
          <Switch onClick={() => setIsChecked(!isChecked)}>
            <HiddenInput type="checkbox" />
            <Slider checked={isChecked} focus></Slider>
          </Switch>
        </Flex>
      </Card>
      <Card paddingSize='20px'>
        <OText weight={ETextWeight.bold}>Strategy Performance</OText>
      </Card>
      <Card paddingSize='20px'>
        <OText weight={ETextWeight.bold}>Product Updates</OText>
      </Card>
    </Column>
  )
}

export default NotificationsTab