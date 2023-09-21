const { execSync } = require("child_process");

function executeGitCommand(command) {
  return execSync(command)
    .toString("utf8")
    .replace(/[\n\r\s]+$/, "");
}

const branch = executeGitCommand("git rev-parse --abbrev-ref HEAD");

console.log(branch);
console.log(process.env);

if (branch === "staging") {
  console.log("staging!!");
  module.exports = {
    branches: ["staging"],
    plugins: [
      "@semantic-release/commit-analyzer",
      [
        "@semantic-release/npm",
        {
          npmPublish: false,
        },
      ],
      "@semantic-release/git",
    ],
  };
} else {
  console.log("master!!");
  module.exports = {
    branches: ["master"],
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/github",
      "@semantic-release/git",
    ],
  };
}
