const getNotes = require("./notes.js");
const chalk = require("chalk");

const message = getNotes();
console.log(message);

console.log(chalk.black.bold.bgRed("Error"));
