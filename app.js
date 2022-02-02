const getNotes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

//customize yargs version
yargs.version("1.1.0");

//create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note!");
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note!");
  },
});

//create list command

yargs.command({
  command: "list",
  describe: "List the note",
  handler: function () {
    console.log("Listing the notes!");
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "Read the notes",
  handler: function () {
    console.log("Reading the notes!");
  },
});

// add,remove,red,list notes...

console.log(yargs.argv);
