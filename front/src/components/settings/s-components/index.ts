import styled from 'styled-components';
import { EMediaQuery } from 'utils/Enums';

export const SMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  padding: 40px 160px 80px 160px;
  @media(max-width:${EMediaQuery.md}) {
    padding: 20px 20px;
  }
`;


interface SliderProps {
  checked: boolean;
  focus: boolean;
}

export const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: 54px;
  height: 24px;
`;

export const HiddenInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.div<SliderProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.checked ? '#2196F3' : '#ccc')};
  box-shadow: ${(props) => (props.focus ? '0 0 1px #2196F3' : 'none')};
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: ${(props) => (props.checked ? '30px' : '4px')};
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`;
