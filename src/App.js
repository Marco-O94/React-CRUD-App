import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  const [books, setBooks] = useState([]);

  // Create a new book
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999), // Generate a random number for now
        title,
      },
    ];
    setBooks(updatedBooks);
  };

  // Delete book by id
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  // Edit book by id
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      // If book.id is equal to id passed in function...
      if (book.id === id) {
        // Copy/Paste book values and overwrite title with newTitle
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
