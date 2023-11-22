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
  
    const mint = async () => {
      const Labi = abi.Labi;
      const contractAddress = "ffcac71d0d7ae3fe567eb27fc05800c560a126543d5006f9cde84e9a496bfe0f"; //addr of contract to call
      const web3 = new Web3(window.ethereum);
  
      const contractInstance = new web3.eth.Contract(abi, contractAddress);
  
        mint("0xeaDAA842467028D51fAe2f838F56515540F00F79", "2") // check mint func in sol file, you hve to provide the accepted args for it to work 
        .send({
          // from: account,
        })
        .on("transactionHash", (hash) => {
          console.log("tx hash", hash);
        })
        .once("confirmation", function (confirmationNumber, receipt) {
          console.log("Transaction confirmed", confirmationNumber);
          console.log("tx receipt", receipt);
        })
        .on("error", function (error, receipt) {
          console.log("Transaction failed, try again", error);
        });
    }
  
  export default loadWeb3;