//npm init OR npm init -y
//We need package.json to describe our projects and dependencies,crucial to share our project with others

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
