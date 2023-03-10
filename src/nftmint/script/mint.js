// async function mintNFT() { 
//     const [deployer] = await ethers.getSigners();
  
//     console.log("Deploying contracts with the account:", deployer.address);
  
//     console.log("Account balance:", (await deployer.getBalance()).toString());
    
//     const initbaseuri = "https://gateway.pinata.cloud/ipfs/QmSDTC7qt8UK5yadxo6u93xpuSUCLtgzjMaTKxUNfDhdSa";

//     const mintNFT = async () => {
//       let nftTxn = await NFTju.mintNFT(signer.address, initbaseuri)
//       await nftTxn.wait()
//       console.log(`NFT Minted! Check it out at: https://goerli.etherscan.io/tx/${nftTxn.hash}`)
//   }
  
  
//   mintNFT()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });

//   }

require('dotenv').config();
const ethers = require('ethers');

// Get Alchemy App URL
const API_KEY = process.env.API_KEY;

// Define an Alchemy Provider
const provider = new ethers.providers.AlchemyProvider('goerli', API_KEY)

// Get contract ABI file
const contract = require("../artifacts/contracts/NFTju.sol/NFTju.json");

// Create a signer
const privateKey = process.env.PRIVATE_KEY
const signer = new ethers.Wallet(privateKey, provider)


// Get contract ABI and address
const abi = contract.abi
const contractAddress = 'ffcac71d0d7ae3fe567eb27fc05800c560a126543d5006f9cde84e9a496bfe0f'

// Create a contract instance
const NFTju = new ethers.Contract(contractAddress, abi, signer)

// Get the NFT Metadata IPFS URL
const tokenUri = "https://gateway.pinata.cloud/ipfs/QmSX5gUaU3YnVwH37TQc9mRjHktJEspDJALZbWK6GNPGoL/1.json"

// Call mintNFT function
const mintNFT = async () => {
    let nftTxn = await NFTju.mintNFT(signer.address, tokenUri)
    await nftTxn.wait()
    console.log(`NFT Minted! Check it out at: https://goerli.etherscan.io/tx/${nftTxn.hash}`)
}

mintNFT()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

//Required modules
const ipfsAPI = require('ipfs-api');
const express = require('express');
const fs = require('fs');
const app = express();

//Connceting to the ipfs network via infura gateway
const ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'})

//Getting the uploaded file via hash code.
app.get('/getfile', function(req, res) {
    
    const imageshash = [
        {
            "id": 1,
            "HASH_CODE": 'QmVVQfgggha37KoCmRquDTdKzL1h5TKibAkKt7bsG1zykV'
        }
    
        {
            "id": 2,
            "HASH_CODE": 'QmWLSXTKSi4qdRtduGgzQrXFkRm54KBdddpoH4MqP3Jmyr'
        }
    
        {
            "id": 3,
            "HASH_CODE": 'Qmc4suPtD9ZuSjtUZNerBvfBqmU4a7xnToiy7VPUo4K4tk'
        }
    
        {
            "id": 4,
            "HASH_CODE": 'QmaqULX1e3B982khsjcnyDV9qPVLdmCYonhGLEViUmkQXD'
        }
    
        {
            "id": 5,
            "HASH_CODE": 'QmbFhLR5C6BmTW7apgDMVmGozLuEUZwoezcgHQeULT59M5'
        }
    ]


    //This hash is returned hash of addFile router.
    const validCID = 'HASH_CODE'

    ipfs.files.get(validCID, function (err, files) {
        files.forEach((file) => {
          console.log(file.path)
          console.log(file.content.toString('utf8'))
          document.getElementById("HASH_CODE").src = await loadImgURL("HASH_CODE", `/${id:id}.png`, 524288);
        })
      })

})

app.listen(3000, () => console.log('App listening on port 3000!')) 