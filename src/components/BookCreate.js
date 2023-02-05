import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="container book-create">
      <h3>Create a new book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="form-label text-light">
          Title
        </label>
        <input
          className="form-control"
          onChange={handleChange}
          value={title}
          type="text"
          id="title"
          name="title"
        />
        <button className="button" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
