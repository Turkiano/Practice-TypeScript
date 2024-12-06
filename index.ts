

//-------------------------Intersection Example--------------
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


console.log(student)




//-------------------------Union Type Example 01--------------

//two data types assigned to one single variable
function printMessage(message: string | number){
  return message;
}

printMessage("Success");
printMessage("Failed");
printMessage("Pending");
printMessage(200);
printMessage(404);



//-------------------------Union Type Example 02--------------
//a.declaring two data types for the local variable
type mesg = string | number 
//b. declaring values of the local variable
type Status = "Success" | "Failed" | "Pending" | 400 | 200

//c.declaring a function using the the above two types
function printMessage02(mesg: Status){
  return mesg;
}





