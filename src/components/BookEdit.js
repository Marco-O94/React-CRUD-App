import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  // Everytime we create an input, we have to track it with State System
  /* Everytime we are thinking about displaying or changing the value of that input in any way, shape or form
      what we're really wanting to be thinking of is our piece of state that controls it */
  const [title, setTitle] = useState(book.title); // Use default value of state

  // Handle every input change on title input
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    // We have to prevent form behaviour
    event.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary" type="submit">
        Save
      </button>
    </form>
  );
}

export default BookEdit;
