const { readFileSync, writeFileSync } = require("fs");
console.log("start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt", //it is going to create also the file if the file is not there, but if it is there, it overwrite the value
  `Here is the result: ${first},${second}`,
  { flag: "a" } //here it will append the result there
);
console.log("done with this task");
console.log("starting with the next one");
//output:start----done with this task----starting with the next one
