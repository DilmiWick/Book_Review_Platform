import React, { useEffect, useState } from "react";
import api from "../services/api";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await api.get("/books");
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <ul className="list-group">
        {books.map((book) => (
          <li key={book.id} className="list-group-item">
            <h5>{book.title}</h5>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
