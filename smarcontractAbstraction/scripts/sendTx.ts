const { ethers, upgrades } = require("hardhat");
const keccak256 = require("keccak256");
import { Client, Presets } from "userop";
import { UserOperationBuilder } from "userop";
import { SimpleAccountAPI } from "@account-abstraction/sdk";
import { BaseWallet } from "ethers";

async function main() {
  const [owner] = await ethers.getSigners();
  console.log;
  const entryPointAddress = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
  const factoryAddress = "0x9406Cc6185a346906296840746125a0E44976454";
  const account = "0x0e8a2227293c817272F19ea2d28e9Db41746b235";
  const bundlerRpcUrl =
    "https://api.stackup.sh/v1/node/566e5293dc63c1f3f882c6be178af27e19114e74dd70ca97e8f42c8ded245e28";
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
