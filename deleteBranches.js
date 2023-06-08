#!/usr/bin/env node

const { execSync } = require("child_process");

const getAllBranches = () => {
  const output = execSync("git branch").toString();
  const branches = output.split("\n");
  return branches
    .map((branch) => branch.trim())
    .filter(
      (branch) =>
        branch !== "" && !branch.startsWith("*") && branch !== "master"
    );
};

const deleteBranch = (branch) => {
  execSync(`git branch -D ${branch}`);
  console.log(`Deleted branch: ${branch}`);
};

const deleteBranches = (branches) => {
  branches.forEach((branch) => deleteBranch(branch));
};

const main = () => {
  const branches = getAllBranches();
  console.log("All branches:");
  console.log(branches);
  console.log("Deleting branches...");
  deleteBranches(branches);
};

// 执行主函数
main();
