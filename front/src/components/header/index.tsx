import React, { useEffect, useState, useContext } from "react";
import {
  SMainWrapperHeader,
  SImageHeader,
  Navigation,
  LeftCol,
  RightCol,
} from "./s-components/s-header";
import Link from "next/link";
import {
  ESize,
  ETextAlign,
  ETextColor,
  ETextWeight,
  ETextType,
} from "utils/Enums";
import { OButton } from "components/library/OButton";
import { useConnect, useDisconnect, useAccount, useNetwork, useSwitchNetwork } from 'wagmi'
import { formatAddress } from "utils";
import MelonLogo from "../../assets/images/melon1.png"
import { UserContext } from "context";

function Header() {
  const { connect, connectors } = useConnect()
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const formatWalletAddress = address && formatAddress(address as string)
  const { chain } = useNetwork()
  const { chains } = useSwitchNetwork()
  const [rightNetwork, setRightNetwork] = useState<boolean | null>(null);
  const { data } = useContext(UserContext);

  useEffect(() => {
    setRightNetwork(chains.some(x => x.id === chain?.id));
  }, [chain])

  return (
    <SMainWrapperHeader connected={data ? true : false}>
      <LeftCol>
        <SImageHeader src={MelonLogo} alt="MelonLogo" />
      </LeftCol>
      <RightCol>
        {isConnected ?
          <>
            {
              rightNetwork === null
                ?
                <OButton disabled>Loading...</OButton>
                :
                rightNetwork
                  ?
                  <OButton onClick={() => disconnect()}>{formatWalletAddress}</OButton>
                  :
                  <OButton onClick={() => disconnect()}>Wrong network</OButton>
            }
          </>
          :
          <>
            {connectors.map((connector) => (
              <OButton
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
              >
                Connect
              </OButton>
            ))}
          </>
        }
      </RightCol>
    </SMainWrapperHeader>
  );
}

export default Header;
