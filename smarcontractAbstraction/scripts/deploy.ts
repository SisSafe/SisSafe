import { ethers } from "hardhat";

async function main() {

    const [deployer] = await ethers.getSigners();
    console.log("Deployer account:", deployer.address);

    const Melon = await ethers.getContractFactory("Melon");
    const melon = await Melon.deploy("0xcaa596ba15aabc88ff17c89b6f94d3ef", "0x9090A5d516f2054007bD184caf55760B51fcFBfD");

    await melon.deployed();

    console.log(`Melon contract has been deploy at ${melon.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
