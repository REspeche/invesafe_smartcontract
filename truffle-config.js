const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const apiKey = "0e030a743aa249619cc96aef2d1c71de";
const infuraURL = "https://ropsten.infura.io/v3/";

module.exports = {
  networks: {
    development: {
        //from: "", // Defaults to first address from Ganache
        host: "127.0.0.1",
        port: 8545,
        network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, infuraURL+apiKey)
      },
      network_id: 3,
      gas: 3000000,
      gasPrice: 10000000000
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.4",    // Fetch exact version from solc-bin (default: truffle's version)
      docker: false,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  }
};
