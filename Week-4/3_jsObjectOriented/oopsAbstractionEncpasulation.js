// Define the BankAccount class
class BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.accountHolderName = accountHolderName;
    }
}

// Define the CheckingAccount class as a subclass of BankAccount
class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName);
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}

// Define the SavingsAccount class as a subclass of BankAccount
class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName);
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance - amount < 0) {
            console.log("Withdrawal failed. Insufficient balance.");
        } else {
            this.balance -= amount;
        }
    }

    getBalance() {
        return this.balance;
    }
}

// Create instances of CheckingAccount and SavingsAccount
const checkingAccount = new CheckingAccount("C12345", 1000, "John Doe");
const savingsAccount = new SavingsAccount("S67890", 500, "Jane Smith");

// Perform operations and log results
checkingAccount.deposit(200);
checkingAccount.withdraw(100);
console.log(`Checking Account Balance: $${checkingAccount.getBalance()}`);

savingsAccount.deposit(300);
savingsAccount.withdraw(200);
console.log(`Savings Account Balance: $${savingsAccount.getBalance()}`);
