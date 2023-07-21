import Head from 'next/head'
import styled from 'styled-components';
import { useState } from "react";
import { OButton } from './library/OButton';
import { OText } from './library/OText';
import { EBackgroundColor, ESize, ETextColor, ETextWeight } from '../utils/Enums';
import Header from './header'
import Footer from './footer';
import { Input } from './library/Input';
import { Flex } from "./library/Flex"
import { Spacing } from "./library/Spacing"
import { EFlex } from "../utils/Enums"
import backgroundImage from "../assets/images/background.png"
import Image from 'next/image'
import { Gap } from 'components/library/Gap';
import { SismoConnectButton, AuthType, SismoConnectConfig, SismoConnectResponse } from "@sismo-core/sismo-connect-react";

const config: SismoConnectConfig = {
  // you will need to get an appId from the Factory
  appId: "0xcaa596ba15aabc88ff17c89b6f94d3ef",
  vault: {
    // For development purposes insert the Data Sources that you want to impersonate
    // Never use this in production
    impersonate: [
      //glenn
      "0xDD2b3f1d3a4f08622a25a3f75284fC01ad0c5CcA",
      //jb
      "0x8A683aE51345cE00AE06F1bd30cCF8d4A4E5502c",
      //jb
      "0x86AE120DFf0967Fdb20ADa7629976A759A6FdEdf",
    ],
  },
  displayRawResponse: true,
}
interface IHomePage { }

const SMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
`;

const SImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  
`

export const PageHome: React.FC<IHomePage> = () => {
  return (
    <>
      <Head>
        <title>Amphor</title>
        <meta name="description" content="Amphor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SMainWrapper>
        <SImage src={backgroundImage} alt='bg' />
        <Header />
        <Flex direction={EFlex.column} horizontal={EFlex.center} vertical={EFlex.center}>
          <OText size={ESize.xl} weight={ETextWeight.bold}>
            We're launching soon
          </OText>
          <Spacing size={ESize.xs} />
          <OText size={ESize.m} weight={ETextWeight.bold} textColor={ETextColor.gray}>
            Sign up to stay in the loop!
          </OText>
          <Spacing size={ESize.l} />

          <SismoConnectButton
            // the client config created
            config={config}
            // request a proof of account ownership 
            // (here Vault ownership)
            auth={{ authType: AuthType.VAULT }}
            // request a proof of group membership 
            // (here the group with id 0x42c768bb8ae79e4c5c05d3b51a4ec74a)
            claim={{ groupId: "0x4b23209e82c689fad20b91d2331e6668" }}
            // request a message signature
            signature={{ message: "Your message" }}
            //  a response containing his proofs 
            onResponse={async (response: SismoConnectResponse) => {
              //Send the response to your server to verify it
              //thanks to the @sismo-core/sismo-connect-server package
            }}
            onResponseBytes={async (bytes: string) => {
              //Send the response to your contract to verify it
              //thanks to the @sismo-core/sismo-connect-solidity package
            }}
          />
        </Flex>
        <Footer />
      </SMainWrapper>
    </>
  )
}