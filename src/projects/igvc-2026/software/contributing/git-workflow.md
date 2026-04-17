# Git Workflow

---

## Background

We follow a specific workflow([Definition](#definitions)) to keep our projects organized and structured. This structure makes it simpler for members to contribute as well as for leaders to manage those contibutions.

---

## References

*Links to helpful materials to learn more about topics/tools referenced in this guide.*

- Simple Guide for [Git on W3Schools](https://www.w3schools.com/git/).
- Simple Guide for [Bash Commands on W3Schools](https://www.w3schools.com/bash/bash_commands.php). *You only need the "Basic Commands" section.*

---

## Brief Overview of Our Workflow Steps

1. Fork the repository [Jump](#forking-the-repository-step-1)
2. Clone Your Fork [Jump](#cloning-your-fork-step-2)
2. Create branch on the fork [Jump](#creating-a-branch-step-3)
3. Make changes to the code [Jump](#making-changes-to-code-step-4)
4. Make commits to the branch [Jump](#commiting-your-changes-step-5)
5. Push to your fork [Jump](#push-your-commits-to-your-fork-step-6)
6. Open pull request [Jump](#open-a-pull-request-step-7)
7. Wait for pull request review [Jump](#wait-for-reviews-step-8)

---

## Contribution Tutorial

### Forking the Repository (Step 1)

*Think of forking on Git as making a copy of an entire repository([Definition](#definitions)).*

Start your contribution by forking the repository you desire to contribute to. 
Do this by navigating to the repository page on our [GitHub](https://github.com/oaklandrobotics) and clicking the "Fork" button near the top of the page. 

Normally, you can leave all of the default options such as repository name and
description as they are. You can finalize your new fork by clicking the green "Create Fork" button.

Now, you will see your new fork as a repository on your own GitHub account page.

### Cloning Your Fork (Step 2)

To work on your contribution, you must clone/copy your fork from the GitHub website to your local computer.

*If you are on Windows, it is recommended to use the GitBash terminal app(Normally comes with Git on Windows) for the easiest experience.*

1. From your fork's web page, click on the green "Code" button. Then copy the provided link.
2. Open your computer's terminal and navigate to the folder where you wish to store your fork. I will use the example of cloning the ros_ora26 repository for the following example commands.
3. Create a folder named ros_ora26 with a sub-folder named src with this command:
```
mkdir -p ros_ora26/src
```
- The `-p` option allows you to create a path of empty folders rather than only one at a time.

4. Clone the fork using this command:
```
git clone <your-copied-url> src
```
- Adding a folder name(`src`) to the end of the clone command instructs git to clone the repository inside of the specified `src` folder. Without specifying a folder name, Git will create a new folder and place the repository inside that new folder.

### Creating a Branch (Step 3)

Now, we can create a new branch on our local computer which will hold our specific contribution changes. A Git Branch is like an organized bag housing a collection of project edits/changes.

Your branch name should be descriptive of what will be inside of it while also being brief. Here are some examples:
- A branch name for an update to git documentation: `update-git-docs`
- A branch name for an update to nav configuration: `update-nav-config`
- A branch name for integrating the Zed camera: `zed-camera-integration`

To execute any `git` command on our system, we must be inside of a Git repository folder. The easiest way to tell if you are in the right folder is by executing the `git status` command. If this shows output such as your current branch and changes, you are in the right folder. If you are in the wrong folder, this command will give an error.

Following my ros_ora26 example, the repository folder is the `src` folder that we cloned the fork into. 
1. Move into the `src` folder with this command:
```
cd src
```
2. Create a branch:
```
git checkout -b <new-branch-name>
```
*This command will create the new branch and switch to it automatically.*
*Follow [this guide](https://www.w3schools.com/git/git_branch.asp?remote=github) for more detailed functionality.*

### Making Changes to Code (Step 4)

Now you are ready to start modifying files and adding your changes. 

The structure of the workflow thus far is as follows: 

`our repository >> your fork >> your branch >> your changes`

Meaning, the changes you make will reside on your branch that you created. Your branch that you created will reside on
the fork that you created. Finally, the fork that you created is a copy of the repository that you wish to
contribute to.

**Note:** Since a Git Branch is used as a contained bag of changes for a given project. It is important that all of the changes within it are specific. This means that a branch named `update-git-docs` should only include changes that relate to the updates for the git docs. It should not contain changes to the nav config for example. Those changes should be contained within the `update-nav-config` branch.

### Commiting Your Changes (Step 5)

A commit in Git is like a checkpoint in a video game. When you make a commit, the commit contains the saved changes you made as well as a snapshot of the entire project from when the commit was made.

A commit also contains a commit message. This is a brief and descriptive note added by the developer to explain what was added/modified/removed in the project within this commit(checkpoint). We recommend the following format for commit messages: `<type>: <short description>`

**Types:**
- `feat` -- A new feature
- `fix` -- A bug fix
- `docs` -- Documentation
- `style` -- Code style changes such as formatting
- `refactor` -- Code change that does not add a feature or fix a bug (refactoring)
- `perf` -- Performance improvements
- `test` -- Adding or modifying tests
- `build` -- Build system (CMake, etc)
- `chore` -- Routine tasks
- `revert` -- reverts a previous commit

We recommend that you make a commit when you reach a key turning point in your work. For example, on the `update-nav-config` branch, I may add the nav config itself along with modifications to README files regarding my update. For this example I would make the following commits:

1. My first commit would be made after I add the config file for the nav.
    - Example commit message: `feat: Add config file for the nav plugin.`
2. My second commit would be made after I make the corresponding changes to the readme files.
    - Example commit message: `docs: Add instructions for using the nav plugin.`

**Create a Commit:**
To commit changes you have made in the code, follow these command steps:
Also, reference [this guide](https://www.w3schools.com/git/git_staging_environment.asp?remote=github) for more detailed functionality.
1. Check the status of the [staging area](#definitions):
```
git status
```

2. If the staging area only contains changes that you would like to add; add them with this command:
```
git add .
```
*We recommend to run `git status` again to ensure that the files added match your intentions.*

3. Commit your changes with the following command:
```
git commit -m "<your-commit-message>"
```

### Push Your Commits to Your Fork (Step 6)

Up to this point, your commits only exist on your local computer. To copy them to your GitHub account (remote repository), you must 'push' them. This is performed using the `git push` command.

If you are pushing your commits on a branch that you just created locally, run this command:
```
git push --set-upstream origin <your-branch-name>
```
*This tells Git where to copy your commits when you use the `git push` command.*

### Open a Pull Request (Step 7)

Now that your branch is on your fork which is on your own GitHub account. You can now create a pull request. Think of a pull request as you notifying our team repository(what you originally created the fork on) that you have a collection of changes/improvements that you would like our team repository to merge("pull") from your fork.

We recommend creating the pull request using th GitHub website. You can use this [specific guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) to walk through creating the request.

### Wait For Reviews (Step 8)

Per our workflow, we do not allow pull requests to be merged into the team repository without at least one code review. A code review is when another team member reviews and tests your code. The reviewer is like a 'second set of eyes' that will check your code for any missed errors/workflow issues/bugs/etc.

If the reviewer's tests are not successful or they spot an issue, they will leave a comment on your pull request on the GitHub website. When the reviewer's tests are successful and they do not spot any complications, they will submit a review approval. Then, they will merge your pull request into the team repository.

Once your branch is merged into the team's repository, you are safe to [delete the branch you created on your fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository). You can then [update your fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) with the new changes from the team's repository using the GitHub website.

---

## Definitions

- Workflow: a structured, repeatable sequence of automated tasks, rules, and actions designed to achieve a specific outcome.

- Repository: a centralized digital storage location used to manage, track, and collaborate on a project's assets, including source code, documentation, and configuration files.

- Staging Area: A term used by Git to reference project changes made that are to be included/excluded to the next commit.

