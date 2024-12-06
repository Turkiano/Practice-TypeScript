//delcaring a type 01
type Person = {
  name: string 
  age: number
}

//delcaring a type 02
type Student = {
  cohort: string
}
//Type aliases: can store anything
type PersonStudent = Person & Student

//assigning the aliases type to an object
const student: PersonStudent  = {
  name: 'John',
  age: 38,
  cohort: "C#"
}


