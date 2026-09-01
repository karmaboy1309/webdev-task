/**
 * ==============================================================================
 * Book Management REST API
 * Task-3: Backend Web Development Internship Task
 * Author: Darshan Makwana
 * Technologies: Node.js, Express.js (In-Memory Data Storage)
 * ==============================================================================
 */

// Import Express framework
const express = require('express');

// Initialize the Express application
const app = express();

// Define server port
const PORT = process.env.PORT || 3000;

// ------------------------------------------------------------------------------
// Middleware Setup
// ------------------------------------------------------------------------------

// Built-in middleware to parse incoming JSON request bodies (req.body)
app.use(express.json());

// Simple logging middleware to log incoming requests in the terminal
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// ------------------------------------------------------------------------------
// In-Memory Data Store
// ------------------------------------------------------------------------------
// Array holding sample books for CRUD operations
let books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear"
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee"
  }
];

// ------------------------------------------------------------------------------
// API Routes
// ------------------------------------------------------------------------------

/**
 * @route   GET /
 * @desc    Root health-check / welcome route
 * @access  Public
 */
app.get('/', (req, res) => {
  res.status(200).json({
    message: "Book Management REST API is running."
  });
});

/**
 * @route   GET /books
 * @desc    Get all books in the inventory
 * @access  Public
 */
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

/**
 * @route   GET /books/:id
 * @desc    Get a single book by its unique ID
 * @access  Public
 */
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  // Validate that ID is a valid number
  if (isNaN(bookId)) {
    return res.status(400).json({
      message: "Invalid book ID format. ID must be an integer."
    });
  }

  // Find book by ID
  const book = books.find((b) => b.id === bookId);

  // If book not found, return 404 Not Found
  if (!book) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  // Return the found book
  res.status(200).json(book);
});

/**
 * @route   POST /books
 * @desc    Create and add a new book to the inventory
 * @access  Public
 */
app.post('/books', (req, res) => {
  const { title, author } = req.body;

  // Validation: Check if title and author are provided and non-empty
  if (
    !title ||
    !author ||
    typeof title !== 'string' ||
    typeof author !== 'string' ||
    title.trim() === '' ||
    author.trim() === ''
  ) {
    return res.status(400).json({
      message: "Validation Error: Both 'title' and 'author' are required fields and must not be empty."
    });
  }

  // Generate a unique ID (auto-increment based on existing max ID)
  const nextId = books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1;

  // Construct new book object
  const newBook = {
    id: nextId,
    title: title.trim(),
    author: author.trim()
  };

  // Add new book to in-memory array
  books.push(newBook);

  // Return 201 Created status with the newly created book
  res.status(201).json({
    message: "Book created successfully",
    book: newBook
  });
});

/**
 * @route   PUT /books/:id
 * @desc    Update title and/or author of an existing book by ID
 * @access  Public
 */
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  // Validate ID format
  if (isNaN(bookId)) {
    return res.status(400).json({
      message: "Invalid book ID format. ID must be an integer."
    });
  }

  // Find the index of the book to update
  const bookIndex = books.findIndex((b) => b.id === bookId);

  // If book does not exist, return 404 Not Found
  if (bookIndex === -1) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  const { title, author } = req.body;

  // Validate that at least one field (title or author) is provided for update
  const hasValidTitle = title && typeof title === 'string' && title.trim() !== '';
  const hasValidAuthor = author && typeof author === 'string' && author.trim() !== '';

  if (!hasValidTitle && !hasValidAuthor) {
    return res.status(400).json({
      message: "Validation Error: Please provide a valid 'title' or 'author' to update."
    });
  }

  // Apply updates if valid
  if (hasValidTitle) {
    books[bookIndex].title = title.trim();
  }

  if (hasValidAuthor) {
    books[bookIndex].author = author.trim();
  }

  // Return 200 OK with the updated book
  res.status(200).json({
    message: "Book updated successfully",
    book: books[bookIndex]
  });
});

/**
 * @route   DELETE /books/:id
 * @desc    Delete a book from the inventory by ID
 * @access  Public
 */
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  // Validate ID format
  if (isNaN(bookId)) {
    return res.status(400).json({
      message: "Invalid book ID format. ID must be an integer."
    });
  }

  // Find the index of the book to delete
  const bookIndex = books.findIndex((b) => b.id === bookId);

  // If book does not exist, return 404 Not Found
  if (bookIndex === -1) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  // Remove the book from the array
  const deletedBook = books.splice(bookIndex, 1)[0];

  // Return 200 OK with confirmation
  res.status(200).json({
    message: "Book deleted successfully",
    deletedBook: deletedBook
  });
});

// ------------------------------------------------------------------------------
// 404 Route Not Found Handler
// ------------------------------------------------------------------------------
app.use((req, res) => {
  res.status(404).json({
    message: `Cannot ${req.method} ${req.originalUrl} - Route not found.`
  });
});

// ------------------------------------------------------------------------------
// Global Error Handling Middleware
// ------------------------------------------------------------------------------
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err.stack);
  res.status(500).json({
    message: "Internal server error occurred."
  });
});

// ------------------------------------------------------------------------------
// Start Server
// ------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(` Book Management REST API is running!`);
  console.log(` URL: http://localhost:${PORT}`);
  console.log(` Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`====================================================`);
});
