//// Logical OR (||)
////Returns TRUE if one of the operands is TRUE

// let highIncome = false;
// let goodCreditScore = false;
// let eligableForLoan = highIncome || goodCreditScore;
// console.log("Eligable", eligableForLoan);

// //NOT (!)
// let applicationRefused = !eligableForLoan;
// console.log("Application Refused", applicationRefused);

//Read, Write, Execute
//00000100
//00000110
//00000111

const readPermission = 4;
const writePermisson = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | writePermisson;
console.log(myPermission);

let message = myPermission & readPermission ? "yes" : "no";

console.log(message);
