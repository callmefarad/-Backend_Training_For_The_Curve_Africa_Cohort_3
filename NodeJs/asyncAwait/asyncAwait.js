// working with async/await
// import the file system module
const fs = require("fs");

// using function declaration
async function readFromFile() {
  try {
    await fs.readFile("./testFile.txt", "utf8", (error, data) => {
      if (error) {
        console.log("This file does not exist.");
      } else {
        console.log(data);
      }
    });
  } catch (e) {
    console.log(e);
  }
}

readFromFile();

// using arrow function
const readFromFile = async () =>{
    try {
        await fs.readFile("./testFile.txt", "utf8", (error, data) => {
          if (error) {
            console.log("This file does not exist.");
          } else {
            console.log(data);
          }
        });
      } catch (e) {
        console.log(e);
      }
}

readFromFile();
