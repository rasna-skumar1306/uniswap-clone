require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/GaTZKyV8Me-vSbftI0Qaj3bov8qgcau_",
      accounts: [
        "b160edcaa10648a555cceea9db4eda91ad43394a3d1280556572b2cd009c0dbf",
      ],
    },
  },
};
