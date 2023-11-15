// main application
// import module
// method 1 (dot notation)
const myAddition = require('./maths');
const mySubtraction = require('./maths');

// add two numbers
let firstNumber = 5;
let secondNumber = 20;
let result = myAddition.add(firstNumber, secondNumber);
console.log(result);

// sub two numbers
let a = 5;
let b = 20;
let solution = mySubtraction.sub(a, b);
console.log(solution);

// // method 2 {destructuring}
// const { add, sub } = require("./maths");

// // add two numbers
// let firstNumber = 5;
// let secondNumber = 20;
// let result = add(firstNumber, secondNumber);
// console.log(result);

// // subtract two numbers
// let a = 10;
// let b = 20;
// let solution = sub(a, b);
// console.log(solution);
