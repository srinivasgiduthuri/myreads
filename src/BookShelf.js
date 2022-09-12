import Book from "./Book";

const BookShelf = ({ books, shelf, onShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.value}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <Book key={book.id} book={book} onShelfChange={onShelfChange} />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
