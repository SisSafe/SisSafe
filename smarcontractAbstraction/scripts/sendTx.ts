const { ethers, upgrades } = require("hardhat");
const keccak256 = require("keccak256");
import { Client, Presets } from "userop";
import { UserOperationBuilder } from "userop";
import { SimpleAccountAPI } from "@account-abstraction/sdk";
import { BaseWallet } from "ethers";
import fs from "fs";
import request from "request";
import { AbiCoder } from "ethers";

const userOptType = {
  components: [
    { type: "address", name: "sender" },
    { type: "uint256", name: "nonce" },
    { type: "bytes", name: "initCode" },
    { type: "bytes", name: "callData" },
    { type: "uint256", name: "callGasLimit" },
    { type: "uint256", name: "verificationGasLimit" },
    { type: "uint256", name: "preVerificationGas" },
    { type: "uint256", name: "maxFeePerGas" },
    { type: "uint256", name: "maxPriorityFeePerGas" },
    { type: "bytes", name: "paymasterAndData" },
    { type: "bytes", name: "signature" },
  ],
  name: "userOp",
  type: "tuple",
};
function defaultAbicencoded(params: any, userOptType: any): string {
  const abiCoder = new AbiCoder();
  const encodedParams = abiCoder.encode(userOptType.components, [
    params.sender,
    params.nonce,
    params.initCode,
    params.callData,
    params.callGasLimit,
    params.verificationGasLimit,
    params.preVerificationGas,
    params.maxFeePerGas,
    params.maxPriorityFeePerGas,
    params.paymasterAndData,
    params.signature,
  ]);

  return "0x" + encodedParams.slice(66, encodedParams.length - 64);
}
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
  const N = await ethers.getContractFactory("NewAccount");
  const abstractWallet = new ethers.utils.Interface(N.interface);

  smartAccount.setVerificationGasLimit("50000");
  smartAccount.setSender(account);
  const allData = abstractWallet.encodeFunctionData("execute", [
    owner.address,
    ethers.utils.parseEthers("0.01"),
  ]);
  console.log("alldata", allData);

  //   const bundlerRpcUrl = "https://mumbai.voltaire.candidewallet.com/rpc";
  // const builder = new UserOperationBuilder().useDefaults({  });
  const E = await ethers.getContractFactory("EntryPoint");
  // const E = await ethers.getContractFactory("NewAccount");
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
  //   tx = {}
  // });
  // Deploying
  smartAccount.setInitCode("0x");
  const exec = smartAccount.execute(
    smartAccount.getSender(),
    ethers.parseEthers("0.01"),
    "0x"
  );
  exec.setInitCode("0x");
  // console.log()
  fs.writeFile("exec.json", JSON.stringify(exec), (err: any) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Data has been written to", "exec.json");
    }
  });
  exec.defaultOp = exec.currOp;
  try {
    const result = await client.sendUserOperation(exec);
  } catch (err: any) {
    try {
      const obj = JSON.parse(err?.requestBody);
      console.log(err); // Parse the JSON string into a JavaScript object
      obj.params[0].initCode = "0x"; // Modify the initCode property
      obj.params[0].signature = "0x"; // Modify the initCode property
      const encodedParams = defaultAbicencoded(obj.params[0], userOptType);
      const coder = new AbiCoder();
      const enc = coder.encode(
        ["bytes32", "address", "uint256"],
        [keccak256(encodedParams), entryPointAddress, 800001]
      );
      console.log("encodedParams", encodedParams);
      const newSign = await owner.signMessage(keccak256(enc));
      console.log("newSign", newSign);
      obj.params[0].signature = newSign; // Modify the initCode property
      const updatedJsonString = JSON.stringify(obj); // Convert the updated object back to a JSON string
      console.log(updatedJsonString);
      fs.writeFile(
        "exec.json",
        JSON.stringify(JSON.stringify(obj)),
        (err: any) => {
          if (err) {
            console.error("Error writing to file:", err);
          } else {
            console.log("Data has been written to", "exec.json");
          }
        }
      );
      request.post(
        {
          url: bundlerRpcUrl,
          body: updatedJsonString,
          headers: {
            "Content-Type": "application/json",
          },
        },
        (error: any, response: any, body: any) => {
          if (error) {
            console.error("Error sending request:", error);
          } else {
            console.log("Response body:", body);
          }
        }
      );
    } catch (error) {
      console.error("Error parsing or updating JSON:", error);
    }
  }
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
