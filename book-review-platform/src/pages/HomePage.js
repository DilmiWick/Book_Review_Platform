import React from "react";
import BookList from "../components/BookList";

const HomePage = () => {
  return (
    <div className="container mt-5">
      <h1>Book Review Platform</h1>
      <BookList />
    </div>
  );
};

export default HomePage;
