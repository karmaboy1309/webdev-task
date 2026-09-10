# Web Development Internship — Task 6
# ConnectDesk — Interactive Contact Form with Client-Side JavaScript Validation

## Project Overview
**ConnectDesk** is a modern contact and inquiry web interface engineered to demonstrate robust **client-side form validation** using **Vanilla JavaScript (ES6+)** and **Regular Expressions (Regex)**. The application intercept form submissions, sanitizes inputs, conducts real-time field-level validation on blur and keystroke events, updates accessibility ARIA states, and displays rich user feedback without page reloads.

---

## Objective
The primary objectives of Task 6 were:
* Construct a semantic HTML5 contact form containing text inputs, email, dropdown selections, textarea, and checkboxes.
* Intercept default form submissions using `event.preventDefault()`.
* Implement robust client-side validation logic using pure JavaScript without external libraries.
* Employ standard regular expressions (RFC 5322 compliant) to validate email syntax.
* Render contextual, dynamic error messages adjacent to failing inputs.
* Manage visual feedback states (`.is-invalid`, `.is-valid`, loading spinner, and shake animations).
* Test rigorous edge cases (whitespace-only strings, special characters, boundary lengths).
* Deliver accessible form controls adhering to WCAG standards with ARIA attributes (`aria-invalid`, `aria-describedby`, `role="alert"`).

---

## Features
* **Multi-Stage Validation**:
  * **On Blur**: Validates fields when users exit an input.
  * **On Input (Real-Time)**: Clears errors as soon as the user corrects their input.
  * **On Submit**: Validates all fields simultaneously, halting submission if any criteria fail.
* **RFC 5322 Compliant Email Regex**: Rejects missing `@`, missing domains, spaces, and invalid top-level domains (TLDs).
* **Live Dynamic Character Counter**: Live tracking on the textarea (`0 / 500 characters`) with amber warning states at 450 characters and red limit states at 500 characters.
* **Accessible ARIA Announcements**: Dynamic screen reader alerts via `role="alert"` and `aria-live="polite"`.
* **Subtle Shake Micro-Animation**: Visual vibration of the card when submission is blocked by invalid inputs.
* **Simulated Submission Lifecycle**: Loading spinner during submission simulation followed by an animated success summary card.
* **Form Reset Integration**: Cleanly resets input values, character counters, and visual validation classes.

---

## Validation Rules Matrix

| Field | Element Type | Validation Rule | Error Message Feedback |
| :--- | :--- | :--- | :--- |
| **Full Name** | `<input type="text">` | Non-empty, $\ge 3$ characters, letters/spaces/hyphens only (`^[a-zA-Z\s'-]{3,50}$`). | "Full name is required." / "Full name must be at least 3 characters long." |
| **Email Address** | `<input type="email">` | Non-empty, valid RFC 5322 email syntax. | "Email address is required." / "Please enter a valid email address (e.g., name@example.com)." |
| **Subject** | `<select>` | Non-empty selection (must choose a valid category). | "Please select a topic from the dropdown." |
| **Message** | `<textarea>` | Non-empty, minimum 10 characters, maximum 500 characters. | "Message is required." / "Message is too short (X/10 chars minimum)." |
| **Consent** | `<input type="checkbox">` | Checkbox must be checked (`checked === true`). | "You must agree to the privacy policy before submitting." |

---

## Technologies Used
* **HTML5**: Semantic tags (`<form>`, `<label>`, `<input>`, `<select>`, `<textarea>`, `<button>`, `novalidate`).
* **Vanilla CSS3**:
  * CSS Custom Properties (Variables) for state colors and design tokens.
  * Flexbox & CSS Grid for responsive split layout.
  * Keyframe animations (`@keyframes shake`, `@keyframes fadeIn`, `@keyframes spin`).
  * Custom styled checkboxes and input focus glow indicators.
* **Vanilla JavaScript (ES6+)**:
  * Event Listeners (`submit`, `input`, `blur`, `change`, `reset`).
  * Regular Expressions (`RegExp.test()`).
  * DOM class list manipulation (`classList.add`, `classList.remove`).
  * Accessible attribute manipulation (`setAttribute('aria-invalid', ...)`).

---

