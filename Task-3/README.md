# Web Development Internship — Task 3
# Book Management REST API

## Project Overview
The **Book Management REST API** is a lightweight, backend RESTful web service built with **Node.js** and **Express.js**. It provides full CRUD (Create, Read, Update, Delete) functionality to manage a book catalog in-memory. Designed following REST architecture principles, this API handles client requests, performs input validation, returns structured JSON responses, and utilizes standard HTTP status codes.

---

## Objective
The primary objectives of this internship task were:
* Understand the core fundamentals of backend development with **Node.js** and **Express.js**.
* Design and implement standard **RESTful API endpoints** adhering to HTTP conventions.
* Implement structured routing, middleware, and request body parsing with `express.json()`.
* Manage state and dynamic data using **in-memory JavaScript data structures**.
* Implement robust **input validation**, error handling, and appropriate **HTTP status codes** (`200`, `201`, `400`, `404`, `500`).
* Test and document all endpoints thoroughly using **Postman** and cURL.

---

## Features
* **Root Health Check**: Verifies that the API server is active and running.
* **Get All Books (`GET /books`)**: Fetches the complete list of available books in the inventory.
* **Get Book by ID (`GET /books/:id`)**: Retrieves specific book details by its unique identifier.
* **Add New Book (`POST /books`)**: Validates input data, generates unique IDs automatically, and appends the new book.
* **Update Book (`PUT /books/:id`)**: Modifies title and/or author of an existing book.
* **Delete Book (`DELETE /books/:id`)**: Removes a specified book from the collection.
* **Input Validation & Error Handling**: Rejects missing or malformed inputs with descriptive JSON messages.
* **In-Memory Storage**: Fast, zero-configuration data storage without requiring an external database.

---

## Technologies Used
* **Node.js**: Asynchronous event-driven JavaScript runtime environment.
* **Express.js**: Fast, minimalist web framework for Node.js.
* **Postman**: API testing and documentation platform.
* **VS Code**: Code editor and development environment.

---

## Project Structure
```text
Task-3/
├── package.json         # Project metadata, dependencies, and npm scripts
├── package-lock.json    # Exact dependency tree lockfile
├── server.js            # Express application setup, routes, and logic
└── README.md            # Comprehensive project documentation and API reference
```

---

## Installation & Setup

### Prerequisites
* **Node.js** (v14.0.0 or higher recommended)
* **npm** (Node Package Manager)

### Step-by-Step Setup
1. Open terminal and navigate to the `Task-3/` directory:
   ```bash
   cd Task-3
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## How to Start the Server

Run the start script defined in `package.json`:

```bash
npm start
```

Alternatively, run directly with Node:

```bash
node server.js
```

The server will initialize and listen on:
```text
http://localhost:3000
```

---

## API Endpoints Summary

| Method | Endpoint | Description | Success Status | Error Statuses |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/` | Root health-check endpoint | `200 OK` | — |
| `GET` | `/books` | Retrieve all books | `200 OK` | `500 Internal Server Error` |
| `GET` | `/books/:id` | Retrieve a single book by ID | `200 OK` | `400 Bad Request`, `404 Not Found` |
| `POST` | `/books` | Add a new book | `201 Created` | `400 Bad Request` |
| `PUT` | `/books/:id` | Update an existing book by ID | `200 OK` | `400 Bad Request`, `404 Not Found` |
| `DELETE` | `/books/:id` | Delete a book by ID | `200 OK` | `400 Bad Request`, `404 Not Found` |

---

## Example Requests & Responses

### 1. Root Health Check
* **Request:** `GET http://localhost:3000/`
* **Status:** `200 OK`
* **Response Body:**
  ```json
  {
    "message": "Book Management REST API is running."
  }
  ```

---

### 2. Get All Books
* **Request:** `GET http://localhost:3000/books`
* **Status:** `200 OK`
* **Response Body:**
  ```json
  [
    {
      "id": 1,
      "title": "The Alchemist",
      "author": "Paulo Coelho"
    },
    {
      "id": 2,
      "title": "Atomic Habits",
      "author": "James Clear"
    },
    {
      "id": 3,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee"
    }
  ]
  ```

---

