"use strict";
class Bank {
    constructor(name) {
        this.name = name;
        this.branches = [];
    }
    //Create a new branch method
    addBranch(branch) {
        this.branches.push(branch);
    }
    //Read a all branches method
    getBranches() {
        return JSON.stringify(this.branches, null, 2);
    }
}
class Branch {
    constructor(name) {
        this.name = name;
        this.customers = [];
    }
    getName() {
        return this.name;
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
}
class Customer {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.transactions = [];
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getTranscations() {
        return this.transactions;
    }
    addTransaction(transaction) {
        if (transaction.amount > 0) {
            this.transactions.push(transaction);
            return "transaction added";
        }
        if (transaction.amount > this.getBalance()) {
            return "no suficient balance";
        }
    }
    getBalance() {
        let balance = 0;
        this.transactions.forEach((transaction) => {
            balance += transaction.amount;
        });
        return balance;
    }
}
class Transaction {
    constructor(amount, date) {
        this.amount = amount;
        this.date = date;
    }
}
//Example Usage
const bank = new Bank("Turki's Bank");
const branch01 = new Branch("Downtown Branch");
bank.addBranch(branch01);
const customer01 = new Customer("Alice", "01");
branch01.addCustomer(customer01);
const deposit = new Transaction(500, "2024-11-27");
customer01.addTransaction(deposit);
console.log(`Balance for ${customer01.getName()}:`, customer01.getBalance());
