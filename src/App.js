import { useContext, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import BooksContext from "./contexts/books";

function App() {
  const { fetchBooks } = useContext(BooksContext); // Destructuring

  // DONT DO THIS:
  // fetchBooks(); It causes an infinite loop!! We're going to use useEffect
  // DO THIS INSTEAD:

  useEffect(() => {
    fetchBooks();
  }, []);

  /* ------ */

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
