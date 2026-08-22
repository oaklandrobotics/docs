# Git Workflow & Contributing Guidelines

Welcome to the team! To keep our codebase clean, organized, and maintainable, we follow a standardized Git workflow and contribution process. 

---

## 1. Quick Overview of Workflow Steps

1. **Find or Create an Issue:** Express interest or define a task.
2. **Create a Feature Branch:** Branch directly off `main` in the primary repository.
3. **Make Changes & Commit:** Follow our structured commit message guidelines.
4. **Push Branch & Open a Pull Request (PR):** Link the issue and fill out the PR template.
5. **Code Review & Merge:** Address feedback, obtain approval, and merge.

---

## 2. Issue Management & Task Delegation

Before starting any work, ensure an issue exists for the task.

### Creating an Issue
- **Title:** Clear, concise summary of the task, bug, or feature request.
- **Description:** Include background information, requirements, steps to reproduce (for bugs), and expected behavior or completion criteria.

### Task Delegation & Claiming Issues
- We **do not** formally assign issues to team members up front.
- If you would like to work on an issue, **leave a comment on the issue thread** stating your intention (e.g., *"I'd like to work on this issue."*).
- This signals your interest to the rest of the team and prevents duplicate work.

---

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

---

## 4. Commit Message Formatting

We follow Conventional Commits standardizing the structure of commit messages:

```
<type>: <short, imperative description>
```

### Commit Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation updates only
- `style`: Code style/formatting changes (no logic changes)
- `refactor`: Code restructuring without changing functionality or fixing bugs
- `perf`: Code changes that improve performance
- `test`: Adding or modifying tests
- `build`: Changes affecting build systems (CMake, package.xml, dependencies)
- `chore`: Maintenance tasks, minor script adjustments
- `revert`: Reverts a previous commit

### Examples
- `feat: Add config file for the nav plugin`
- `docs: Update setup instructions for ROS 2 launch files`
- `fix: Correct frame_id mismatch in pointcloud publisher`

---

## 5. Pull Requests (PRs) & Code Reviews

### Creating a Pull Request
1. Push your local branch to the central repository.
2. Open a Pull Request targeting the `main` branch.
3. **PR Title:** Keep it aligned with your commit style (e.g., `feat: Integrate ZED camera package`).
4. **Linking Issues:** You **must link the issue** your PR addresses using GitHub's keyword auto-linking in the PR description:
   - Use keywords such as `Closes #<issue_number>`, `Fixes #<issue_number>`, or `Resolves #<issue_number>` (e.g., `Closes #42`).
   - Linking the issue automatically closes it once the PR is merged into `main`.

### Code Review Requirements
- All PRs require **at least one code review and approval** from a reviewer prior to merging.
- Reviewers will test, evaluate code quality, and ensure project guidelines are met.
- If changes are requested, commit the updates to your existing branch and push; the PR will update automatically.
- Once approved, the reviewer or author will merge the branch into `main` and delete the feature branch.