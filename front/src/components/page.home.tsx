import Head from 'next/head'
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { OButton } from './library/OButton';
import { OText } from './library/OText';
import { EBackgroundColor, ESize, ETextAlign, ETextColor, ETextWeight, ETextType } from '../utils/Enums';
import Header from './header'
import Footer from './footer';
import { Input } from './library/Input';
import { Flex } from "./library/Flex"
import { Spacing } from "./library/Spacing"
import { EFlex } from "../utils/Enums"
import { SismoConnectButton, AuthType, SismoConnectConfig, SismoConnectResponse, ClaimType } from "@sismo-core/sismo-connect-react";
import { encodeAbiParameters } from "viem";
import { useAccount, useContractRead } from "wagmi";
import { UserContext } from "context";
import { useContext } from "react";
import VaultDoor from './library/Vault';
import { Card } from './library/Card';
import { Column, Gap } from './library/Gap';
import { MELON_ADDRESS } from '../constants';
import { getContract } from '@wagmi/core'
import { melonABI } from 'abi/melonABI';
import melon from 'abi/melon.json';
import { readContract } from '@wagmi/core'
import { ethers } from "ethers";
import { useWalletClient } from 'wagmi'
import { BlockSize } from './library/utils';
import RankChoices1 from './rank-choices/RankChoices1';
import RankChoices2 from './rank-choices/RankChoices2';
import RankChoices3 from './rank-choices/RankChoices3';

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

const Relative = styled.div`
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface SelectorProps {
  right?: string;
  width?: string;
  top?: string;

}
const Selector = styled.div<SelectorProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: ${({ right }) => right || '-120px'};
  top: ${({ top }) => top || '55%'};
  width: ${({ width }) => width || '110px'};
  background-color: #FFF;
  border: none;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  z-index: 2;
`

interface ClientProps {
  disabled?: boolean;
}

const Client = styled.div<ClientProps>`
  transition: 0.2s;
  padding: 10px;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? '#D3D3D3' : 'white')};
  &:hover {
    background-color: ${({ theme, disabled }) => (disabled ? '#FFF' : theme.colors.primary)};
    p {
      color: #FFF;
    }
  }
`;

const signMessage = (account: string) => {
  return encodeAbiParameters(
    [{ type: "address", name: "airdropAddress" }],
    [account as `0x${string}`]
  );
};


export const PageHome: React.FC<IHomePage> = () => {
  const { setData, data, setMelonData, melonData, setRank, rank } = useContext(UserContext);
  const { address: account, isConnected } = useAccount();
  const [res, setRes] = useState<SismoConnectResponse>()
  const [open, setOpen] = useState(false)
  const [openChoice, setOpenChoice] = useState(false)
  const [opportunity, setOpportunity] = useState<number>(0)
  console.log('data', data)
  useEffect(() => {
    if (data) {
      try {
        const authentifyUser = async () => {
          //@ts-ignore
          const provider = new ethers.providers.Web3Provider(window?.ethereum);
          const contract = new ethers.Contract(
            MELON_ADDRESS,
            melonABI,
            provider.getSigner()
          );
          const result = await contract.melonAction(data, rank, account, 0, "0x0000000000000000000000000000000000000000000000000000000000000000");
          setMelonData(result)
        }
        Object.keys(melonData).length === 0 && authentifyUser()
      }
      catch (err: any) {
        console.log(err)
      }
    }

  }, [data, melonData])

  const selectClient = (arg: string) => {
    setRank(arg)
    setOpen(!open)
  }
  console.log('rank', rank)
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
          {Object.keys(melonData).length === 0 ?
            <OText size={ESize.xl} weight={ETextWeight.bold} >Welcome to <OText type={ETextType.span} textColor={ETextColor.orange} size={ESize.m}>Melon</OText></OText>
            :
            <OText size={ESize.xl} weight={ETextWeight.bold} textColor={ETextColor.white}>Welcome to your <OText type={ETextType.span} textColor={ETextColor.orange} size={ESize.m}>Vault</OText></OText>
          }
          <Spacing size={ESize.s} />

          {!data && isConnected &&
            <BlockSize size='50%'>
              <Card>
                <Relative>
                  <Column>
                    <Gap>
                      <BlockSize size='50%'>
                        <OText>
                          Select your {' '}
                          <OText type={ETextType.span} textColor={ETextColor.orange} size={ESize.m}>DAO</OText>
                        </OText>
                      </BlockSize>
                      <BlockSize size='50%'>
                        <OButton disabled customWidth='100%'>Melon DAO</OButton>
                      </BlockSize>
                    </Gap>
                    <Gap>
                      <BlockSize size='50%'>
                        <OText>
                          Set your {' '}
                          <OText type={ETextType.span} textColor={ETextColor.orange} size={ESize.m}>Melon</OText>
                        </OText>
                      </BlockSize>
                      <BlockSize size='50%'>
                        <OButton customWidth='100%' onClick={() => setOpen(!open)}>{rank}</OButton>
                      </BlockSize>
                    </Gap>
                  </Column>
                  {open &&
                    <Selector>
                      <Client onClick={() => selectClient('1')}>
                        <OText>
                          1
                        </OText>
                      </Client>
                      <Client onClick={() => selectClient('2')}>
                        <OText>
                          2
                        </OText>
                      </Client>
                      <Client onClick={() => selectClient('3')}>
                        <OText>
                          3
                        </OText>
                      </Client>
                    </Selector>
                  }
                </Relative>
              </Card>
            </BlockSize>

          }
          <Wrapper>
            {Object.keys(melonData).length === 0 ? <VaultDoor /> : <VaultDoor reverse />}
            <ButtonWrapper>
              {isConnected && Object.keys(melonData).length === 0 ?
                <>
                  <SismoConnectButton
                    config={config}
                    auth={{ authType: AuthType.EVM_ACCOUNT }}

                    claim={{ groupId: "0xcaa596ba15aabc88ff17c89b6f94d3ef", value: Number(rank) }}
                    // claim={{ groupId: "0xfe1413ffa36359541aeb8a4edea0ee4a", value: Number(rank) }}

                    signature={{ message: signMessage(account as string) }}
                    onResponse={async (response: SismoConnectResponse) => {
                      setRes(response)
                    }}
                    onResponseBytes={(responseBytes: string) => setData(responseBytes)}
                  />
                </>
                :
                data ?
                  <BlockSize size='500px'>
                    {rank === '1' ?
                      <RankChoices1 rank={rank} openChoice={openChoice} setOpenChoice={setOpenChoice} setOpportunity={setOpportunity} opportunity={opportunity} />
                      : rank === '2' ?
                        <RankChoices2 rank={rank} openChoice={openChoice} setOpenChoice={setOpenChoice} setOpportunity={setOpportunity} opportunity={opportunity} />
                        :
                        <RankChoices3 rank={rank} openChoice={openChoice} setOpenChoice={setOpenChoice} setOpportunity={setOpportunity} opportunity={opportunity} />
                    }
                  </BlockSize>
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