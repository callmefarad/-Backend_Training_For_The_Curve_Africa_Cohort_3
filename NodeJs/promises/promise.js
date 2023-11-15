// using promise to implement an asynchronous program.

// import the fs module
const fs = require("fs").promises;

// get the document
const myDoc = "./promiseTest.txt";

// implement with a promise
fs.readFile(myDoc, "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("Message: ", e);
  });
