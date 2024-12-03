class Bank {
  name: string;
  branch: Branch[];

  constructor(name: string) {
    this.name = name;
    this.branch = [];
  }
}

class Branch {
  name: string;
  customer: Customer[];
  constructor(name: string) {
    this.name = name;
    this.customer = [];
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
