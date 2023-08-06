const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-mainnet.g.alchemy.com/v2/fTxkuelVKsi8eUlvM7KH9iYqt11NLBXVz"
);

const getAddress = async (address) => {
  const balance = await provider.getBalance(address);
  console.log(ethers.utils.formatEther(balance));
};

const getAccount = async (address) => {
  const type = await provider.getCode(address);

  if (type === "0x") {
    console.log("EOA Account");
  } else {
    console.log("Contract Account");
  }
};

getAddress("0xf4bfaf916a68b0fC859D63a319034C0f72A88a5C");
getAccount("0xf4bfaf916a68b0fC859D63a319034C0f72A88a5C");
