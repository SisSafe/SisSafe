import { ethers } from "hardhat";

async function main() {

    const [deployer] = await ethers.getSigners();
    console.log("Deployer account:", deployer.address);

    const melon = await attach("Melon", "0x061F33c8594f24e475958CD2bf442C51F5E49bf1");

    console.log(await melon.lastResult());
    console.log(await melon.lastAuth());
}

const attach = async (factory: any, address: any) => {
    let ContractFactory = await ethers.getContractFactory(factory);
    let contract = await ContractFactory.attach(address);
    console.log(factory, "has been load");
    return contract;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});