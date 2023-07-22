import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 4px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: ${({ theme }) => theme.radius.m};
  border: 1px solid${({ theme }) => theme.colors.bgTransparent};
  width: 140px;
`;

const Button = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${({ theme, active }) => (active ? theme.colors.deepBlue : theme.colors.lightBlue)};
  color: ${({ theme, active }) => (active ? '#fff' : theme.colors.gray)};
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.m};
  margin-right: 1px;
  width: 32px;
  height: 32px;
  font-weight: 600;
  font-size: 14px;
  &:last-child {
    margin-right: 0;
  }
`;

type ButtonGroupProps = {
  onChange: (value: string) => void;
};

const SortByDates: React.FC<ButtonGroupProps> = ({ onChange }) => {
  const [activeButton, setActiveButton] = useState('D');

  const handleClick = (value: string) => {
    setActiveButton(value);
    onChange(value);
  };

  return (
    <Container>
      <Button active={activeButton === 'D'} onClick={() => handleClick('D')}>
        D
      </Button>
      <Button active={activeButton === 'W'} onClick={() => handleClick('W')}>
        W
      </Button>
      <Button active={activeButton === 'M'} onClick={() => handleClick('M')}>
        M
      </Button>
      <Button active={activeButton === 'Y'} onClick={() => handleClick('Y')}>
        Y
      </Button>
    </Container>
  );
};

export default SortByDates;