
// - Global scope
let greeting = "Hello Ubani";

// morning function
function morningGreeting() {
  // local scope
  let greeting = "good morning";
  console.log(greeting);
}

// afternoon function
function afternoonGreeting() {
  // local scope
  let greeting = "good afternoon";
  console.log(greeting);
}

// confusion function
function confusionGreeting() {
  console.log(greeting);
}

// display greeting
console.log(greeting);

// call the function
morningGreeting();
afternoonGreeting();
confusionGreeting();

// const myFunction = () =>{

// }

