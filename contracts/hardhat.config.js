require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/IWYSqxdqOlKKSYtb0Pm2NZrPAvNVFgFg',
      accounts: ['98925bf4f8f74e14de7ceb9054eba663fabd4bce8cf5a6eea6d3983511ad7269']
    }
  }
};