## Project Structure
```text
Task-6/
├── index.html       # Accessible HTML5 form markup and layout
├── style.css        # Responsive styling, input states, and micro-animations
├── script.js        # JavaScript validation logic, regex, and DOM handlers
└── README.md        # Comprehensive documentation and interview Q&A
```

---

## How to Run with Live Server
1. Open the repository or the `Task-6` folder in **Visual Studio Code**.
2. Ensure the **Live Server** extension is installed.
3. Right-click on `Task-6/index.html`.
4. Select **"Open with Live Server"** (or press `Alt + L, Alt + O`).
5. Open Chrome DevTools (`F12`) to inspect console logs, accessibility trees, and DOM updates during form validation.

---

## Deep Dive: Regular Expressions (Regex)

The email validation in `script.js` uses:
```javascript
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
```

### Token-by-Token Breakdown:
1. `^`: Asserts the start of the string.
2. `[a-zA-Z0-9._%+-]+`: Matches one or more allowable characters for the email local-part (letters, digits, dots, underscores, percents, plus, and hyphens).
3. `@`: Matches the literal `@` delimiter separating the username and domain.
4. `[a-zA-Z0-9.-]+`: Matches the domain name (subdomains and primary domain name).
5. `\.`: Matches the literal period before the Top-Level Domain (TLD).
6. `[a-zA-Z]{2,}`: Matches the TLD containing at least 2 alphabetical characters (e.g., `com`, `org`, `edu`, `io`).
7. `$`: Asserts the end of the string, preventing trailing whitespace or invalid trailing characters.

---

## Interview Questions & In-Depth Answers

### 1. How to validate form inputs in JavaScript?
**Answer:**
Form inputs are validated in JavaScript by:
1. **Selecting Input Elements**: Using `document.getElementById()` or `querySelector()`.
2. **Listening to Events**: Attaching event listeners (`submit` on the form, `input` or `blur` on individual inputs).
3. **Inspecting Values**: Extracting `input.value.trim()` and testing against criteria (e.g., non-empty length, range constraints, or regex patterns).
4. **Providing Feedback**: Conditionally appending error messages to adjacent DOM elements and updating classes (`is-invalid` / `is-valid`).
5. **Preventing Submission**: Invoking `event.preventDefault()` if any validation check fails.

### 2. What is `event.preventDefault()`?
**Answer:**
`event.preventDefault()` is a standard JavaScript DOM method that cancels the default browser action associated with an event.  
When attached to a `<form>` `submit` event:
* The default browser action is to perform an HTTP GET or POST request to the URL in the `action` attribute, causing a full page refresh.
* Calling `event.preventDefault()` suppresses this default behavior, allowing JavaScript to execute client-side validation, update the DOM smoothly, and asynchronously send data via Fetch or Axios.

### 3. How to check email format with regex?
**Answer:**
In JavaScript, email formatting is checked using `RegExp.prototype.test()`:
```javascript
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const isValid = emailRegex.test(emailInput.value.trim());
```
The `.test()` method returns `true` if the input string matches the regex pattern and `false` otherwise. It is important to `.trim()` the input first to prevent leading or trailing whitespace from causing false negatives.

### 4. What is the difference between client-side and server-side validation?
**Answer:**
| Dimension | Client-Side Validation | Server-Side Validation |
| :--- | :--- | :--- |
| **Execution Location** | Runs in the user's browser (HTML5 attributes & JavaScript). | Runs on the backend server (Node.js, Python, Java, etc.). |
| **User Experience (UX)** | Instantaneous feedback without network round-trips. | Requires an HTTP request/response cycle, which is slower. |
| **Security** | **Cannot be trusted for security**; easily bypassed (disabling JS, cURL, Postman). | **Authoritative & Mandatory**; protects database and business logic. |
| **Primary Purpose** | User guidance, typing convenience, reducing unnecessary server load. | Data integrity, sanitization, authorization, and SQL/XSS injection defense. |

> **Rule of Thumb:** Client-side validation is for **convenience and UX**; server-side validation is for **security and data integrity**.

