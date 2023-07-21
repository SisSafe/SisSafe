import { useEffect, useState } from "react";
import Web3 from "web3";
import ABI from "../abi/TotumVaultSyntheticLP.json";
import ABI_USDC from "../abi//Usdc.json";

const useContractFunctions = (): {
  deposit: (
    assets: number,
    receiver: `0x${string}` | undefined
  ) => Promise<any>;
  withdraw: (
    sharesAmount: number,
    receiver: `0x${string}` | undefined,
    owner: `0x${string}` | undefined
  ) => Promise<any>;
  balanceOf: (
    account: `0x${string}` | undefined,
    token: string
  ) => Promise<number | null>;
  isLocked: () => Promise<boolean | null>;
} => {
  const [contractInstance, setContractInstance] = useState<any>(null);
  const [web3, setWeb3] = useState<any>(null);

  useEffect(() => {
    const init = async (): Promise<void> => {
      let web3Instance;
      try {
        // Initialize Web3
        // @ts-ignore
        if (window.ethereum) {
          // @ts-ignore
          const provider = window.ethereum;
          // @ts-ignore
          await provider.enable();
          // @ts-ignore
          web3Instance = new Web3(provider);
          setWeb3(web3Instance);
          // @ts-ignore
        } else if (window.web3) {
          // @ts-ignore
          console.log("window.web3", window.web3);
          // @ts-ignore
          web3Instance = window.web3;
          setWeb3(web3Instance);
        } else {
          throw new Error("Web3 not found");
        }

        console.log("web3", web3);
        // Initialize Contract
        const contractAddress = "0xabe5fe4CE520b6101506eFc45D78DaD41d0E134f"; // Replace with the actual contract address
        const contract =
          web3Instance && new web3Instance.eth.Contract(ABI, contractAddress);
        setContractInstance(contract);
      } catch (error) {
        console.error("Error initializing contract:", error);
      }
    };

    init();
  }, []);

  const deposit = async (
    assets: number,
    receiver: `0x${string}` | undefined
  ): Promise<any> => {
    console.log("Receiver", receiver);
    try {
      if (!contractInstance || !web3) {
        throw new Error("Contract not initialized");
      }

      const accounts = await web3.eth.getAccounts();
      const result = await contractInstance.methods
        .deposit(assets * 1e6, receiver)
        .send({ from: accounts[0] });
      return result;
    } catch (error) {
      console.error("Error calling deposit function:", error);
      return null;
    }
  };

  const withdraw = async (
    sharesAmount: number,
    receiver: `0x${string}` | undefined,
    owner: `0x${string}` | undefined
  ): Promise<any> => {
    try {
      if (!contractInstance || !web3) {
        throw new Error("Contract not initialized");
      }

      const accounts = await web3.eth.getAccounts();
      const result = await contractInstance.methods
        .withdraw(sharesAmount, receiver, owner)
        .send({ from: accounts[0] });
      return result;
    } catch (error) {
      console.error("Error calling withdraw function:", error);
      return null;
    }
  };

  const balanceOf = async (
    account: `0x${string}` | undefined,
    token: string
  ): Promise<number | null> => {
    try {
      if (!contractInstance || !web3) {
        throw new Error("Contract not initialized");
      }

      if (token === "USDC") {
        const usdcContract = await new web3.eth.Contract(
          ABI_USDC,
          "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        );
        const result =
          (await usdcContract.methods.balanceOf(account).call()) / 1e6;
        return result;
      } else {
        const result = await contractInstance.methods.balanceOf(account).call();
        return result;
      }
    } catch (error) {
      console.error("Error calling balanceOf function:", error);
      return null;
    }
  };

  const isLocked = async (): Promise<boolean | null> => {
    try {
      if (!contractInstance || !web3) {
        throw new Error("Contract not initialized");
      } else {
        const result = await contractInstance.methods.unlockedPeriod().call();
        return result;
      }
    } catch (error) {
      console.error("Error calling isLocked function:", error);
      return null;
    }
  };

  return {
    deposit,
    withdraw,
    balanceOf,
    isLocked,
    // Add other contract functions here
  };
};

export default useContractFunctions;
