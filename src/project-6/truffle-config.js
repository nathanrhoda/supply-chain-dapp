require('dotenv').config();
var HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonicmeta = process.env["MNEMONIC-META"];
var mnemonic = process.env["MNEMONIC"];//"game adjust nut session alert found rigid canvas hurdle enforce stone range"
var tokenKey = process.env["ENDPOINT_KEY"];

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id      
    },     
    rinkeby:{
      host: "localhost",
      provider: function() {
        return new HDWalletProvider(mnemonicmeta, "wss://rinkeby.infura.io/ws/v3/" + tokenKey);
      },
      network_id:4,
      gas: 6721975,
      gasPrice: 10000000000,                  
    },
  },
  mocha: {
    timeout: 100000         
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};