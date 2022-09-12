import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";

const App = () => {
  const shelves = {
    currentlyReading: { key: "currentlyReading", value: "Currently Reading" },
    wantToRead: { key: "wantToRead", value: "Want to Read" },
    read: { key: "read", value: "Read" },
  };

  const [books, setBooks] = useState([]);
  const [booksByQuery, setBooksByQuery] = useState([]);
  const [booksByShelves, setBooksByShelves] = useState({});

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, [booksByShelves]);

  const handleSearch = (event) => {
    const searchBooksByQuery = async () => {
      const res = await BooksAPI.search(event.target.value, 10);
      setBooksByQuery(res);
    };
    searchBooksByQuery();
  };

  const handleShelfChange = (book, shelf) => {
    const updateBook = async () => {
      const res = await BooksAPI.update(book, shelf);
      setBooksByShelves(res);
    };
    updateBook();
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ListBooks
              books={books}
              shelves={shelves}
              onShelfChange={handleShelfChange}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchBooks
              books={books}
              onSearch={handleSearch}
              booksByQuery={booksByQuery}
              onSearchClose={setBooksByQuery}
              onShelfChange={handleShelfChange}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
