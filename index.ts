class Bank {
  name: string;
  branches: Branch[];

  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }

  addBranch(branch: Branch) {
    this.branches.push(branch);
    console.log(`this [${branch.name}] has been added successfully!`);
  }

  getBranches() {
    return JSON.stringify(this.branches, null, 2);
  }
}

class Branch {
  name: string;
  customer: Customer[];
  constructor(name: string) {
    this.name = name;
    this.customer = [];
  }

  getName() {
    return this.name;
  }

  addCustomer(NewCustomer: Customer) {
    this.customer.push(NewCustomer);
  }
}

class Customer {
  name: string;
  id: number;
  transaction: Transaction[];
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
    this.transaction = [];
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

const bank01 = new Bank("myBank");
const branch01 = new Branch("Downtown Branch");
const branch02 = new Branch("Abdullah Branch");

console.log("//----------------------LevelOne---------");

bank01.addBranch(branch01);
bank01.addBranch(branch02);
let getAllBranches = bank01.getBranches();
console.log("LevelOne: " + getAllBranches);
console.log("//----------------------LevelTwo---------");

//----------------------LevelTwo-------------------------
const customer01 = new Customer("Turkiano", 0);
branch01.addCustomer(customer01);

//to get the updated branches
getAllBranches = bank01.getBranches();
console.log("LevelTwo: " + getAllBranches);
