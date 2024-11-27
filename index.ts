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
    this.customers = [];
  }
}
