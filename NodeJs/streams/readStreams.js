// readStream
// import the file system module (fs)
const fs = require("fs");

// read a file
const myReadStream = fs.createReadStream("./test.txt", "utf8");

// read the file in chunks
myReadStream.on("data", (chunk) => {
  console.log(`OurChunk: ${chunk}`);
});

// end the read stream operation
myReadStream.on("end", () => {
  console.log("End of our chunk");
});


callmefarad
