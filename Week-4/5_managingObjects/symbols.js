let transactionCounter = 0;

function generateTransactionId() {
  const uniqueId = `TRANSACTION_ID_${++transactionCounter}`;
  return Symbol(uniqueId);
}

// Example usage:
const transaction1 = generateTransactionId();
console.log(transaction1); // Symbol(TRANSACTION_ID_1)

const transaction2 = generateTransactionId();
console.log(transaction2); // Symbol(TRANSACTION_ID_2)

const transaction3 = generateTransactionId();
console.log(transaction3); // Symbol(TRANSACTION_ID_3)
