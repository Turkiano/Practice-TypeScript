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
  customers: [];

  constructor(name: string) {
    this.name = name;
    this.customers = Customer [];
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
  transctions = Transaction[];
  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
    this.transctions;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getTranscations() {
    return this.transctions;
  }

  addTransaction(transction) {
    if (transction.amount > 0) {
      this.transctions.push(transction);
      return "transaction added";
    }
  }
}


class Transaction{

}