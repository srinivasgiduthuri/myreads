import { Link } from "react-router-dom";
import Book from "./Book";

const SearchBooks = ({
  books,
  onSearch,
  booksByQuery,
  onShelfChange,
  onSearchClose,
}) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={() => onSearchClose([])}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={onSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {Array.isArray(booksByQuery) &&
            booksByQuery.length > 0 &&
            booksByQuery.map((book) => {
              const bookById = books.find((b) => b.id === book.id);
              book.shelf = bookById && bookById.shelf;
              return (
                <Book key={book.id} book={book} onShelfChange={onShelfChange} />
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
