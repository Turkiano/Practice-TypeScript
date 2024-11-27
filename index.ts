class Bank {
  name: string;
  branches: Branch[];

  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }

  //Create a new branch method
  addBranch(branch: Branch) {
    this.branches.push(branch);
  }
  //Read a all branches method
  getBranches() {
    return JSON.stringify(this.branches, null, 2);
  }
}

class Branch {
  name: string;
  customers: Customer[];

  constructor(name: string) {
    this.name = name;
    this.customers = [];
  }

  getName() {
    return this.name;
  }

  addCustomer(customer: Customer) {
    this.customers.push(customer);
  }
}

class Customer {
  name: string;
  id: string;
  transactions: Transaction[];
  constructor(name: string, id: string) {
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

  addTransaction(transaction: Transaction) {
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
  amount: number;
  date: string;
  constructor(amount: number, date: string) {
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
console.log("Branches in bank:", bank.getBranches());
