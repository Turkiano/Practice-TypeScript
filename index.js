"use strict";
//-------------------Public Modifier -----------------------
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
const dog = new Animal("Dog");
console.log(dog.name); // Accessible outside the class
dog.speak(); // Accessible outside the class
//-------------------Private Modifier -----------------------
class Person {
    constructor() {
        this.id = "123er456";
    }
    showId() {
        console.log(this.id); // Accessible within the class
    }
}
const personOne = new Person();
personOne.showId(); // Error: Property 'id' is private
//-------------------Protected Modifier -----------------------
class Empolyee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Doctor extends Empolyee {
    details() {
        // Accessible within the subclass
        console.log(`Name: ${this.name}, Id: ${this.id}`);
    }
}
const Doctor01 = new Doctor("01", "Dr. Turki");
Doctor01.details(); // Error: Property 'id' is protected
//-------------------ReadOnly -----------------------
class Teacher {
    constructor(id, name, salary) {
        this.id = id; // Allowed in the constructor
        this.name = name;
        this.salary = salary;
    }
    details() {
        console.log(`Id: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`);
    }
}
const teacher01 = new Teacher("01", "Khalid", 12000);
teacher01.details(); // Error: Cannot assign to 'details' because it is a read-only property
