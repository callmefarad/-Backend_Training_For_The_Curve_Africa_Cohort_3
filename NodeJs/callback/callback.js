// using callback to implement an asynchronous program.

// import the fs module
const fs = require("fs");

// get the document
let myDocument = "./callbackTests.txt";

// implement the read operation with a callback
fs.readFile(myDocument, "utf8", (error, data) => {
  if (error) {
    console.log("Message: " + error);
    console.log("Message: Unable to read file " + myDocument);
  } else {
    console.log(data);
  }
});
