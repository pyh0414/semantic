const { execSync } = require("child_process");

function executeGitCommand(command) {
  return execSync(command)
    .toString("utf8")
    .replace(/[\n\r\s]+$/, "");
}

const branch = executeGitCommand("git rev-parse --abbrev-ref HEAD");

console.log(branch);

if (branch === "staging") {
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
  module.exports = {
    branches: ["master"],
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
    ],
  };
}
