import { ethers } from "hardhat";

async function main() {

    const [deployer] = await ethers.getSigners();
    console.log("Deployer account:", deployer.address);

    const melon = await attach("Melon", "0xd706B5A75713446A0fd42A636d092Be72737259d");

    let tx = await melon.refundGas();

    await tx.wait();

    console.log(await melon.hello());
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