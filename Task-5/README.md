# Web Development Internship — Task 5
# Deploy a Static Website Using GitHub Pages

## Project Overview
**Task 5** demonstrates the complete end-to-end continuous deployment lifecycle of modern static websites using **Git version control** and **GitHub Pages**. Through this project, an interactive internship portfolio and task launchpad was built, versioned with structured Git commits, pushed to a remote GitHub repository, and deployed to the web on a publicly accessible GitHub Pages URL.

---

## Objective
The primary objectives of Task 5 were:
* Master distributed version control workflows using the **Git CLI** (`git init`, `git add`, `git commit`, `git push`, `git branch`).
* Understand the architecture and hosting mechanics of **GitHub Pages** for static web assets (HTML, CSS, JavaScript, media).
* Configure GitHub repository deployment settings to publish directly from the `main` branch root folder.
* Implement a continuous deployment (CD) pipeline where git commits pushed to `origin/main` automatically build and update the live web application.
* Answer core technical interview questions covering Git fundamentals, merge conflicts, pull requests, and static hosting platforms.

---

## Features
* **Internship Showcase Portal**: Interactive dashboard featuring live launchpad links to all internship deliverables (Tasks 1 through 6).
* **Live Deployment Status**: Dynamic status indicators reflecting GitHub Pages continuous deployment status.
* **Interactive Terminal Snippet**: One-click clipboard copy utility for standard Git CLI initialization and deployment workflows.
* **Responsive Dark-Mode Design**: High-performance glassmorphism interface powered by vanilla CSS variables and CSS Grid.
* **Fast Global Edge CDN**: Hosted globally on GitHub's Fastly-backed content delivery network with free SSL/TLS certificates.

---

## Technologies Used
* **Git CLI**: Distributed version control system for tracking source code changes.
* **GitHub**: Cloud-based Git repository hosting service.
* **GitHub Pages**: Static site hosting service providing automated continuous deployment from Git branches.
* **HTML5 & Vanilla CSS3**: Semantic structure, CSS variables, CSS Grid, and responsive media queries.
* **Vanilla JavaScript**: DOM clipboard API interaction and smooth scrolling.

---

## Project Structure
```text
Task-5/
├── index.html       # Static showcase web page
├── style.css        # Responsive dark-theme styling and glassmorphism cards
├── script.js        # Clipboard copy utility and interactive behaviors
└── README.md        # Deployment documentation and interview Q&A
```

---

## Step-by-Step GitHub Pages Deployment Guide

### Option A: Project Repository Site (Recommended for this Repository)
Repository URL: `https://github.com/karmaboy1309/webdev-task`  
Live GitHub Pages URL: **`https://karmaboy1309.github.io/webdev-task/`**

1. **Push Code to Remote**:
   Ensure all task files are committed and pushed to the `main` branch of `https://github.com/karmaboy1309/webdev-task`.
   ```bash
   git add .
   git commit -m "feat(task-5): deploy static website using GitHub Pages"
   git push origin main
   ```
