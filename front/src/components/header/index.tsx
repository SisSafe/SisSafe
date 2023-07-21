import React, { useEffect, useState } from "react";
import {
  SMainWrapperHeader,
  SImageHeader,
  Navigation,
  LeftCol,
  RightCol,
} from "./s-components/s-header";
import AmphorLogo from "../../assets/images/amphor.png";
import Link from "next/link";
import {
  ESize,
  ETextAlign,
  ETextColor,
  ETextWeight,
  ETextType,
} from "utils/Enums";
import { useRouter } from "next/router";
import { OButton } from "components/library/OButton";
import { useConnect, useDisconnect, useAccount, useNetwork, useSwitchNetwork } from 'wagmi'
import { formatAddress } from "utils";

function Header() {
  const router = useRouter();
  const { connect, connectors } = useConnect()
  const { address, isConnected, connector } = useAccount()
  const { disconnect } = useDisconnect()
  const formatWalletAddress = address && formatAddress(address as string)
  const { chain } = useNetwork()
  const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()
  const [rightNetwork, setRightNetwork] = useState(false);

  useEffect(() => {
    const checkNetwork = () => {
      chains.map((x) => {
        x.id === chain?.id ? setRightNetwork(true) : setRightNetwork(false);
      })
    }
    checkNetwork()
  }, [chain])

  return (
    <SMainWrapperHeader>
      <LeftCol>
        <Link href="/">
          <SImageHeader src={AmphorLogo} alt="AmphorLogo" />
        </Link>
      </LeftCol>
      <RightCol>
        {isConnected ?
          <>
            {
              rightNetwork ?
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
