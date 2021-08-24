const express = require("express");
const router = express.Router();

// load book model
const Book = require("../../models/Book");  

// @route GET api/books/test
// @description tests books route
// @access Public
router.get("/test", (req, res) => res.send("Test route in book"));

// @route GET api/books
// @description  GET all books
// @access Public
router.get("/", (req, res) => {
    Book.find()
        .then(books => res.json({ data: books, message: "Books retrieved successfully" }))
        .catch(err => res.status(400).json({ message: "No Books Found" }));
});

// @route GET api/books/:id
// @description GET book by id
// @access Public
router.get("/:id", (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json({ data: book, message: "Book retrieved successfully"}))
        .catch(err => res.status(400).json({ message: "No Book Found for id = " + req.params.id }))
});

// @route POST api/books
// @description add/save book
// @access Public
router.post("/", (req, res) => {
    Book.create(req.body)
        .then(book => res.json({ message: "Book added successfully" }))
        .catch(err => res.status.apply(400).json({ message: "Uanble to add / save book", err }))
});

// @route PATCH api/books/:id
// @description update book
// @access Public
router.patch("/:id", (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ message: "Book update successful", book }))
        .catch(err => res.status(400).json({ message: "Unable to update book", err }))
});

// @route DELETE api/books/:id
// @description delete a book
// @access Public
router.delete("/:id", (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({ message: "Book deleted successfully" }))
        .catch(err => res.status(400).json({ message: "Unable to delete book", err }))
});

module.exports = router