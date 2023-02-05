import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from '../hooks/use-books-context';

function BookShow({ book }) {
  const { deleteBookById } = useBooksContext();
  const [showEdit, setShowEdit] = useState(false);
  // HandleDeleteClick Function to manage parent function and delete book by id
  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };
  // Function to handle edit click and on click fire the Toggle function
  const handleEditClick = () => {
    // Toggle function
    setShowEdit(!showEdit);
  };

  /*
      NEVER DO THIS!!! If you want to close the form in the child component, don't use this way.
      const handleSubmit = () => {
         setShowEdit(false);
      };
      content = <BookEdit book={book} onEdit={onEdit} onSubmit={handleSubmit} />;
      
      And than in Child component:
      function BookEdit({ book, onEdit onSubmit }) {
         
         const handleSubmit = (event) => {
            event.preventDefault();
            onEdit(book.id, title)
            onSubmit();
         }
      }

   */
  // BEST SOLUTION !!
  const handleSubmit = () => {
    setShowEdit(false);
  };
  /* We still pass handleSubmit here because of closing editing after submit event, 
  but editBookById will be passed inside bookEdit */

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/300`} />

      <div>{content}</div>
      <div className="actions">
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default BookShow;
