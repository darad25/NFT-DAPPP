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
const contractAddress = '0xeaDAA842467028D51fAe2f838F56515540F00F79';

// Create a contract instance
const NFTju = new ethers.Contract(contractAddress, abi, signer);

// // Get the NFT Metadata IPFS URL
// const tokenUri = 'https://api-call-virid.vercel.app';  its meant to ne in the deployed contract not mint script

// Call mintNFT function
const mintNFT = async () => {
    let nftTxn = await NFTju.mint(signer.address, tokenUri)
    await nftTxn.wait()
    console.log(`NFT Minted! Check it out at: https://goerli.etherscan.io/tx/${nftTxn.hash}`)
}

mintNFT()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

// //Required modules
// const express = require('express');
// const fs = require('fs');
// const app = express();

// //nft data, i put them in arraya spo they can be easily gotten via their token ID
// const tokenNames = ['eye1', 'eye2', 'eye3', 'eye4', 'eye5']
// const imageshash = ['QmVVQfgggha37KoCmRquDTdKzL1h5TKibAkKt7bsG1zykV', 'QmWLSXTKSi4qdRtduGgzQrXFkRm54KBdddpoH4MqP3Jmyr', 
// 'Qmc4suPtD9ZuSjtUZNerBvfBqmU4a7xnToiy7VPUo4K4tk', 'QmaqULX1e3B982khsjcnyDV9qPVLdmCYonhGLEViUmkQXD', 'QmbFhLR5C6BmTW7apgDMVmGozLuEUZwoezcgHQeULT59M5']
// const attributes = ['Crown, star', 'Helmet, shoe', 'Vans, sneakers', 'nike, original', 'yeezy, adidas'] // EMPTY CAUSE ITS QUITE A LOT TO THINK OF DIFFERENT ATTRIBUTES FOR DIFFERENT TOKENS, IF YOU WILL DO THIS, JUST GROUP THE ATTRIBUTES INTO DIFFERENT OBJECTS OT ARRAYS FOR EACH TOKEN INSIDE THE ATTRIBUTE ARRAY 


// //Getting the uploaded file via hash code.
// app.get(`/tokens/:tokenId`, function(req, res) {
//     res.send( 
//         {
//             name: tokenNames[req.params.tokenId],
//             description: "This lootbox contains some OpenSea Creatures! It can also be traded!",
//             image: `ipfs.io/ipfs/${imageshash[req.params.tokenId]}`, //you can do this or `https://ipfs.io/ipfs/QmSDTC7qt8UK5yadxo6u93xpuSUCLtgzjMaTKxUNfDhdSa/${req.params.tokenId}.png` since QmSDTC7qt8UK5yadxo6u93xpuSUCLtgzjMaTKxUNfDhdSa is the folfer hash of all the images. 
//             // external_url: 'https://example.com/?token_id=%s' % token_id,
//             attributes: attributes[req.params.tokenId],
//         }
//        ); 
// }) 

// app.listen(3000, () => console.log('App listening on port 3000!')) 






// //Connceting to the ipfs network via infura gateway
// const ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'})



// //This hash is returned hash of addFile router.
// const validCID = 'HASH_CODE'

// ipfs.files.get(validCID, function (err, files) {
//     files.forEach((file) => {
//       console.log(file.path)
//       console.log(file.content.toString('utf8'))
//     })
//   })

// var express = require('express');
// var app = express();

// //nft data, i put them in arraya spo they can be easily gotten via their token ID
// const tokenNames = ['eye1', 'eye2', 'eye3', 'eye4', 'eye5']
// const imageshash = ['QmVVQfgggha37KoCmRquDTdKzL1h5TKibAkKt7bsG1zykV', 'QmWLSXTKSi4qdRtduGgzQrXFkRm54KBdddpoH4MqP3Jmyr', 
// 'Qmc4suPtD9ZuSjtUZNerBvfBqmU4a7xnToiy7VPUo4K4tk', 'QmaqULX1e3B982khsjcnyDV9qPVLdmCYonhGLEViUmkQXD', 'QmbFhLR5C6BmTW7apgDMVmGozLuEUZwoezcgHQeULT59M5']
// const attributes = [] // EMPTY CAUSE ITS QUITE A LOT TO THINK OF DIFFERENT ATTRIBUTES FOR DIFFERENT TOKENS, IF YOU WILL DO THIS, JUST GROUP THE ATTRIBUTES INTO DIFFERENT OBJECTS OT ARRAYS FOR EACH TOKEN INSIDE THE ATTRIBUTE ARRAY 


//  This is how opensea wants the standard nft api response to be.
// ({
//     'name': "Creature Loot Box",
//     'description': "This lootbox contains some OpenSea Creatures! It can also be traded!",
//     'image': image_url,
//     'external_url': 'https://example.com/?token_id=%s' % token_id,
//     'attributes': attributes
// })


// app.get(`/tokens/:tokenId`, function (req, res) {
//       res.send( 
//         {
//             name: tokenNames[req.params.tokenId],
//             image: `ipfs.io/ipfs/${imageshash[req.params.tokenId]}` //you can do this or `https://ipfs.io/ipfs/QmSDTC7qt8UK5yadxo6u93xpuSUCLtgzjMaTKxUNfDhdSa/${req.params.tokenId}.png` since QmSDTC7qt8UK5yadxo6u93xpuSUCLtgzjMaTKxUNfDhdSa is the folfer hash of all the images. 
//         }
//        );
// })


// const port = 3031
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })



  //simple api is done, now you should run this locally by typing 'node nftapi.js' 
  //in command prompt. make sure to navigate to the exact folder where the file is using cd src/nftmint/api
  // test in browser by going to this link  http://localhost:3031/tokens/2, number at the back can be any tokenId, 1,2 or whatever 
  //after it works fine in local host you must deploy api to heroku, vercel or any other remote server
  // https://devcenter.heroku.com/articles/deploying-nodejs
  // https://shadowsmith.com/guides/how-to-deploy-an-express-api-to-vercel