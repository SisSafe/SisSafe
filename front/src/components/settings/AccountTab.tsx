import React from 'react'
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


const AccountTab: React.FC = () => {
  return (
    <Column gapSize='30px'>
      <OText textColor={ETextColor.normal} size={ESize.mm}>Email</OText>
      <BlockSize size='617px'>
        <Input size='100%' placeholder='Enter email' />
      </BlockSize>
      <BlockSize size='142px'>
        <OButton disabled>Save Settings</OButton>
      </BlockSize>
    </Column>
  )
}

export default AccountTab