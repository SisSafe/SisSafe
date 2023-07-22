import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.bgTransparent};
  border-radius: ${({ theme }) => theme.radius.m};
  border: 1px solid${({ theme }) => theme.colors.lightGray};
  width: 107px;
`;

const Button = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${({ theme, active }) => (active ? theme.colors.deepBlue : theme.colors.bgTransparent)};
  color: ${({ theme, active }) => (active ? '#fff' : theme.colors.gray)};
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.m};
  margin-right: 1px;
  width: 34px;
  height: 32px;
  font-weight: normal;
  font-size: 14px;
  &:last-child {
    margin-right: 0;
  }
`;

type ButtonGroupProps = {
  onChange: (value: string) => void;
  handleChildClick: (e: React.MouseEvent) => void;
};

const SortByDatesAccount: React.FC<ButtonGroupProps> = ({ onChange, handleChildClick }) => {
  const [activeButton, setActiveButton] = useState('All');

  const handleClick = (value: string) => {
    setActiveButton(value);
    onChange(value);
  };

  return (
    <Container onClick={handleChildClick}>
      <Button active={activeButton === 'M'} onClick={() => handleClick('M')}>
        M
      </Button>
      <Button active={activeButton === 'Y'} onClick={() => handleClick('Y')}>
        Y
      </Button>
      <Button active={activeButton === 'All'} onClick={() => handleClick('All')}>
        All
      </Button>
    </Container>
  );
};

export default SortByDatesAccount;