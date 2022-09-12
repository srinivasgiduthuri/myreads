import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const ListBooks = ({ books, shelves, onShelfChange }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            books={books.filter(
              (book) => book.shelf === shelves.currentlyReading.key
            )}
            shelf={shelves.currentlyReading}
            onShelfChange={onShelfChange}
          />
          <BookShelf
            books={books.filter(
              (book) => book.shelf === shelves.wantToRead.key
            )}
            shelf={shelves.wantToRead}
            onShelfChange={onShelfChange}
          />
          <BookShelf
            books={books.filter((book) => book.shelf === shelves.read.key)}
            shelf={shelves.read}
            onShelfChange={onShelfChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default ListBooks;
