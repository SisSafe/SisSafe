import { ethers } from "hardhat";
import { Client, Presets } from "userop";
import { UserOperationBuilder } from "userop";
import { SimpleAccountAPI } from "@account-abstraction/sdk";
import { BaseWallet } from "ethers";
import { wrapProvider } from "@account-abstraction/sdk";
import { getSigner } from "@openzeppelin/hardhat-upgrades/dist/utils";

async function main() {
  const [owner] = await ethers.getSigners();
  ethers;
  const provider = await ethers.getDefaultPrivder;
  console.log;
  const entryPointAddress = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
  const factoryAddress = "0x9406Cc6185a346906296840746125a0E44976454";
  const account = "0x0e8a2227293c817272F19ea2d28e9Db41746b235";
  const bundlerRpcUrl =
    "https://api.stackup.sh/v1/node/566e5293dc63c1f3f882c6be178af27e19114e74dd70ca97e8f42c8ded245e28";

  //use this account as wallet-owner (which will be used to sign the requests)
  const aaSigner = provider.getSigner();
  const config = {
    chainId: await provider.getNetwork().then((net) => net.chainId),
    entryPointAddress,
    bundlerUrl: "http://localhost:3000/rpc",
  };
  const aaProvider = await wrapProvider(provider, config, aaSigner);
  const walletAddress = await aaProvider.getSigner().getAddress();

  // send some eth to the wallet Address: wallet should have some balance to pay for its own creation, and for calling methods.

  const myContract = new Contract(abi, aaProvider);
  const smartAccount = await Presets.Builder.SimpleAccount.init(
    owner,
    bundlerRpcUrl,
    {
      entryPoint: entryPointAddress,
    }
  );

  smartAccount.setVerificationGasLimit("50000");
  smartAccount.setSender(account);

  //   const bundlerRpcUrl = "https://mumbai.voltaire.candidewallet.com/rpc";
  // const builder = new UserOperationBuilder().useDefaults({  });
  const E = await ethers.getContractFactory("EntryPoint");
  const builder = new UserOperationBuilder()
    .useDefaults({ sender: account })
    .setCallGasLimit("40000")
    .setSender(account);

  const entry = new ethers.Contract(entryPointAddress, E.interface, owner);
  console.log("DepositedBycontract : ", await entry.deposits(account));
  const client = await Client.init(bundlerRpcUrl, {
    entryPoint: entryPointAddress,
  });

  console.log("New init code", smartAccount.getInitCode());

  //
  //   console.log("preverif gas:", smartAccount.getPreVerificationGas().toString());
  console.log("sma");
  // const smartAccount = await Presets.Builder.SimpleAccount.init(owner, rpcUrl, {
  //   entryPoint: entryPointAddress,
  //   factory: factoryAddress,
  // });
  // Deploying
  smartAccount.setInitCode("0x");
  const exec = smartAccount.execute(
    owner.address, // smartAccount.getSender(),
    ethers.parseEther("0.01"),
    "0x"
  );
  exec.setInitCode("0x");
  //   console.log("exec: ", exec);
  const result = await client.sendUserOperation(exec);
  //   const event = await result.wait();
  //   console.log(`Transaction hash: ${event?.transactionHash}`);

  // Upgrading
  // const BoxV2 = await ethers.getContractFactory("BoxV2");
  // const upgraded = await upgrades.upgradeProxy(
  //   await instance.getAddress(),
  //   BoxV2
  // );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
