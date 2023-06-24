const path = require("path");

console.log(path.sep); //my current path,output:\

const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath); //ouput:\content\subfolder\text.txt

const base = path.basename(filePath); //to get the last name
console.log(base); //output:text.txt

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt"); //absolute path
console.log(absolute); //output:C:\Users\LENOVO\Desktop\noteTuto\content\subfolder\text.txt
