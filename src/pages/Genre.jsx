import React, { useState } from "react";
import useFetchBooks from "../hooks/UseFetch"; // Reusing the fetch books hook

const GenrePage = ({ genre }) => {
  const { books, isLoading, error } = useFetchBooks(genre); // Fetch books by genre

  return (
    <div className="home-container">
      <h1>{genre} Books</h1> {/* Display selected genre */}
      {isLoading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="books-container">
        {books.length > 0 ? (
          books.map((book) => (
            <div className="book-card" key={book.key}>
              <h3>{book.title}</h3>
              <p>{book.author_name?.join(", ")}</p>
            </div>
          ))
        ) : (
          <p>No books found in this genre.</p>
        )}
      </div>
    </div>
  );
};

export default GenrePage;
