import { useState } from "react";
import * as BooksAPI from "./BooksAPI";

const Book = ({ book }) => {
  const [selectedShelf, setSelectedShelf] = useState(book.shelf);
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedShelf(event.target.value);
    const updateBook = async () => {
      await BooksAPI.update(book, selectedShelf);
    };
    updateBook();
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={selectedShelf} onChange={handleChange}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(", ")}</div>
      </div>
    </li>
  );
};

export default Book;
