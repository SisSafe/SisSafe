import styled, { css } from 'styled-components';
import { OText } from './OText';
import { ESize, ETextWeight } from "utils/Enums"
import Image, { StaticImageData } from 'next/image'
import Avatar from '../../assets/images/avatar.png'
import Login from '../../assets/images/login.png'
import Copy from '../../assets/images/Copy.png'
import { formatString } from 'utils/functions'
import { Gap } from './Gap';
import { PiArrowsCounterClockwiseFill } from 'react-icons/pi';
import { TbSettings } from 'react-icons/tb';
import { Flex } from './Flex';
import { EFlex } from "utils/Enums"

interface TokenProps {
  wallet?: string;
}

interface ImgProps {
  size?: string;
}


const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 10px;
  padding: 10px;
  background-color: #FFF;
  max-height: 172px;
  min-width: 320px;
  position: absolute;
  border-radius: 12px;
`;

const Wallet = styled.div`
  display: flex;
  align-items:center;
  gap: 58px;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #F5F9FE;
  height: 52px;
  width: 100%;
  border-radius: 12px;
`;

const SImage = styled(Image) <ImgProps>`
  width: ${({ size }) => size ? size : '30px'};
  height: ${({ size }) => size ? size : '30px'};
`;

const Block = styled.div`
  width: 0px;
`;


const Circle = styled.div`
  border-radius: 50%;
  padding: 7px;
  background-color: #FFF;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items:center;
`;

const CardConnect: React.FC<TokenProps> = ({ wallet }) => {
  const walletFormat = formatString(wallet as string)
  return (
    <Card>
      <Wallet>
        <Gap gapSize='10px'>
          <SImage src={Avatar} alt='Wallet' />
          <OText>{walletFormat}</OText>
        </Gap>
        <Gap gapSize='10px'>
          <Circle>
            <PiArrowsCounterClockwiseFill size={12} />
          </Circle>
          <Circle>
            <SImage size='12px' src={Copy} alt='Copy' />
          </Circle>
        </Gap>
      </Wallet>
      <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullwidth>
        <Gap gapSize='17px'>
          <Block />
          <TbSettings size={30} />
          <OText>Settings</OText>
        </Gap>
      </Flex>
      <Flex direction={EFlex.row} horizontal={EFlex.between} vertical={EFlex.center} fullwidth>
        <Gap gapSize='17px'>
          <Block />
          <SImage src={Login} alt='login' />
          <OText>Disconnect</OText>
        </Gap>
      </Flex>
    </Card>
  )
};

export default CardConnect;