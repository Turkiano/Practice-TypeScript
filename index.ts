//-------------------Public Modifier -----------------------
class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Dog");
console.log(dog.name); // Accessible outside the class
dog.speak(); // Accessible outside the class

//-------------------Private Modifier -----------------------

class Person {
  private id: string = "123er456";
  showId(): void {
    console.log(this.id); // Accessible within the class
  }
}

const personOne = new Person();
personOne.showId(); // Error: Property 'id' is private

//-------------------Protected Modifier -----------------------

class Empolyee {
  protected id: string;
  public name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

class Doctor extends Empolyee {
  details():  void {
    // Accessible within the subclass
    console.log(`Name: ${this.name}, Id: ${this.id}`);
  }
}

const Doctor01 = new Doctor("01", "Dr. Turki");
Doctor01.details(); // Error: Property 'id' is protected

//-------------------ReadOnly -----------------------
class Teacher {
  public readonly id: string;
  public name: string;
  public salary: number;

  constructor(id: string, name: string, salary: number) {
    this.id = id;  // Allowed in the constructor
    this.name = name;
    this.salary = salary;
  }
  details(): void {
    console.log(`Id: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`)
  }
}


const teacher01 = new Teacher("01", "Khalid", 12000)
teacher01.details() // Error: Cannot assign to 'details' because it is a read-only property