'use client';
import React from 'react';
import styled from 'styled-components';
import { OButton } from '../components/library/OButton';
import { OText } from '../components/library/OText';
import { ESize, ETextAlign, ETextColor, ETextWeight } from '../utils/Enums';
import Header from '../components/header'
import Footer from '../components/footer';
import { Flex } from "../components/library/Flex"
import { Spacing } from "../components/library/Spacing"
import { EFlex } from "../utils/Enums"
import { Card } from "../components/library/Card"
import logoUSDC from "../assets/images/usdc.png"
import logoBTC from "../assets/images/btc.png"
import logoETH from "../assets/images/eth.png"
import { defaultTheme, lightTheme } from '../themes/theme'
import { Input } from 'components/library/Input';
import { EMediaQuery } from 'utils/Enums';
import { BiLogoTelegram } from 'react-icons/bi';
import { Gap, Column } from 'components/library/Gap';
import { BlockSize } from 'components/library/utils'
import TokenComponent from 'components/library/TokenComponent';
import SortByDates from 'components/library/SortByDates';
import { FiBell } from 'react-icons/fi';
import { CardExpend } from 'components/library/CardExpend';
import { Chart } from 'components/library/Chart';
import EpochHistory from "components/epoch-history"
import HeaderEpoch from "components/epoch-history/Header"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SortByDatesAccount from 'components/library/SortByDatesAccount';
import OpenComponent from 'components/library/OpenComponent';
import ProgressBar from "@ramonak/react-progress-bar";
import CardConnect from 'components/library/CardConnect';

const SMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  overflow: hidden;
`;

const Wrapper = styled.div`
  padding: 0px 160px;
  display: flex;
  justify-content: center;
  @media(max-width:${EMediaQuery.md}) {
    padding: 0px 20px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: start;
  gap: ${({ theme }) => theme.spacing.l};
  @media(max-width:${EMediaQuery.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.s};
  }
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
`

function Earn() {
  const handleDateChange = () => {
    console.log('hello')
  }

  const data = [
    {
      name: '12:00',
      pv: 2400,
    },
    {
      name: '16:00',
      pv: 1398,
    },
    {
      name: '18:00',
      pv: 9800,
    },
    {
      name: '20:00',
      pv: 3908,
    },
    {
      name: '22:00',
      pv: 4800,
    },
  ];

  const handleChildClick = (e: React.MouseEvent) => {
    console.log(' clicked');
    e.stopPropagation();
  };

  return (
    <>
      <SMainWrapper>
        <Header />
        <Wrapper>
          <BlockSize size='100%' maxWidth='1450px'>
            <Spacing size={ESize.l} />
            <OText size={ESize.xl} weight={ETextWeight.bold}>
              Earn
            </OText>
            <Spacing size={ESize.l} />

            <Content>
              <Col>
                {/* Card 1 */}
                <Card>
                  <OText textColor={ETextColor.gray} weight={ETextWeight.bold}>Asset</OText>
                  <Spacing size={ESize.xs} />

                  <Gap>
                    <OButton tertiary>
                      <Gap>
                        <TokenComponent imageUrl={logoUSDC} text='USDC' />
                      </Gap>
                    </OButton>
                    <OButton disabled>
                      <Gap>
                        <TokenComponent imageUrl={logoETH} text='ETH' isDisabled />
                      </Gap>
                    </OButton>
                    <OButton disabled>
                      <Gap>
                        <TokenComponent imageUrl={logoBTC} text='BTC' isDisabled />
                      </Gap>
                    </OButton>
                  </Gap>
                </Card>
                {/* Card 2 */}
                <Card style={{ zIndex: 1 }}>
                  <Column gapSize={defaultTheme.spacing.xs}>
                    <Gap>
                      <BlockSize size="50%">
                        <OButton tertiary customWidth='100%'>
                          Deposit
                        </OButton>
                      </BlockSize>
                      <BlockSize size="50%">
                        <OButton disabled customWidth='100%'>
                          Withdraw
                        </OButton>
                      </BlockSize>
                    </Gap>
                    <Card backgroundColor={lightTheme.colors.lightBlue} paddingSize='20px'>
                      <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullWidth>
                        <Column>
                          <OText textColor={ETextColor.gray} size={ESize.xs}>Token</OText>
                          <TokenComponent imageUrl={logoUSDC} text='USDC' />
                        </Column>
                        <Column>
                          <OText textColor={ETextColor.gray} size={ESize.xs}>Balance: $33,451</OText>
                          <OText weight={ETextWeight.bold} size={ESize.ml}>$13,434,444</OText>
                        </Column>
                      </Flex>
                    </Card>
                    <Card paddingSize='12px'>
                      <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullWidth>
                        <OText textColor={ETextColor.gray} size={ESize.xs}>Gas Fees</OText>
                        <Gap>
                          <OText textColor={ETextColor.gray} size={ESize.xs}>0.032 ETH</OText>
                          <OText size={ESize.xs} weight={ETextWeight.bold}>$44.32</OText>
                        </Gap>
                      </Flex>
                    </Card>
                    <OButton>Deposit</OButton>

                  </Column>
                </Card>
                <Card backgroundColor={lightTheme.colors.typoButton} style={{ marginTop: '-35px' }}>
                  <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullWidth>
                    <SortByDates onChange={handleDateChange} />
                    <Gap>
                      <OText size={ESize.s} textColor={ETextColor.gray}>Expected Returns:</OText>
                      <OText size={ESize.ml} weight={ETextWeight.bold}>$1,431</OText>
                    </Gap>
                  </Flex>
                </Card>

                {/* Card 3 */}
                <Card backgroundColor={lightTheme.colors.primary}>
                  <Gap>
                    <FiBell color='white' size={32} />
                    <Column>
                      <OText textColor={ETextColor.white} weight={ETextWeight.bold}>Stay in Loop</OText>
                      <OText textColor={ETextColor.textBlue} weight={ETextWeight.bold} size={ESize.s}>With our weekly newsletters and other updates about your positions</OText>
                    </Column>
                  </Gap>
                  <Spacing size={ESize.xs} />

                  <Gap>
                    <BlockSize size='60%'>
                      <Input size="100%" type="text" placeholder='Email' />
                    </BlockSize>
                    <BlockSize size='40%'>
                      <OButton customWidth='100%' secondary>
                        Subscribe
                      </OButton>
                    </BlockSize>
                  </Gap>
                </Card>

                {/* Card 4 */}
                <Card backgroundColor={lightTheme.colors.deepBlue}>
                  <Gap>
                    <BiLogoTelegram color='white' size={32} />
                    <Column>
                      <OText textColor={ETextColor.white} weight={ETextWeight.bold}>Subscribe to our Telegram Bot</OText>
                      <OText textColor={ETextColor.gray} weight={ETextWeight.bold} size={ESize.s}>With our updates about your positions</OText>
                    </Column>
                  </Gap>
                  <Spacing size={ESize.xs} />
                  <OButton customWidth='100%' secondary>
                    Join Telegram
                  </OButton>
                </Card>
              </Col>
              <Col>

                {/* Card 1 */}

                <Card>
                  <Column gapSize='20px'>
                    <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullWidth>
                      <OText textColor={ETextColor.gray} size={ESize.m} weight={ETextWeight.bold}>Vault</OText>
                      <OpenComponent text='Open' />
                    </Flex>
                    <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullWidth>
                      <OText textColor={ETextColor.gray} size={ESize.m} weight={ETextWeight.bold}>Epoch 4</OText>
                      <OText textColor={ETextColor.normal} size={ESize.m} weight={ETextWeight.bold}>Jul 23 - Jul 30</OText>

                    </Flex>
                    <ProgressBar isLabelVisible={false} completed={25} height='10px' bgColor={lightTheme.colors.primary} baseBgColor='rgba(236, 238, 255, 1)' />
                  </Column>
                </Card>

                {/* Card 1 */}
                <Card>
                  <Gap gapSize={defaultTheme.spacing['4xl']}>
                    <Column>
                      <OText textColor={ETextColor.gray} size={ESize.s} weight={ETextWeight.bold}>My Balance</OText>
                      <OText weight={ETextWeight.bold}>$13,434,444</OText>
                    </Column>
                    <Column>
                      <OText textColor={ETextColor.gray} size={ESize.s} weight={ETextWeight.bold}>My Yields</OText>
                      <OText weight={ETextWeight.bold}>$13,434,444</OText>
                    </Column>
                  </Gap>
                </Card>

                {/* Card 2 */}
                <Card>
                  <OText textColor={ETextColor.gray} size={ESize.s} weight={ETextWeight.bold}>Detailed Strategy</OText>
                  <Spacing size={ESize.xs} />

                  <Gap gapSize={defaultTheme.spacing['4xl']}>
                    <Column>
                      <OText weight={ETextWeight.bold}>$13940,44</OText>
                      <OText textColor={ETextColor.gray} size={ESize.s} weight={ETextWeight.bold}>Current Price</OText>
                    </Column>
                    <Column>
                      <OText weight={ETextWeight.bold}>$1850,9 - $1960.33</OText>
                      <OText textColor={ETextColor.gray} size={ESize.s} weight={ETextWeight.bold}>My Range</OText>
                    </Column>
                  </Gap>
                  <Spacing size={ESize.xs} />
                  <Chart />
                </Card>

                {/* Card 3 */}
                <CardExpend title="Historical Performance">
                  <Card>
                    <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullWidth>
                      <OText textColor={ETextColor.gray} size={ESize.m} weight={ETextWeight.bold}>Historical performance</OText>
                      <SortByDatesAccount handleChildClick={handleChildClick} onChange={handleDateChange} />
                    </Flex>
                    <Spacing size={ESize.l} />
                    <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullWidth>
                      <Column>
                        <OText size={ESize.mm} weight={ETextWeight.bold}>+0.32%</OText>
                        <OText textColor={ETextColor.gray} size={ESize.s}>Current APR</OText>
                      </Column>
                    </Flex>
                    <Spacing size={ESize.l} />
                    <ResponsiveContainer width="100%" height={151}>
                      <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                          top: 5,
                          left: -14
                        }}
                      >
                        <XAxis axisLine={false} tickLine={false} dataKey="name" />
                        <YAxis axisLine={false} tickLine={false} />
                        <Line type="monotone" dataKey="pv" dot={false} stroke="rgba(133, 121, 250, 1)" fill="rgba(133, 121, 250, 1)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </Card>

                </CardExpend>
                <CardExpend title="Epoch History">
                  <Column gapSize='10px'>
                    <HeaderEpoch />
                    <EpochHistory date='22.08.23 - 23.08.23' performance='+4.53%' epoch='Epoch10' />
                    <EpochHistory date='22.08.23 - 23.08.23' performance='+4.53%' epoch='Epoch19' />
                    <EpochHistory date='22.08.23 - 23.08.23' performance='+4.53%' epoch='Epoch18' />
                  </Column>
                </CardExpend>
                <CardExpend title="Risks">
                  <Spacing size={ESize.xs} />
                  <Card paddingSize='20px' backgroundColor='#E9F1F9'>
                    <Column gapSize={defaultTheme.spacing.xs}>
                      <Column gapSize={defaultTheme.spacing['3xs']}>
                        <OText size={ESize.m}>Smart contract risks</OText>
                        <OText textColor={ETextColor.gray} size={ESize.s}>
                          Smart contracts in stable coins pose risks like coding errors,
                          regulatory uncertainties, and reliance on centralized oracles.
                          Mitigating these risks is crucial for long-term viability.
                        </OText>
                      </Column>
                      <Column gapSize={defaultTheme.spacing['3xs']}>
                        <OText size={ESize.m}>Underlying assets risk</OText>
                        <OText textColor={ETextColor.gray} size={ESize.s}>
                          Stable coins are exposed to risks associated with their underlying assets,
                          including potential volatility and devaluation,
                          which can impact their stability.
                        </OText>
                      </Column>
                    </Column>
                  </Card>
                </CardExpend>
                <CardExpend title="Fees">
                  <Spacing size={ESize.xs} />
                  <Card paddingSize='20px' backgroundColor='#E9F1F9'>
                    <Column gapSize={defaultTheme.spacing['3xs']}>
                      <OText size={ESize.m}>Gains Fee</OText>
                      <OText textColor={ETextColor.gray} size={ESize.s}>
                        We apply a 20% fee on your gains, and withdrawals without any gains are free of charge.
                      </OText>
                    </Column>
                  </Card>
                </CardExpend>
              </Col>
            </Content>
          </BlockSize>
        </Wrapper>
        <Spacing size={ESize.l} />
        <Footer />
      </SMainWrapper >
    </>
  )
}

export default Earn