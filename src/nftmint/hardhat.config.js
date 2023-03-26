
require ("@nomicfoundation/hardhat-toolbox");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = process.env.API_KEY; 

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = { 
      solidity : "0.8.9",
      networks : {
         sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.API_KEY}`,
            accounts: [process.env.PRIVATE_KEY]
         }     
  }
};  