const readline = require("readline");
const { execSync } = require("child_process");

// Get all local branches (excluding specified branches)
const getAllBranches = (excludedBranches) => {
  const output = execSync("git branch").toString();
  const branches = output.split("\n");
  return branches
    .map((branch) => branch.trim())
    .filter(
      (branch) =>
        branch !== "" &&
        !branch.startsWith("*") &&
        !excludedBranches.includes(branch)
    );
};

// Delete a specified branch
const deleteBranch = (branch) => {
  execSync(`git branch -D ${branch}`);
  console.log(`Deleted branch: ${branch}`);
};

// Batch delete branches
const deleteBranches = (branches) => {
  branches.forEach((branch) => deleteBranch(branch));
};

// Read user input
const readUserInput = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(
      "Please enter the branches you want to keep (space-separated): ",
      (answer) => {
        rl.close();
        const excludedBranches =
          answer.trim() !== ""
            ? answer.split(" ").map((branch) => branch.trim())
            : ["master"];
        resolve(excludedBranches);
      }
    );
  });
};

// Main function
const main = async () => {
  const excludedBranches = await readUserInput();
  const branches = getAllBranches(excludedBranches);
  console.log("All branches:");
  console.log(branches);
  console.log("Deleting branches...");
  deleteBranches(branches);
};

// Execute main function
main();
