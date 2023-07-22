import styled, { keyframes, css } from "styled-components";

interface VaultProps {
  reverse?: boolean;
}

const rotateHandle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-180deg);
  }
`;

const animateLockShadow = keyframes`
  0% {
    width: 340px;
    margin: 170px 90px;
  }
  100% {
    width: 300px;
    margin: 150px 90px;
  }
`;

const animatePiston = keyframes`
  0% {
    width: 340px;
    margin-left: 0px;
    margin-right: 0px;
  }
  100% {
    width: 310px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const VaultDoorOuter = styled.div<VaultProps>`
  position: relative;
  width: 500px;
  height: 500px;
  background: rgb(235, 235, 235);
  border-radius: 6%;
  animation: ${({ reverse }) => reverse ? css`${fadeOut} 5s ease-out forwards` : 'none'};
`;
const VaultDoorInner = styled.div`
  position: absolute;
  margin: 52px;
  width: 390px;
  height: 390px;
  background: rgb(219, 219, 219);
  border-radius: 25%;
`;

const VaultDoorLockShadow = styled.div<VaultProps>`
  position: absolute;
  width: 340px;
  height: 180px;
  background: -webkit-linear-gradient(rgba(160, 160, 160, 0.2), transparent);
  margin: 170px 90px;
  transform: rotate(-45deg);
  transition: all .05s ease-out;
  animation: ${({ reverse }) => reverse ? css`${animateLockShadow} 2s ease-out reverse` : css`${animateLockShadow} 2s ease-out forwards`};
`;

const VaultDoorLockWrapper = styled.div`
  position: absolute;
  width: 190px;
  height: 190px;
`;

const VaultDoorLock = styled.div`
  background: rgb(185, 185, 185);
`;

const VaultDoorCircle = styled(VaultDoorLock)`
  position: absolute;
  width: 310px;
  height: 310px;
  margin: 40px;
  border-radius: 50%;
`;

const VaultDoorPistons = styled(VaultDoorLock)`
  position: absolute;
  width: 340px;
  height: 340px;
  margin: 180px 25px;
  background: none;
`;

const Piston = styled.div<VaultProps>`
  position: absolute;
  background: rgb(185,185,185);
  width: 340px;
  height: 30px;
  border-radius: 8px;
  transition: all .05s ease-out;
  animation: ${({ reverse }) => reverse ? css`${animatePiston} 2s ease-out reverse` : css`${animatePiston} 2s ease-out forwards`};

  
  &.piston2{
    transform:rotate(45deg);
  }
  &.piston3{
    transform:rotate(90deg);
  }
  &.piston4{
    transform:rotate(135deg);
  }
`;

const VaultDoorHandleShadow = styled.div`
  position: absolute;
  background: rgb(160, 160, 160);
  width: 150px;
  height: 150px;
  margin: 120px;
  border-radius: 50%;
`;

const VaultDoorHandleLongShadow = styled.div`
  position: absolute;
  background: -webkit-linear-gradient(rgb(160, 160, 160), transparent);
  width: 186px;
  height: 186px;
  margin: 165px;
  transform: rotate(-45deg);
`;


const VaultDoorHandle = styled.div<VaultProps>`
  position: absolute;
  border: solid 23px rgb(214, 214, 214);
  width: 140px;
  height: 140px;
  margin: 125px;
  border-radius: 50%;
  transition: all .3s ease-in-out;
  animation: ${({ reverse }) => reverse ? css`${rotateHandle} 2s ease-out reverse` : css`${rotateHandle} 2s ease-out forwards`};
`;

const HandleBar = styled.div`
  position: absolute;
  background: rgb(214, 214, 214);
  height: 22px;
  width: 140px;
  margin: 36px -23px;
  
  &.bar1 {
    transform: rotate(45deg);
  }
  
  &.bar2 {
    transform: rotate(135deg);
  }
`;

// usage in a Next.js component
const VaultDoor: React.FC<VaultProps> = ({ reverse }) => {
  return (
    <VaultDoorOuter reverse={reverse}>
      <VaultDoorInner>
        <VaultDoorLockShadow reverse={reverse} />
        <VaultDoorLockWrapper>
          <VaultDoorLock>
            <VaultDoorCircle />
            <VaultDoorPistons>
              <Piston reverse={reverse} className="piston1" />
              <Piston reverse={reverse} className="piston2" />
              <Piston reverse={reverse} className="piston3" />
              <Piston reverse={reverse} className="piston4" />
            </VaultDoorPistons>
          </VaultDoorLock>
        </VaultDoorLockWrapper>
        <VaultDoorHandleShadow />
        <VaultDoorHandleLongShadow />
        <VaultDoorHandle reverse={reverse}>
          <HandleBar className="bar1" />
          <HandleBar className="bar2" />
        </VaultDoorHandle>
      </VaultDoorInner>
    </VaultDoorOuter>
  )
}

export default VaultDoor;
