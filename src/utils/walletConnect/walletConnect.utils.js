import Web3 from "web3";
import { useState } from "react";
// import  abi  from "../../nftmint/artifacts/contracts/NFTju.sol/NFTju.json";
   
    const loadWeb3 = async () => {
      // const [account, setAccount] = useState();
      // const [networkId, setNetworkId] = useState("");
      if (window.ethereum) {
        //window.ethereum is metamask/dapp wallet service which is present in your browswer as long as you have the extensions installed.
        window.web3 = new Web3(window.ethereum);
        const web3 = window.web3;
        let accounts;
        console.log("present");
        try {
          accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
        } catch (error) {
          console.error(error);
          return;
        }
        // setAccount(accounts[0]);
  
        const networkID = await web3.eth.net.getId();
        // setNetworkId(networkID);
  
        console.log(networkID);
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        const web3 = window.web3;
  
        const accounts = await web3.eth.getAccounts();
        // setAccount(accounts[0]);
  
        const networkID = await web3.eth.net.getId();
        console.log("Network: ", networkID);
        // setNetworkId(networkID);
      } else {
        window.alert("please download metamask");
      }
    }
  
    //to do simple contract calls after laoding web3 you need the abi of the contract you want to call
    //using hardhat if you run 'npx hardhat compile' you get your abis generated for you in your artifacts folder in your repo
    //now i will call and send tx using NFT.sol
  
  export default loadWeb3;