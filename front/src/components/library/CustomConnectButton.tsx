import { ConnectButton } from '@rainbow-me/rainbowkit';
import { OButton } from "components/library/OButton";
import { OText } from "components/library/OText";

export const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div>
            {(() => {
              if (!connected) {
                return (
                  <OButton onClick={openConnectModal}>
                    Connect Wallet
                  </OButton>
                );
              }

              if (chain.unsupported) {
                return (
                  <OButton onClick={openChainModal}>
                    Wrong network
                  </OButton>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <OButton onClick={openChainModal}>
                    {chain.name}
                  </OButton>
                  <OButton onClick={openAccountModal}>
                    {account.displayName}
                  </OButton>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};