import Head from 'next/head'
import { OButton } from 'components/library/OButton';
import { OText } from 'components/library/OText';
import { ESize, ETextAlign, ETextColor, ETextWeight } from 'utils/Enums';
import Header from 'components/header'
import Footer from 'components/footer';
import { Flex } from "components/library/Flex"
import { Spacing } from "components/library/Spacing"
import { EFlex } from "utils/Enums"
import { Gap, Column } from 'components/library/Gap';
import { SMainWrapper, Wrapper } from './s-components';
import HeaderNav from './Header'
import AccountTab from './AccountTab'
import { useState } from 'react';
import NotificationsTab from './NotificationsTab';


export const PageSettings: React.FC = () => {
  const [tab, setTab] = useState(0);

  const handleTab = ({ num }: { num: number }) => {
    setTab(num)
  }
  return (
    <>
      <Head>
        <title>Melon</title>
        <meta name="description" content="Melon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SMainWrapper>
        <Header />
        <Wrapper>
          <Spacing size={ESize.l} />
          <OText size={ESize.xl} weight={ETextWeight.bold}>
            Settings
          </OText>
          <Spacing size={ESize.l} />
          <HeaderNav handleTab={handleTab} tab={tab} />
          <Spacing size={ESize.l} />
          {tab === 0 ?
            <AccountTab />
            :
            <NotificationsTab />
          }
        </Wrapper>
        <Footer />
      </SMainWrapper>
    </>
  )
}