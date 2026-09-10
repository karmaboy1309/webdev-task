# Web Development Internship — Elevate Labs
### Comprehensive Task Repository & Technical Documentation

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Showcase-success?style=for-the-badge&logo=github)](https://karmaboy1309.github.io/webdev-task/)
[![Author](https://img.shields.io/badge/Developer-Darshan%20Makwana-blue?style=for-the-badge)](https://github.com/karmaboy1309)
[![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](LICENSE)

---

## 🌟 Executive Overview
Welcome to the official repository for the **Web Development Internship at Elevate Labs**, completed by **Darshan Makwana**. This repository houses 6 production-ready, accessible web applications and web services built from foundational principles up through modern full-stack architectures.

Every module emphasizes clean code, responsive design, zero dependencies where native APIs excel, security best practices (such as XSS prevention and input sanitization), and comprehensive technical documentation paired with in-depth answers to 60 internship interview questions.

---

## 🌐 Live GitHub Pages Portal
The complete internship portfolio is hosted live on GitHub Pages with automated continuous deployment:  
👉 **[https://karmaboy1309.github.io/webdev-task/](https://karmaboy1309.github.io/webdev-task/)**

Visitors can launch interactive demos for all frontend applications directly from the central hub.

---

## 📋 Internship Tasks Matrix

| Task # | Project Name | Primary Focus | Key Technologies | Live Demo / Docs |
| :---: | :--- | :--- | :--- | :---: |
| **01** | **WebCraft Agency** | Responsive Landing Page | HTML5, CSS3, Flexbox, Grid | [Live Demo](https://karmaboy1309.github.io/webdev-task/Task-1/) • [Guide](./Task-1/README.md) |
| **02** | **TaskFlow App** | Dynamic To-Do List & State | Vanilla JS, DOM API, CSS Animations | [Live Demo](https://karmaboy1309.github.io/webdev-task/Task-2/) • [Guide](./Task-2/README.md) |
| **03** | **Book Management API** | RESTful Backend Architecture | Node.js, Express.js, REST CRUD | [API Guide](./Task-3/README.md) • [Server](./Task-3/server.js) |
| **04** | **TechVibe Cloud** | Mobile-Friendly Media Queries | CSS Media Queries, Fluid clamp(), Drawer Nav | [Live Demo](https://karmaboy1309.github.io/webdev-task/Task-4/) • [Guide](./Task-4/README.md) |
| **05** | **Showcase Portal** | Static Deployment & Hosting | GitHub Pages, Git CLI, CI/CD | [Live Demo](https://karmaboy1309.github.io/webdev-task/Task-5/) • [Guide](./Task-5/README.md) |
| **06** | **ConnectDesk Form** | Form Validation with JS & Regex | RFC 5322 Regex, Event Handling, WCAG ARIA | [Live Demo](https://karmaboy1309.github.io/webdev-task/Task-6/) • [Guide](./Task-6/README.md) |

---

## 📂 Repository Structure

```text
webdev-task/
├── index.html               # Central Internship Showcase Portal (GitHub Pages Root)
├── README.md                # Comprehensive repository documentation (This file)
├── .gitignore               # Ignored dependencies (node_modules, logs, OS files)
│
├── Task-1/                  # Task 1: Responsive Landing Page
│   ├── index.html           # WebCraft agency semantic markup
│   ├── style.css            # Flexbox & CSS Grid stylesheet
│   └── README.md            # Task overview & interview Q&A
│
├── Task-2/                  # Task 2: TaskFlow To-Do List Web App
│   ├── index.html           # Accessible application interface
│   ├── style.css            # Custom properties, strike-through, keyframe animations
│   ├── script.js            # Vanilla JS DOM manipulation, live counters, filters
│   └── README.md            # Architecture, XSS security, & interview Q&A
│
├── Task-3/                  # Task 3: Book Management REST API
│   ├── package.json         # Project metadata and Express dependencies
│   ├── package-lock.json    # Exact dependency lockfile
│   ├── server.js            # Express.js REST API server implementation
│   └── README.md            # API endpoint reference, Postman guide, & interview Q&A
│
├── Task-4/                  # Task 4: Mobile-Friendly Website with Media Queries
│   ├── index.html           # TechVibe cloud platform landing page
│   ├── style.css            # Desktop-first media queries (1024px, 768px, 480px)
│   ├── script.js            # Hamburger navigation drawer toggle & scroll spy
│   └── README.md            # Breakpoint matrix & 10 interview questions
│
├── Task-5/                  # Task 5: Static Website Deployment on GitHub Pages
│   ├── index.html           # Dark-mode portfolio and deployment dashboard
│   ├── style.css            # Glassmorphism aesthetic and ambient glows
│   ├── script.js            # Interactive terminal copy snippet & smooth scroll
│   └── README.md            # Step-by-step deployment guide & 10 interview questions
│
└── Task-6/                  # Task 6: Contact Form with Client-Side Validation
    ├── index.html           # Accessible contact form with ARIA live regions
    ├── style.css            # Input validation states, focus rings, shake animation
    ├── script.js            # RFC 5322 regex validation, live char counter, reset
    └── README.md            # Regex breakdown, security guide, & 10 interview questions
```

---

## 🛠️ Technology Stack & Core Competencies

### Frontend Development
* **Semantic HTML5**: Native elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<form>`, `<dialog>`).
* **CSS3 Architecture**:
  * CSS Custom Properties (`var(--...)`) for design token consistency.
  * Fluid typography using `clamp(min, preferred, max)` and relative units (`rem`, `%`, `vw`).
  * Modern layouts using **CSS Flexbox** and **CSS Grid**.
  * Hardware-accelerated transitions and `@keyframes` animations.
  * Media queries (`@media`) implementing responsive design across mobile, tablet, and desktop viewports.
* **Vanilla JavaScript (ES6+)**:
  * Direct DOM query and manipulation (`querySelector`, `addEventListener`, `document.createElement`).
  * Event delegation and handling (`click`, `submit`, `input`, `blur`, `change`, `reset`).
  * Native form control interception via `event.preventDefault()`.
  * Safe text rendering via `.textContent` to protect against Cross-Site Scripting (XSS).
  * Regular Expressions (`RegExp`) for pattern matching and email syntax validation.

### Backend Development
* **Node.js & Express.js**:
  * RESTful architecture principles and JSON request body parsing via `express.json()`.
  * Standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).
  * Robust input validation, status code signaling (`200`, `201`, `400`, `404`, `500`), and error handling.
  * In-memory state management.

### DevOps, Version Control & Tooling
* **Git CLI**: Branching, atomic commits, rebasing, merge conflict resolution, and status inspection.
* **GitHub & GitHub Pages**: Remote hosting, repository management, automated CI/CD static deployments, and edge caching.
* **Developer Tools**: Chrome DevTools (Device Mode, Network Throttling, Accessibility Inspector), Postman, VS Code, Live Server.

---

## 🚀 Local Setup & Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/karmaboy1309/webdev-task.git
cd webdev-task
```

### 2. Run Static Frontend Projects (Tasks 1, 2, 4, 5, 6 & Root Showcase)
All frontend tasks are built with pure web technologies and require no build step:
* **Option 1 (VS Code Live Server)**:
  1. Open the repository in **VS Code**.
  2. Right-click on any `index.html` (e.g., root `index.html`, `Task-2/index.html`, or `Task-6/index.html`).
  3. Select **"Open with Live Server"** (or press `Alt + L, Alt + O`).
* **Option 2 (Python Built-In Server)**:
  ```bash
  python -m http.server 3000
  ```
  Open `http://localhost:3000` in your browser.

### 3. Run the Backend REST API (Task 3)
```bash
cd Task-3
npm install
npm start
```
The API server will launch at `http://localhost:3000`. You can test endpoints using cURL or Postman:
```bash
# Health Check
curl http://localhost:3000/

# Fetch All Books
curl http://localhost:3000/books
```

---

## 📚 Technical Interview Questions Index
Each task directory includes dedicated, deeply researched answers to 10 technical interview questions (60 questions in total):

1. **[Task 1 Interview Q&A](./Task-1/README.md#interview-questions)**: Semantic HTML, CSS Box Model, Flexbox vs Grid, Relative vs Absolute positioning, Pseudo-classes.
2. **[Task 2 Interview Q&A](./Task-2/README.md#interview-questions)**: DOM Manipulation, Event Bubbling & Capturing, `textContent` vs `innerHTML` (XSS prevention), `localStorage`, Event Delegation.
3. **[Task 3 Interview Q&A](./Task-3/README.md#interview-questions)**: REST architecture, HTTP verbs, Idempotency, Middleware in Express, Status codes, Statelessness.
4. **[Task 4 Interview Q&A](./Task-4/README.md#interview-questions--in-depth-answers)**: Media queries, Mobile-first vs Desktop-first, Viewport meta tag, CSS units (`rem`, `%`, `vw`), Image scaling, CSS Grid responsiveness.
5. **[Task 5 Interview Q&A](./Task-5/README.md#interview-questions--in-depth-answers)**: Git fundamentals, GitHub Pages mechanics, Static vs Dynamic hosting, Reverting commits, Branching, Pull Requests, Merge conflicts, Continuous Deployment (CD).
6. **[Task 6 Interview Q&A](./Task-6/README.md#interview-questions--in-depth-answers)**: Client vs Server validation, `event.preventDefault()`, Regular expressions, Dynamic DOM errors, WCAG Form accessibility (ARIA), Form security.

---

## 👨‍💻 Author & Acknowledgements

**Darshan Makwana**  
* Web Development Intern — Elevate Labs  
* GitHub: [@karmaboy1309](https://github.com/karmaboy1309)  
* Email: [darshanmakwana1305@gmail.com](mailto:darshanmakwana1305@gmail.com)

*Special thanks to Elevate Labs for providing structured internship tasks focused on practical, high-standard web engineering skills.*