### 3. Get Book by ID
* **Request:** `GET http://localhost:3000/books/2`
* **Status:** `200 OK`
* **Response Body:**
  ```json
  {
    "id": 2,
    "title": "Atomic Habits",
    "author": "James Clear"
  }
  ```

* **When Book is Not Found:** `GET http://localhost:3000/books/99`
* **Status:** `404 Not Found`
* **Response Body:**
  ```json
  {
    "message": "Book not found"
  }
  ```

---

### 4. Add a New Book
* **Request:** `POST http://localhost:3000/books`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "title": "Clean Code",
    "author": "Robert C. Martin"
  }
  ```
* **Status:** `201 Created`
* **Response Body:**
  ```json
  {
    "message": "Book created successfully",
    "book": {
      "id": 4,
      "title": "Clean Code",
      "author": "Robert C. Martin"
    }
  }
  ```

* **When Fields are Missing/Invalid:**
* **Status:** `400 Bad Request`
* **Response Body:**
  ```json
  {
    "message": "Validation Error: Both 'title' and 'author' are required fields and must not be empty."
  }
  ```

---

### 5. Update an Existing Book
* **Request:** `PUT http://localhost:3000/books/1`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "title": "The Alchemist (Special 25th Anniversary Edition)",
    "author": "Paulo Coelho"
  }
  ```
* **Status:** `200 OK`
* **Response Body:**
  ```json
  {
    "message": "Book updated successfully",
    "book": {
      "id": 1,
      "title": "The Alchemist (Special 25th Anniversary Edition)",
      "author": "Paulo Coelho"
    }
  }
  ```

---

### 6. Delete a Book
* **Request:** `DELETE http://localhost:3000/books/3`
* **Status:** `200 OK`
* **Response Body:**
  ```json
  {
    "message": "Book deleted successfully",
    "deletedBook": {
      "id": 3,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee"
    }
  }
  ```

---

## Postman Testing Guide

1. Open **Postman**.
2. Make sure the server is running on `http://localhost:3000`.
3. Test the following HTTP requests:
   * **GET All Books**: Set Method to `GET`, enter URL `http://localhost:3000/books`, click **Send**. Verify `200 OK`.
   * **GET Single Book**: Set Method to `GET`, enter URL `http://localhost:3000/books/1`, click **Send**. Verify `200 OK`.
   * **POST New Book**:
     * Set Method to `POST`, URL: `http://localhost:3000/books`.
     * Go to **Body** tab -> select **raw** -> choose **JSON**.
     * Paste:
       ```json
       {
         "title": "Deep Work",
         "author": "Cal Newport"
       }
       ```
     * Click **Send**. Verify `201 Created`.
   * **PUT Update Book**:
     * Set Method to `PUT`, URL: `http://localhost:3000/books/1`.
     * Under **Body** tab -> raw -> JSON:
       ```json
       {
         "title": "The Alchemist - Updated Edition"
       }
       ```
     * Click **Send**. Verify `200 OK`.
   * **DELETE Book**: Set Method to `DELETE`, URL `http://localhost:3000/books/1`, click **Send**. Verify `200 OK`.
   * **Negative Test Cases**:
     * `GET http://localhost:3000/books/999` &rarr; Verify `404 Not Found`.
     * `POST http://localhost:3000/books` with `{ "title": "" }` &rarr; Verify `400 Bad Request`.
     * `DELETE http://localhost:3000/books/abc` &rarr; Verify `400 Bad Request`.

---

## HTTP Status Codes Used

* **`200 OK`**: Standard response for successful `GET`, `PUT`, and `DELETE` requests.
* **`201 Created`**: The request succeeded and a new book resource was created (`POST`).
* **`400 Bad Request`**: The client sent invalid data (e.g., missing required fields, invalid ID format).
* **`404 Not Found`**: The requested resource/route or book ID does not exist.
* **`500 Internal Server Error`**: Generic server error handler for unexpected server exceptions.

---

## Learning Outcomes
* Built a complete RESTful web service with Node.js and Express.js from scratch.
* Implemented clean routing architecture and middleware configuration.
* Mastered JSON parsing using `express.json()`.
* Learned best practices for HTTP status codes and error handling in REST APIs.
* Gained experience testing APIs and verifying edge cases with Postman.

---

## Author
**Darshan Makwana**  
Web Development Intern