2. **Navigate to GitHub Repository Settings**:
   * Open [https://github.com/karmaboy1309/webdev-task](https://github.com/karmaboy1309/webdev-task) in your web browser.
   * Click on the **Settings** tab in the top navigation bar.
3. **Configure GitHub Pages**:
   * On the left sidebar under the "Code and automation" section, click on **Pages**.
   * Under **Build and deployment > Source**, select **"Deploy from a branch"**.
   * Under **Branch**:
     * Select `main` from the branch dropdown.
     * Select `/(root)` from the folder dropdown.
   * Click **Save**.
4. **Automated Build & Verification**:
   * GitHub Actions will trigger a deployment workflow (`pages-build-deployment`).
   * Within 1-2 minutes, GitHub Pages displays the message:  
     `Your site is live at https://karmaboy1309.github.io/webdev-task/`
5. **Continuous Deployment in Action**:
   * Any subsequent commit pushed to `origin/main` automatically triggers a rebuild and updates the live site within seconds.

---

### Option B: User / Organization Root Site (`<username>.github.io`)
If hosting as your primary personal website:
1. Create a public repository named precisely: `<yourusername>.github.io` (e.g., `karmaboy1309.github.io`).
2. Clone the repository locally:
   ```bash
   git clone https://github.com/karmaboy1309/karmaboy1309.github.io.git
   cd karmaboy1309.github.io
   ```
3. Place `index.html`, `style.css`, and `script.js` directly into the repository root.
4. Commit and push:
   ```bash
   git add .
   git commit -m "Initial commit: launch personal portfolio"
   git push origin main
   ```
5. Your website is automatically live at `https://karmaboy1309.github.io/` without manual settings configuration.

---

## Essential Git Commands Cheat Sheet

| Command | Description |
| :--- | :--- |
| `git status` | Displays the state of the working directory and staging area. |
| `git add <files>` | Stages file modifications for the next commit. |
| `git commit -m "<message>"` | Records staged snapshot to repository history with a message. |
| `git push origin <branch>` | Uploads local branch commits to the remote repository. |
| `git pull origin <branch>` | Fetches and integrates remote changes into the current branch. |
| `git branch <name>` | Creates a new branch for feature isolation. |
| `git checkout -b <name>` | Creates and immediately switches to a new branch. |
| `git log --oneline` | Displays commit history in a concise single-line format. |
| `git revert <commit-hash>` | Creates a new commit that safely undoes the effects of a previous commit. |

---

## Interview Questions & In-Depth Answers

### 1. What is Git and why use it?
**Answer:**
**Git** is a free, open-source distributed version control system (VCS) designed to track changes in source code across the software development lifecycle.  
**Key reasons to use Git:**
1. **Change Tracking & History**: Retains a complete cryptographic snapshot (SHA-1 hash) of every modification, who made it, when, and why.
2. **Branching & Parallel Work**: Enables developers to work on isolated feature branches without disturbing the production code.
3. **Safety & Rollbacks**: Any buggy commit can be inspected, compared (diffed), or reverted without data loss.
4. **Collaboration**: Provides distributed synchronization across multiple developers working on the same codebase simultaneously.

### 2. How do you push code to GitHub?
**Answer:**
Pushing code to GitHub involves three fundamental stages:
1. **Stage Modified Files**: Add files to the Git staging index:
   ```bash
   git add .
   ```
2. **Commit Changes**: Save staged changes into a local snapshot:
   ```bash
   git commit -m "feat: add contact form validation"
   ```
3. **Push to Remote Repository**: Transmit local commits to the designated remote and branch:
   ```bash
   git push -u origin main
   ```
*(Note: `-u` or `--set-upstream` establishes a tracking reference between the local branch and remote branch for future shorthand `git push` commands).*

### 3. What is GitHub Pages?
**Answer:**
GitHub Pages is a static web hosting service provided directly by GitHub that takes HTML, CSS, JavaScript, and static media files straight from a GitHub repository and publishes them to the web.  
**Key Attributes:**
* Free hosting with automated HTTPS/SSL encryption.
* Native integration with Git branches (`main`, `gh-pages`) or `/docs` directories.
* Built-in support for custom domains and Jekyll static site generation.
* Global edge distribution powered by Fastly CDN.
* Only hosts static assets (does not execute server-side runtimes like PHP, Python, or Node.js).

### 4. What is the difference between static and dynamic websites?
**Answer:**
| Criteria | Static Websites | Dynamic Websites |
| :--- | :--- | :--- |
| **Server Processing** | Serves pre-built HTML, CSS, and JS files directly from disk/CDN without server-side computation. | Executes server-side code (Node.js, Python, PHP, Ruby) to render pages on-the-fly. |
| **Database** | No database required; data is client-side or retrieved via external REST/GraphQL APIs. | Connected to databases (PostgreSQL, MongoDB, MySQL) to fetch dynamic records. |
| **Speed & Caching** | Extremely fast; easily cached globally across CDNs. | Higher latency due to server rendering and database query overhead. |
| **Hosting Cost** | Free or very low cost (GitHub Pages, Vercel, Netlify, Cloudflare Pages). | Requires dedicated application servers, containers, or serverless functions. |
| **Security** | Minimal attack surface (no SQL injection or server runtime exploits). | Requires continuous security patches, SQL injection defense, and server hardening. |

### 5. How do you revert commits in Git?
**Answer:**
There are two primary approaches depending on whether the commit has already been shared publicly:
1. **`git revert <commit-hash>` (Safe & Recommended for Public Branches)**:
   Creates a **new commit** that applies the exact inverse diff of the targeted commit. It leaves the commit history intact, making it safe for collaborative repositories.
2. **`git reset --hard <commit-hash>` (Destructive)**:
   Rewinds the branch pointer directly back to a previous commit, discarding all intervening commits. This requires force-pushing (`git push --force`) and should **never** be performed on shared branches like `main`.

### 6. What is branching in Git?
**Answer:**
Branching in Git creates an independent line of development pointing to a specific commit. Rather than modifying the main codebase directly, developers create branches (e.g., `feature/contact-form`, `bugfix/nav-overflow`) to build, test, and refine changes in isolation. Once verified, the branch is merged back into `main` via a merge commit or pull request. In Git, branches are lightweight pointers (~41 bytes), making branch creation and switching nearly instantaneous.

### 7. Explain pull requests (PRs).
**Answer:**
A **Pull Request (PR)** is a collaboration mechanism on platforms like GitHub where a contributor proposes that changes from one branch (or fork) be pulled and merged into another branch (typically `main`).  
**The PR Workflow includes:**
1. Code diff inspection showing additions and deletions.
2. Peer code reviews with line-by-line comments.
3. Automated CI/CD status checks (linting, unit testing, security scans).
4. Discussion, revisions, and approval by repository maintainers before merging.

### 8. How do you resolve merge conflicts?
**Answer:**
A merge conflict occurs when Git cannot automatically combine changes—such as when two developers modify the same line in the same file on different branches.  
**Resolution Steps:**
1. Run `git status` to locate conflicting files marked as `both modified`.
2. Open the conflicting files. Git inserts conflict markers:
   ```text
   <<<<<<< HEAD (Current Branch)
   const apiEndpoint = "https://api.v2.production.com";
   =======
   const apiEndpoint = "https://api.staging.internal.com";
   >>>>>>> feature-branch (Incoming Branch)
   ```
3. Edit the file to keep the desired code, removing the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
4. Save the file and stage it: `git add <resolved-file>`.
5. Complete the merge: `git commit -m "fix: resolve merge conflict in API endpoint"`.

### 9. How to host a website for free?
**Answer:**
Several modern cloud hosting platforms offer generous free tiers for hosting static and serverless websites:
1. **GitHub Pages**: Perfect for static portfolio sites, open-source documentation, and student projects directly from Git repositories.
2. **Vercel**: Premier hosting for Next.js, React, and static sites with automatic preview deployments and serverless functions.
3. **Netlify**: Exceptional platform for Jamstack sites, form handling, and continuous Git deployment.
4. **Cloudflare Pages**: Ultra-fast global hosting running on Cloudflare's massive edge network with unlimited bandwidth.
5. **Render / Railway**: Free or low-cost tiers for running dynamic full-stack applications with Node.js and databases.

### 10. What is Continuous Deployment (CD)?
**Answer:**
**Continuous Deployment (CD)** is a software engineering practice where code changes that successfully pass automated testing stages are automatically released and deployed to the production environment without manual human intervention.  
In GitHub Pages, whenever a developer runs `git push origin main`, GitHub's automated CI/CD pipeline triggers, verifies the repository assets, builds the static artifact, and deploys it to the public edge CDN within seconds.

---

## Learning Outcomes
* Developed practical expertise in Git CLI version control workflows.
* Successfully published and hosted a static web application on GitHub Pages.
* Mastered the differences between static and dynamic web architectures.
* Gained confidence answering technical interview questions regarding Git, branching strategies, and CI/CD pipelines.

---

## Author
**Darshan Makwana**  
Web Development Intern
