"use strict";
//assigning the aliases type to an object
const student = {
    name: 'John',
    age: 38,
    cohort: "C#"
};
console.log(student);
//-------------------------Union Type Example 01--------------
//two data types assigned to one single variable
function printMessage(message) {
    return message;
}
printMessage("Success");
printMessage("Failed");
printMessage("Pending");
printMessage(200);
printMessage(404);
//c.declaring a function using the the above two types
function printMessage02(mesg) {
    return mesg;
}
