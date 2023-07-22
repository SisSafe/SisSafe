import styled, { css } from 'styled-components';
import { OText } from './OText';
import { ESize, ETextWeight } from "utils/Enums"
import Image, { StaticImageData } from 'next/image'
import TickCircle from '../../assets/images/tick-circle.png'

interface TokenProps {
  text: string;
}


const Card = styled.div`
  display: flex;
  gap: 4px;
  align-items:center;
  background-color: rgba(149, 255, 193, 0.2);
  border:  ${({ theme }) => `1px solid #95FFC1`};
  border-radius: 12px;
  padding: 4px 8px;
  p {
    color: ${({ theme }) => theme.colors.green};
    font-size: 12px;
  }
`;

const SImage = styled(Image)`
  width: 12px;
  height: 12px;
`;



const OpenComponent: React.FC<TokenProps> = ({ text }) => (
  <Card>
    <SImage src={TickCircle} alt="Token Image" />
    <p>{text}</p>
  </Card>
);

export default OpenComponent;