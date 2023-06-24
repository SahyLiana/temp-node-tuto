const { readFile, writeFile } = require("fs");
console.log("start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //console.log(result);
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;
    writeFile(
      "./content/result-async.txt",
      `This is the async text ${first}, ${second}`,
      (err, result) => {
        if (err) {
          return;
        }
        // console.log(result);
        console.log("done with this task");
      }
    );
  });
});

console.log("Starting with the next task");
//output:start----starting with the next task---done with this task
