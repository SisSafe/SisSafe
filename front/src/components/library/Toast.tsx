import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { OText } from './OText';
import { ESize, ETextAlign, ETextColor, EBackgroundColor } from 'utils/Enums';
import { defaultTheme, lightTheme } from 'themes/theme'

interface ToastProps {
  message?: string;
  color?: EBackgroundColor;
}

interface StyledToastProps {
  show?: boolean;
  color?: EBackgroundColor;
}

const getColor = (color?: EBackgroundColor) => {
  switch (color) {
    case EBackgroundColor.success:
      return lightTheme.colors.green;
    case EBackgroundColor.warning:
      return lightTheme.colors.orange;
    case EBackgroundColor.danger:
      return lightTheme.colors.negative;
    default:
      return lightTheme.colors.green;
  }
};

const StyledToast = styled.div<StyledToastProps>`
  position: fixed;
  top: 80px;
  width: 100%;
  height: 40px;
  padding: 20px;
  color: #fff;
  background-color: ${(p) => getColor(p.color)};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ show }) => show ? '1' : '0'};
`;


const NotificationToast: React.FC<ToastProps> = ({ message, color }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timeout = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledToast show={show} color={color}>
      <OText textColor={ETextColor.white} size={ESize.s}>
        {message}
      </OText>
    </StyledToast>);
};

export default NotificationToast;