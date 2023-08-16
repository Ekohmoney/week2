import {ethers} from 'ethers.js';

//find the addrese of usdc from ethereum mainnet, return name symbol total supple 

const name = eitheres




    const provider = ethers.getDefaultProvider("mainnet");
    const DaiAddress = "Address";

// Define the USDC contract ABI (simplified)
const daiAbi = [
    "function totalSupply() view returns (uint256)",
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function decimals() external view returns (uint8)",
    "function balanceOf(address account) external view returns (uint256)"
];

// Create a contract object
const DaiContract = new ethers.Contract(DaiAddress, daiAbi, provider);

console.log("###############################");
console.log("Querying DAI token Details:");
console.log("###############################");

    const daiDetails2 = async () => {
    const daiName = await DaiContract.name();
    const daiSymbol = await DaiContract.symbol();
    const daiBalance = await DaiContract.balanceOf(DaiAddress);
    const daiTotalSupply = await DaiContract.totalSupply();
    const daiDecimal = await DaiContract.decimals();

    console.log("\nUsing async/await form");
    console.log("The name of DAI token is: ", daiName);
    console.log("The symbol of DAI token is: ", daiSymbol);
    console.log("The balance of DAI token is: ", ethers.formatEther(daiBalance));
    console.log("The total Supply of DAI token is: ", ethers.formatEther(daiTotalSupply));
    console.log("The decimal of DAI token is: ", ethers.formatUnits(daiDecimal));
}

daiDetails2();