import { Link } from "react-router-dom";
import Book from "./Book";

const SearchBooks = ({ onSearch, booksByQuery }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
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
              return <Book key={book.id} book={book} />;
            })}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
