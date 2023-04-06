const fs = require("fs");

// console.log(
//   fs.readFile("file.txt", "utf8", (err, data) => {
//     console.log(err, data);
//   })
// );
fs.readFile("file.txt", "utf8", (err, data) => {
  console.log("Non Blocking Console: ", data);
});

console.log("This will call first because of Async Property of Node");

// console.log("This will call second because of Async Property of Node");

// console.log("This will call third because of Async Property of Node");

// console.log(
//   "File reading is taking long enough to run console above that can be avoided using readfile sync"
// );

const a = fs.readFileSync("file.txt", "utf8", (err, data) => {
  console.log(err, data);
});
console.log("synced call:  ", a);

console.log("This will call later because of readfile sync");

fs.writeFile("file.txt", "This is newly Written", () => {
  console.log("Written Successfully");
});
