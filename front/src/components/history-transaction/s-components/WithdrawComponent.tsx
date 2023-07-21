import styled from 'styled-components';
import { OText } from '../../library/OText';
import Image, { StaticImageData } from 'next/image'
import { HiOutlineDownload } from 'react-icons/hi';
import { Gap } from '../../library/Gap';
import { ESize, ETextAlign, ETextColor, ETextWeight, ETextType } from '../../../utils/Enums';

interface TokenProps {
  deposit?: boolean;
}

const Circle = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;



const WithdrawComponent: React.FC<TokenProps> = ({ deposit }) => (
  <Gap>
    <Circle>
      <HiOutlineDownload style={deposit ? { transform: 'rotate(180deg)' } : { transform: 'none' }} size={12} color={deposit ? ETextColor.green : ETextColor.blue} />
    </Circle>
    <OText textColor={deposit ? ETextColor.green : ETextColor.blue} size={ESize.s}>
      {deposit ? 'Deposit' : 'Withdraw'}
    </OText>
  </Gap>
);

export default WithdrawComponent;