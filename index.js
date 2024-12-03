"use strict";
class Bank {
    constructor(name) {
        this.name = name;
        this.branches = [];
    }
    addBranch(branch) {
        this.branches.push(branch);
        console.log(`this${branch}has been added successfully!`);
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
}
class Customer {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.transaction = [];
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
bank01.addBranch(branch01);
bank01.addBranch(branch02);
const branchesJson = bank01.getBranches();
console.log(branchesJson);
