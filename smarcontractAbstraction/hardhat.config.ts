import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import * as dotenv from "dotenv";

dotenv.config();


const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
        forking: {
            url: `https://rpc.ankr.com/polygon_mumbai`,
        },
    },
    gnosis: {
        url: `https://gnosis.api.onfinality.io/public`,
        chainId: 100,
      accounts: [process.env.PRIVATE_KEY as string]
    },
    goerli: {
        url: `https://goerli.blockpi.network/v1/rpc/public`,
        chainId: 5,
      accounts: [process.env.PRIVATE_KEY as string]
    },
    mumbai: {
        url: `https://rpc.ankr.com/polygon_mumbai`,
        chainId: 80001,
        accounts: [process.env.PRIVATE_KEY as string]
    },
  },
  
};





export default config;
