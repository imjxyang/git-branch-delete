A command-line tool to delete local Git branches, excluding specified branches.

### Installation

```bash
npm install -g @itsjxyang/git-branch-delete
```

### Usage

To run the git-branch-delete command, use the following syntax:

```
git-branch-delete
```

You will be prompted to enter the branches you want to keep (space-separated). If you leave the input empty, the default branch 'master' will be excluded.
The tool will display all the branches, excluding the specified branches, and then delete them.

### License

This project is licensed under the MIT License.
