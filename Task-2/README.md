# Web Development Internship — Task 2
# TaskFlow — Modern To-Do List Web App

## Project Overview
**TaskFlow** is a modern, responsive To-Do List web application designed to help users manage, track, and complete their daily tasks efficiently. Built using pure **HTML5, CSS3, and Vanilla JavaScript (ES6+)**, the application delivers a smooth, interactive experience with live state updates, automatic counters, task filtering, and responsive behavior across all screen sizes without requiring a page reload.

---

## Objective
The primary objectives of this internship task were:
* Build dynamic, interactive user interfaces using **Vanilla JavaScript** without relying on frameworks or external libraries.
* Master **DOM selection, manipulation, and event handling** workflows.
* Practice safe user input handling and **prevent Cross-Site Scripting (XSS)** vulnerabilities using `textContent`.
* Implement responsive layouts and modern design principles with **CSS Flexbox, CSS Grid, custom properties (variables), and media queries**.
* Maintain clean, beginner-friendly, modular code architecture suitable for technical review and interview discussions.

---

## Features
* **Add Tasks**: Add tasks quickly with button clicks or pressing the **Enter** key.
* **Input Validation**: Prevents empty task submissions with shake animation and inline error feedback.
* **Complete / Uncomplete Tasks**: Toggle task completion with custom checkmarks and visual strike-through styling.
* **Delete Tasks**: Remove individual tasks with smooth slide-out transitions.
* **Live Statistics Dashboard**:
  * **Total Tasks** counter
  * **Completed Tasks** counter
  * **Remaining Tasks** counter
* **Filter Views**: Switch seamlessly between **All**, **Active**, and **Completed** tasks.
* **Clear Completed**: One-click action to remove all completed tasks simultaneously.
* **Empty State Handling**: Contextual illustrations and guidance messages when no tasks exist or match filters.
* **Zero Page Reloads**: All operations update the DOM instantly in real time.
* **Fully Accessible & Keyboard Friendly**: Full support for keyboard navigation (Tab, Enter, Space).

---

## Technologies Used
* **HTML5**: Semantic elements (`<main>`, `<header>`, `<section>`, `<form>`, `<button>`, `<ul>`, `<li>`, `<footer>`).
* **CSS3**:
  * CSS Custom Properties (Variables) for color palettes and design tokens.
  * Flexbox & CSS Grid for fluid positioning and alignment.
  * CSS Transitions & Keyframe Animations (`@keyframes` for fade-in, slide-down, shake).
  * Media queries for responsive layouts down to 375px mobile screens.
* **Vanilla JavaScript (ES6+)**:
  * DOM element selection & event listeners (`addEventListener`).
  * Dynamic DOM node creation (`document.createElement`).
  * Class manipulation (`classList.toggle`, `classList.add`, `classList.remove`).
  * Arrow functions, `const` and `let` scope bindings.
  * Safe text insertion via `textContent`.
* **Google Fonts**: Plus Jakarta Sans.
* **Development Tools**: VS Code, Live Server, Chrome DevTools.

---

## Project Structure
```text
Task-2/
├── index.html       # Semantic HTML5 markup and application structure
├── style.css        # Responsive CSS3 styling, design system, and animations
├── script.js        # Vanilla JavaScript application logic and event handling
└── README.md        # Comprehensive project documentation
```

---

## How to Run with Live Server
1. Open the repository or the `Task-2` folder in **Visual Studio Code**.
2. Make sure the **Live Server** extension by Ritwick Dey is installed in VS Code.
3. Right-click on `Task-2/index.html`.
4. Select **"Open with Live Server"** (or press `Alt + L, Alt + O`).
5. The application will launch automatically in your default browser at `http://127.0.0.1:5500/Task-2/index.html`.

---

## JavaScript Concepts Learned & Applied
1. **DOM Selection**: Efficiently targeted elements using `document.getElementById()`, `querySelector()`, and `querySelectorAll()`.
2. **Form Submission & Event Prevention**: Used `event.preventDefault()` on form submit to prevent traditional browser page reloads.
3. **Safe Text Content Rendering**: Utilized `.textContent` instead of `.innerHTML` for user-supplied strings, ensuring protection against XSS vulnerabilities.
4. **Dynamic DOM Manipulation**: Built list items (`<li>`), custom checkbox indicators, and delete buttons dynamically with `document.createElement()`.
5. **Class List API**: Managed active, completed, removing, and invalid states with `classList.toggle()`, `classList.add()`, and `classList.remove()`.
6. **State & Live Counters**: Computed real-time statistics (`Total`, `Completed`, `Remaining`) by querying the live DOM node counts.
7. **Animation End Handlers**: Listened to `animationend` events before executing `element.remove()` to provide smooth visual feedback on deletion.

---

## Responsive Design Breakpoints
TaskFlow is tested and designed to provide an optimal user experience across various screen widths:

| Device Type | Breakpoint Range | Key Adaptations |
| :--- | :--- | :--- |
| **Desktop / Large Screens** | 1920px, 1366px, 1024px | Centered container, fixed max-width (640px), horizontal input/button layout |
| **Tablet Screens** | 768px (`@media (max-width: 768px)`) | Proportional card padding, fluid typography, compact stats spacing |
| **Mobile Screens** | 480px, 375px (`@media (max-width: 480px)`) | Stacked input and button, full-width action buttons, touch-friendly 44px+ hit targets, zero horizontal scrolling |

---

## Learning Outcomes
* Built a complete, production-grade Vanilla JavaScript web application without external libraries.
* Gained hands-on experience in building interactive CRUD (Create, Read, Update, Delete) UI patterns.
* Understood how to synchronize state changes with UI updates and dynamic counters.
* Mastered responsive web development best practices to ensure smooth rendering on mobile, tablet, and desktop viewports.

---

## Author
**Darshan Makwana**  
Web Development Intern
