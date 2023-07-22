const { ethers, upgrades } = require("hardhat");
const keccak256 = require("keccak256");
import { Client, Presets } from "userop";

async function main() {
  const [owner] = await ethers.getSigners();
  console.log;
  const entryPointAddress = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
  const factoryAddress = "0x9406Cc6185a346906296840746125a0E44976454";
  // const rpcUrl = "https://mumbai.voltaire.candidewallet.com/rpc";
  // const smartAccount = await Presets.Builder.SimpleAccount.init(owner, rpcUrl, {
  //   entryPoint: entryPointAddress,
  //   factory: factoryAddress,
  // });
  // Deploying

  console.log('Owneraddress", owner.address');
  console.log("privateKey:", keccak256("SissSafe").toString("hex"));

  const Box = await ethers.getContractFactory("NewAccount");
  const instance = await upgrades.deployProxy(Box, [owner.address], {
    initializer: "initialize",
    constructorArgs: [entryPointAddress],
    unsafeAllow: ["constructor", "state-variable-immutable"],
  });
  await instance.waitForDeployment();
  console.log("deployed ");

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
