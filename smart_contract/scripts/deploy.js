const main = async () => {
  const transactionFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );
  const transaction = await transactionFactory.deploy();

  await transaction.deployed();

  console.log("Transaction deployed to:", transaction.address);
};

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

// 0x3aD3cfbd38072408c652188a4380324EF6eF76aA -- transaction block hash