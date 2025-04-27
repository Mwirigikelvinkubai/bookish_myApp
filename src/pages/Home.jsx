import React from "react";
import { useBookContext } from "../context/BookContext";
import BookGrid from "../components/BookGrid";
import BookCard from "../components/BookCard";
import Search from "../components/Search";

const Home = () => {
  const { books, query, setQuery, isLoading, error } = useBookContext()

  return (
    <div className="p-6">
      <Search query={query} setQuery={setQuery} />

      {isLoading && <p className="text-center text-gray-400">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <BookGrid>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5rem" }}>
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
        </div>
      </BookGrid>
    </div>
  );
};

export default Home;
