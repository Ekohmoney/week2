import { ethers } from "ethers";

// Task 1: Get Three Networks
const mainnetProvider = ethers.getDefaultProvider("mainnet");
const sepoliaProvider = ethers.getDefaultProvider("sepolia");
const goerliProvider = ethers.getDefaultProvider("goerli");

// Task 2: Get Balance of account
const address = "0x6FF8E4DB500cBd77d1D181B8908E022E29e0Ec4A";

async function getAccountInfo(provider: ethers.AbstractProvider) {
  const accountBalance = await provider.getBalance(address);
  const transactionCount = await provider.getTransactionCount(address);
  const currentBlock = await provider.getBlockNumber();

    console.log({
      accountBalance: ethers.formatEther(accountBalance),
      transactionCount,
      currentBlock,
    });

 
}

getAccountInfo(mainnetProvider);
getAccountInfo(sepoliaProvider);
getAccountInfo(goerliProvider);

// async function getBalance(provider: ethers.AbstractProvider) {
//   const accountBalance = await provider.getBalance(address);
//   console.log(ethers.formatEther(accountBalance));
// }

// async function getTransactionCount(provider: ethers.AbstractProvider) {
//   const transactionCount = await provider.getTransactionCount(address);
//   console.log(transactionCount);
// }

// async function getBlockNumber(provider: ethers.AbstractProvider) {
//   const BlockNum = await provider.getBlockNumber();
//   console.log(BlockNum);
// }

// getBalance(mainnetProvider);
// getBalance(sepoliaProvider);
// getBalance(goerliProvider);

// getTransactionCount(mainnetProvider);
// getTransactionCount(sepoliaProvider);
// getTransactionCount(goerliProvider);

// getBlockNumber(mainnetProvider);
// getBlockNumber(sepoliaProvider);
// getBlockNumber(goerliProvider);