import BookShow from "./BookShow.js";
import useBooksContext from '../hooks/use-books-context';

function BookList() {
  const { books } = useBooksContext();

  /* We have to use props and context at the same time, because we cannot get single book from context
  We need BookShow component and props here */
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
