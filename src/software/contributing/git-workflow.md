# Git Workflow & Contributing Guidelines

Welcome to the team! To keep our codebase clean, organized, and maintainable, we follow a standardized Git workflow and contribution process. 


## 0. Helpful Links to Resources (Optional)

- We use Git as our version control system. You can interact with Git through either the [CLI](https://www.w3schools.com/git/) or a [GUI](https://code.visualstudio.com/docs/sourcecontrol/quickstart).
- Our codebase is hosted on GitHub. You can browse the repository and contribute changes through [pull requests](https://docs.github.com/en/pull-requests/reference/pull-requests).

## 1. Quick Overview of Workflow Steps

1. **Find or Create an Issue:** Express interest or define a task.
2. **Create a Feature Branch:** Branch directly off `main` in the primary repository.
3. **Make Changes & Commit:** Follow our structured commit message guidelines.
4. **Push Branch & Open a Pull Request (PR):** Link the issue and fill out the PR template.
5. **Code Review & Merge:** Address feedback, obtain approval, and merge.


## 2. Issue Management & Task Delegation

Before starting any work, ensure an issue exists for the task.

### Creating an Issue
- **Title:** Clear, concise summary of the task, bug, or feature request.
- **Description:** Include background information, requirements, steps to reproduce (for bugs), and expected behavior or completion criteria.

### Task Delegation & Claiming Issues
- We encourage members to claim issues that they are interested in and would like to work on. This gives you the freedom to explore areas of the project that interest you and develop skills you want to learn. If you're unsure what to work on or would like some direction, feel free to reach out to leadership and we can help find an appropriate issue or assignment.
- If you would like to work on an issue, [assign yourself](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users) to the issue on GitHub. You may also comment on the issue to give additional information if needed.
- This signals your interest to the rest of the team and prevents duplicate work.


## 3. Branching Guidelines

*Note: We use a **branching workflow** directly within the primary repository (no forking required).*

### Branch Setup
Create your branch directly off the latest `main` branch.

### Naming Conventions
Branch names must be descriptive, lowercase, hyphen-separated, and clearly indicate the scope of work:
- **Features / Integrations:** `zed-camera-integration`, `nav-behavior-tree`
- **Documentation:** `update-git-docs`, `readme-setup-guide`
- **Configuration:** `update-nav-config`, `ros2-control-params`
- **Bug Fixes:** `fix-odom-tf-leak`, `fix-lidar-launch`

> **Rule:** Keep branches focused on a single topic. Do not mix unrelated changes (e.g., navigation tweaks and documentation updates) in the same branch.


## 4. Commit Message Formatting

- **Commit Message Format:** Write clear, imperative commit messages (e.g., "Add user authentication" instead of "Added user authentication" or "Adding user authentication"). Think of the message as a command completing the sentence: "If applied, this commit will...".

- **Commit Principal:** Commit early and commit often. Make small, logical commits as you work to keep your history clean, easier to review, and simple to revert if necessary.

- For furthur guidance, follow the [ROS 2 contribution guidelines](https://docs.ros.org/en/jazzy/The-ROS2-Project/Contributing/Developer-Guide.html#implementation).

### Examples
- `Add missing transform link between map and odom.`
- `Remove depricated package.xml dependancy entries.`


## 5. Pull Requests (PRs) & Code Reviews

### Creating a Pull Request
1. Push your local branch to the central repository.
2. Open a Pull Request targeting the `main` branch.
3. **PR Title:** Keep it aligned with commit style, brief and imperative (e.g., `Integrate ZED camera package`).
4. **Linking Issues:** You **must link the issue** your PR addresses using GitHub's keyword auto-linking in the PR description:
   - Use keywords such as `Closes #<issue_number>`, `Fixes #<issue_number>`, or `Resolves #<issue_number>` (e.g., `Closes #42`).
   - Linking the issue automatically closes it once the PR is merged into `main`.

### Code Review Requirements
- All PRs require **at least one code review and approval** from a reviewer prior to merging.
- Reviewers will test, evaluate code quality, and ensure project guidelines are met.
- If changes are requested, commit the updates to your existing branch and push; the PR will update automatically.
- Once approved, the reviewer or author will merge the branch into `main` and delete the feature branch.