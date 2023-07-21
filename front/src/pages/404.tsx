import Head from 'next/head'
import styled from 'styled-components';
import { OButton } from '../components/library/OButton';
import { OText } from '../components/library/OText';
import { ESize, ETextAlign, ETextColor, ETextWeight } from '../utils/Enums';
import Header from '../components/header'
import Footer from '../components/footer';
import { Flex } from "../components/library/Flex"
import { Spacing } from "../components/library/Spacing"
import { EFlex } from "../utils/Enums"
import { Gap } from 'components/library/Gap';

const SMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  overflow: hidden;
`;

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Amphor</title>
        <meta name="description" content="Amphor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SMainWrapper>
        <Header />
        <Flex direction={EFlex.column} horizontal={EFlex.center} vertical={EFlex.center}>
          <OText size={ESize.xl} weight={ETextWeight.bold}>
            Ooopsy...
          </OText>
          <Spacing size={ESize.xs} />
          <OText size={ESize.m} weight={ETextWeight.bold} textColor={ETextColor.gray}>
            Client Error. Try reloading this page
          </OText>
          <Spacing size={ESize.l} />
          <Gap>
            <OButton>
              Try again
            </OButton>
            <OButton secondary>
              Disconnect
            </OButton>
          </Gap>
        </Flex>
        <Footer />
      </SMainWrapper>
    </>
  )
}