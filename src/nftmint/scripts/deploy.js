async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
    
    const name = "NFTju"; 
    const symbol = "N";
    const initbaseuri = "https://gateway.pinata.cloud/QmSDTC7qt8UK5yadxo6u93xpuSUCLtgzjMaTKxUNfDhdSa";

    const Token = await ethers.getContractFactory("NFTju");
    const token = await Token.deploy("NFTju", "N", "https://gateway.pinata.cloud/ipfs/QmSDTC7qt8UK5yadxo6u93xpuSUCLtgzjMaTKxUNfDhdSa");
  
    console.log("Token address:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });