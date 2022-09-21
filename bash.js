const fs = require("fs");
const ls = require("./ls.js");
const pwd = require("./pwd.js");
const cat = require("./cat.js");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const hardData = data.split(" ");
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (hardData[0] === "cat") {
    cat(this.hardData);
  }
  process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});
