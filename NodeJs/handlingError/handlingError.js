// error handling is simply a way to keep track of whatever will break the code
// errors can be handled using a callback, async/await or a promise. we can also use a condition like if/else to keep track of errors.

const fs = require("fs");

// get the document
let myDocument = "./callbackTests.txt";

// implement the read operation with a callback
fs.readFile(myDocument, "utf8", (error, data) => {
  // handle irregular document errors
  if (error) {
    console.log("Message: " + error);
    console.log("Message: Unable to read file " + myDocument);
  } else {
    console.log(data);
  }
});
