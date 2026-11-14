# Student Task Manager

A lightweight task manager for students, built with HTML, CSS, and vanilla JavaScript. Add school tasks, track their completion, and find them with search.

## Project Description

Student Task Manager provides a simple page for organizing schoolwork. Tasks are held in the browser page while it is open; they are not saved after a reload.

## Team Members

- Noureen Fatima — repository owner


## Features

- **Add tasks:** Enter a required title and an optional description.
- **View tasks:** New tasks appear in the task list with an incomplete status.
- **Complete or undo:** Mark a task complete, then undo that status if needed.
- **Remove tasks:** Delete an individual task from the list.
- **Search:** Search titles and descriptions with a case-insensitive query. Submit an empty query to show every task.
- **Helpful messages:** The page shows an empty-list message and a separate message when a search has no matches.
- **Responsive interface:** The form and task cards adapt to narrow screens.
- 
## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Git and GitHub

## Git Workflow

1. Start from the main branch and create a branch for your change.
2. Make and test the change, then stage and commit it.
3. Push the branch to GitHub and open a pull request.
4. Review and merge the pull request into the main branch.


## Branches

- `main` — primary branch.
- Feature branches — use a separate branch for each task or feature (for example, `task-search`).
<img width="558" height="623" alt="image" src="https://github.com/user-attachments/assets/2e48f88a-b702-4960-a163-b65ba6711ce4" />


## Git Commands Demonstrated

### Check status and history

```bash
git status
git log --oneline
```

`git status` shows the current branch and working-tree changes. `git log --oneline` shows a compact commit history.

### Create, commit, and push a feature branch

```bash
git switch main
git switch -c task-search
git add script.js index.html style.css
git commit -m "Add task search"
git push -u origin task-search
```

### Undo the latest commit but keep its changes

```bash
git reset --soft HEAD~1
```

This moves the current branch back one commit and keeps the changes staged. Use it only when you intend to remove the latest commit from the current branch.

## GitHub Features Demonstrated

- GitHub repository and Git remote setup.
- Reviewing branches and commit history.
- Configuring authentication and attempting to push a branch.
- Publishing the `v1.0.0` release tag.
- Issue creation in GitHub.

## How to Run

1. Clone or download this repository.
2. Open `index.html` in a modern web browser.
3. Add tasks using the form. Use the search form to filter tasks.

No package installation or build step is required.

## Screenshots

Add your screenshots below. For example:

<img width="907" height="843" alt="image" src="https://github.com/user-attachments/assets/ceb4dcde-4883-4702-a6a9-0be9bd318ad5" />
<img width="834" height="799" alt="image" src="https://github.com/user-attachments/assets/0bc2e154-ce22-4b28-9a50-2323d9dfce0b" />



## Version History

- **[v1.0.0](https://github.com/noureen-fatima/student-task-manager/releases/tag/v1.0.0)** — Initial release with task entry, search, completion button and undo, task removal, and responsive styling.

## Contributors

- Noureen Fatima
