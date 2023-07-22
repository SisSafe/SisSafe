import styled, { css } from 'styled-components';
import { OText } from './OText';
import { ESize, ETextWeight } from "utils/Enums"
import Image, { StaticImageData } from 'next/image'

interface TokenProps {
  imageUrl: StaticImageData | string;
  text: string;
  sizeImg?: string;
  start?: boolean;
  isDisabled?: boolean;
}

interface ImgProps {
  sizeImg?: string;
  isDisabled?: boolean;
  start?: boolean;
}

const Token = styled.div<ImgProps>`
  display: flex;
  gap: ${({ theme }) => theme.spacing['3xs']};
  align-items: center;
  justify-content: ${({ start }) => (start ? `start` : 'center')};
  p{
    font-size: ${({ sizeImg }) => (sizeImg ? `${sizeImg}px` : '24px')};
  }
 ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.3;
    `}
`;

const SImage = styled(Image) <ImgProps>`
  width: ${({ sizeImg }) => (sizeImg ? `${sizeImg}px` : '25px')};
  height: ${({ sizeImg }) => (sizeImg ? `${sizeImg}px` : '25px')};
`;



const TokenComponent: React.FC<TokenProps> = ({ imageUrl, text, sizeImg, start, isDisabled }) => (
  <Token isDisabled={isDisabled} sizeImg={sizeImg} start={start}>
    <SImage sizeImg={sizeImg} src={imageUrl} alt="Token Image" />
    <p>{text}</p>
  </Token>
);

export default TokenComponent;