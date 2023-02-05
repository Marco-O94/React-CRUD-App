import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const apiUrl = "http://localhost:3001/books/";

  /* --- Get books request on startup --- */
  const fetchBooks = async () => {
    // Before proceed with other code, await axios request to be completed
    const response = await axios.get(apiUrl);

    setBooks(response.data);
  };

  /* ------ */

  /* --- Create a new book request --- */
  const createBook = async (title) => {
    const response = await axios.post(apiUrl, {
      title,
    });

    console.log(response);

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  /* ------ */

  /* --- Delete book by id request --- */
  const deleteBookById = async (id) => {
    await axios.delete(apiUrl + id);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  /* ------ */

  /* --- Edit book by id request --- */
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(apiUrl + id, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      // If book.id is equal to id passed in function...
      if (book.id === id) {
        // Copy/Paste book values and overwrite title with newTitle
        return { ...book, ...response.data }; // We sync data with db in this way!! Particularly if there are more users using the app!
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  /* ------ */

  const valueToShare = { // In professional projects it is named differently
    books,
    createBook,
    deleteBookById,
    editBookById,
    fetchBooks
  };

  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}
export { Provider };
export default BooksContext;

// import BooksContext, {Provider} from './../..'
