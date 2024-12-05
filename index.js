"use strict";
class Bank {
    constructor(name) {
        this.name = name;
        this.branches = [];
    }
    addBranch(branch) {
        this.branches.push(branch);
        console.log(`this [${branch.name}] has been added successfully!`);
    }
    getBranches() {
        return JSON.stringify(this.branches, null, 2);
    }
}
class Branch {
    constructor(name) {
        this.name = name;
        this.customer = [];
    }
    getName() {
        return this.name;
    }
    addCustomer(NewCustomer) {
        this.customer.push(NewCustomer);
    }
    toJSON() {
        return {
            name: this.name,
            customers: this.customer, // Serialize customer details
        };
    }
}
class Customer {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.transaction = [];
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getTransaction() {
        return this.transaction;
    }
    getBalance() {
        let balance = 0;
        this.transaction.forEach((e) => {
            // go through each transaction in the array
            balance += e.amount; // Add current transaction to the balance
        });
        return balance; // Return the total balance
    }
    addTransaction(transaction) {
        if (transaction.amount < 0 &&
            Math.abs(transaction.amount) > this.getBalance()) {
            return "no suficient balance"; // Rejects the transaction if the amount exceeds the balance
        }
        this.transaction.push(transaction);
        return " transaction added successfully"; // Adds the transaction if the amount is positive
    }
    toJSON() {
        return {
            name: this.name,
            id: this.id,
            balance: this.getBalance(), // Include dynamic balance
            transaction: this.transaction,
        };
    }
}
class Transaction {
    constructor(amount, date) {
        this.amount = amount;
        this.date = date;
    }
}
const bank01 = new Bank("myBank");
const branch01 = new Branch("Downtown Branch");
const branch02 = new Branch("Abdullah Branch");
console.log("//----------------------LevelOne---------");
bank01.addBranch(branch01);
bank01.addBranch(branch02);
let getAllBranches = bank01.getBranches();
console.log("LevelOne: " + getAllBranches);
console.log("//----------------------LevelTwo---------");
const customer01 = new Customer("Turkiano", 0);
branch01.addCustomer(customer01);
//to get the updated branches
getAllBranches = bank01.getBranches();
console.log("LevelTwo: " + getAllBranches);
console.log("//----------------------LevelThree---------");
console.log("The balance for " + customer01.name + "  is " + customer01.getBalance());
console.log(customer01.getBalance()); // Output: 0
console.log(customer01.addTransaction(new Transaction(100, "04-12-2024"))); // Deposit 100
console.log(customer01.getBalance()); // Output: 100
console.log(customer01.addTransaction(new Transaction(-50, "05-12-2024"))); // Withdraw 50
console.log(customer01.getBalance()); // Output: 50
console.log(customer01.addTransaction(new Transaction(-100, "06-12-2024"))); // Attempt to withdraw 100
// Output: "Insufficient balance"
console.log(customer01.getBalance()); // Output: 50
getAllBranches = bank01.getBranches();
console.log("LevelThree: " + getAllBranches);
