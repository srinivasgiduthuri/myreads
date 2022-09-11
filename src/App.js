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

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const handleSearch = (event) => {
    const searchBooksByQuery = async () => {
      const res = await BooksAPI.search(event.target.value, 10);
      setBooksByQuery(res);
    };
    searchBooksByQuery();
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<ListBooks books={books} shelves={shelves} />}
        />
        <Route
          path="/search"
          element={
            <SearchBooks onSearch={handleSearch} booksByQuery={booksByQuery} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