### 5. How to show error messages dynamically?
**Answer:**
Dynamic error messages can be rendered using either:
1. **Pre-existing Error Placeholders (Recommended for layout stability)**:
   Place an empty container `<span class="error-message" id="nameError" role="alert"></span>` directly below the input in HTML. In JavaScript, populate `errorElement.textContent = "Error message"` and toggle CSS error classes.
2. **Dynamic DOM Node Creation**:
   Create a new node using `const error = document.createElement('div')`, assign text with `.textContent`, and insert it using `input.parentNode.appendChild(error)`. Care must be taken to remove previous error nodes before creating new ones to prevent duplicate messages.

### 6. What is form submission?
**Answer:**
Form submission is the mechanism through which data collected in form control elements (`<input>`, `<select>`, `<textarea>`) is packaged and dispatched:
* In traditional HTML: The browser serializes the form fields into URL-encoded or multipart format and sends an HTTP request (`GET` or `POST`) to the `action` URL, causing navigation to a new page or reload.
* In Single Page Applications (SPAs) & Modern Web: JavaScript captures the form submission event via `event.preventDefault()`, serializes the data into a JSON payload, and transmits it asynchronously via `fetch()` or `XMLHttpRequest`.

### 7. How to improve form accessibility (a11y)?
**Answer:**
1. **Explicit Labels**: Always associate `<label for="inputId">` with `<input id="inputId">` so clicking the label focuses the input.
2. **ARIA Attributes**:
   * `aria-required="true"`: Indicates mandatory fields to assistive devices.
   * `aria-invalid="true"`: Communicates validation failure state.
   * `aria-describedby="errorId"`: Associates the input with its specific error message.
3. **Live Regions**: Use `role="alert"` or `aria-live="polite"` on error containers so screen readers announce errors dynamically.
4. **Keyboard Accessibility**: Ensure all controls can be reached and activated via Tab, Shift+Tab, Space, and Enter keys.
5. **Focus Management**: Automatically shift focus to the first invalid field upon a failed submission attempt.

### 8. How to handle form reset?
**Answer:**
Form resetting can be performed natively or programmatically:
1. **Native HTML**: `<button type="reset">` resets inputs back to their initial default values defined in HTML.
2. **JavaScript**: Invoking `form.reset()`.
3. **Custom Validation Cleanup**: Because native reset does not clear custom JavaScript visual classes or error labels, listen to the form's `reset` event:
   ```javascript
   form.addEventListener('reset', () => {
     clearAllErrors();
     resetCustomCounters();
   });
   ```

### 9. What are common security issues with forms?
**Answer:**
1. **Cross-Site Scripting (XSS)**: Malicious users inject JavaScript code via form inputs. (Mitigated by sanitization, escaping output, using `.textContent` instead of `.innerHTML`, and Content Security Policy).
2. **Cross-Site Request Forgery (CSRF)**: Unauthorized commands transmitted from a trusted user. (Mitigated by CSRF tokens and `SameSite` cookies).
3. **SQL Injection (SQLi)**: Attackers input SQL commands into form fields to manipulate databases. (Mitigated by parameterized queries and ORMs on the backend).
4. **Spam & Automated Bots**: Automated form spamming. (Mitigated by CAPTCHAs, honeypot fields, and rate limiting).

### 10. How does HTML5 built-in validation differ from JS validation?
**Answer:**
* **HTML5 Built-In Validation**:
  * Declared with declarative attributes (`required`, `type="email"`, `pattern="[0-9]{5}"`, `minlength="3"`, `maxlength="100"`).
  * Implemented natively by the browser without writing JavaScript.
  * Displays localized native tooltips.
  * **Limitations**: Native tooltip styling is difficult to customize uniformly across browsers; cannot handle complex cross-field dependencies.
* **JavaScript Validation**:
  * Implemented with custom code and regular expressions.
  * Complete control over visual styling, timing (on input, blur, submit), error animations, and placement.
  * Supports complex asynchronous validation (e.g., checking if a username is already taken via API).

---

## Learning Outcomes
* Acquired in-depth expertise in JavaScript DOM manipulation and event delegation for forms.
* Built robust email and text validation algorithms with regular expressions.
* Created accessible user experiences adhering to WCAG and ARIA guidelines.
* Mastered edge-case input handling and animated UI feedback patterns.

---

## Author
**Darshan Makwana**  
Web Development Intern
