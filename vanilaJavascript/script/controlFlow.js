// control flow
// This is just a way to determine how statement and code blocks are executed.

// Divisions of control flow
// Conditions
// if condition
let y = 10;
if (y > 18) {
  console.log("You are an adult.");
}

// else condition
let x = 10;
if (x > 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

// Loops
// while
// initializer
count = 0;
while(count < 11){
    // show to the console the value of the count.
    console.log("Count:", count);
    // increment the count based on the condition
    count++;
}

// show to the console all the even numbers between 0 and 11
let numbers = 0;
while (numbers < 11) {
  console.log("Number:", numbers);
  // numbers++;
  if (numbers == 5) {
    console.log("Breakpoint");
    break;
  }
  numbers = numbers + 1;
}

// do-while
// initialize
let myNumber = 11;
do{
    console.log("Number:", myNumber);
    myNumber = myNumber + 1;
}while(myNumber < 11);

// for
for (let x = 0; x < 11; x++) {
  console.log("Number: ", x);
  if (x == 5) {
    console.log("Breakpoint");
    break;
  }
}

// Take home exercise
// write a javascript program that shows all the prime numbers between 1 and 100.

// write a javascript program that shows all the leap years between 1900 and 2023