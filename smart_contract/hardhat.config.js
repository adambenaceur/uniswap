require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.rinkeby_url, //alchemy api-url using rinkeby testnet
    
      accounts: [
        process.env.private_key //your own metamask private_key
      ],
    },
  },
};
