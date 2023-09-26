const { execSync } = require("child_process");

function executeGitCommand(command) {
  return execSync(command)
    .toString("utf8")
    .replace(/[\n\r\s]+$/, "");
}

const branch = executeGitCommand("git rev-parse --abbrev-ref HEAD");

console.log(process.env);
console.log(branch);
