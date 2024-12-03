"use strict";
class Bank {
    constructor(name) {
        this.name = name;
        this.branch = [];
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
