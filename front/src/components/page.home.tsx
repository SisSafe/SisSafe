import Head from 'next/head'
import styled from 'styled-components';
import { useState } from "react";
import { OButton } from './library/OButton';
import { OText } from './library/OText';
import { EBackgroundColor, ESize, ETextAlign, ETextColor, ETextWeight, ETextType } from '../utils/Enums';
import Header from './header'
import Footer from './footer';
import { Input } from './library/Input';
import { Flex } from "./library/Flex"
import { Spacing } from "./library/Spacing"
import { EFlex } from "../utils/Enums"
import { SismoConnectButton, AuthType, SismoConnectConfig, SismoConnectResponse, Vault } from "@sismo-core/sismo-connect-react";
import { encodeAbiParameters } from "viem";
import { useAccount } from "wagmi";
import { UserContext } from "context";
import { useContext } from "react";
import VaultDoor from './library/Vault';
import { Card } from './library/Card';
import { Gap } from './library/Gap';

const config: SismoConnectConfig = {
  // you will need to get an appId from the Factory
  appId: "0x4b23209e82c689fad20b91d2331e6668",
  // vault: {
  //   // For development purposes insert the Data Sources that you want to impersonate
  //   // Never use this in production
  //   impersonate: [
  //     //glenn
  //     "0xDD2b3f1d3a4f08622a25a3f75284fC01ad0c5CcA",
  //     //jb
  //     "0x86AE120DFf0967Fdb20ADa7629976A759A6FdEdf",
  //     //simo
  //     "0x9090A5d516f2054007bD184caf55760B51fcFBfD",
  //     //lougel
  //     "0x1EC75BaBD4CDe5Fe58D7268bb3F2C34B534F8d81",
  //   ],
  // },
}
interface IHomePage { }
interface IWrapperProps {
  connected?: boolean;
}


const SMainWrapper = styled.div<IWrapperProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  background-color: ${({ connected, theme }) => connected ? theme.colors.deepBlue : 'none'};
`;

const Wrapper = styled.div`
  position: relative;
  padding: 30px 0px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const signMessage = (account: string) => {
  return encodeAbiParameters(
    [{ type: "address", name: "airdropAddress" }],
    [account as `0x${string}`]
  );
};


export const PageHome: React.FC<IHomePage> = () => {
  const { setData, data } = useContext(UserContext);
  const { address: account, isConnected } = useAccount();
  const [res, setRes] = useState<SismoConnectResponse>()

  console.log(res)
  console.log(data)

  return (
    <>
      <Head>
        <title>Melon</title>
        <meta name="description" content="Melon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SMainWrapper connected={data ? true : false}>
        <Header />
        <Flex direction={EFlex.column} horizontal={EFlex.center} vertical={EFlex.center}>
          <Spacing size={ESize.s} />
          {!data ?
            <OText size={ESize.xl} weight={ETextWeight.bold} >Welcome to <OText type={ETextType.span} textColor={ETextColor.orange} size={ESize.m}>Melon</OText></OText>
            :
            <OText size={ESize.xl} weight={ETextWeight.bold} textColor={ETextColor.white}>Welcome to your <OText type={ETextType.span} textColor={ETextColor.orange} size={ESize.m}>Vault</OText></OText>
          }
          <Wrapper>
            {!data ? <VaultDoor /> : <VaultDoor reverse />}
            <ButtonWrapper>
              {isConnected && !data ?
                <SismoConnectButton

                  // the client config created
                  config={config}
                  // request a proof of account ownership 
                  // (here Vault ownership)
                  auth={{ authType: AuthType.VAULT }}
                  // request a proof of group membership 
                  // (here the group with id 0x42c768bb8ae79e4c5c05d3b51a4ec74a)
                  claim={{ groupId: "0xcaa596ba15aabc88ff17c89b6f94d3ef" }}
                  // request a message signature
                  signature={{ message: signMessage(account as string) }}
                  //  a response containing his proofs 
                  onResponse={async (response: SismoConnectResponse) => {
                    setRes(response)
                    //Send the response to your server to verify it
                    //thanks to the @sismo-core/sismo-connect-server package
                  }}
                  onResponseBytes={(responseBytes: string) => setData(responseBytes)}
                /> :

                data ?
                  <Card anim>
                    <OText textAlign={ETextAlign.center}>
                      You are connected with
                      <OText type={ETextType.span} textColor={ETextColor.orange} size={ESize.m}>Sismo</OText>
                      .
                    </OText>
                    <Spacing size={ESize.s} />
                    <OText textAlign={ETextAlign.center}>
                      Your rank: <OText type={ETextType.span} textColor={ETextColor.orange} size={ESize.m}>4</OText>
                    </OText>
                    <Spacing size={ESize.s} />
                    <Gap>
                      <Input placeholder='price' />
                      <OButton>Submit</OButton>
                    </Gap>
                  </Card>
                  :
                  <>
                    <OText textAlign={ETextAlign.center}>
                      Please connect with metamask.
                    </OText>
                  </>
              }
            </ButtonWrapper>
          </Wrapper>
        </Flex>
        <Footer />
      </SMainWrapper>
    </>
  )
}