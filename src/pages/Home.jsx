import { useEffect, useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import useFetchBooks from "../hooks/UseFetch";
import BookCard from "../components/BookCard";

const Home = () => {
  const [query, setQuery] = useState("three body problem");
  const { books, setBooks } = useContext(BookContext);
  const { books: fetchedBooks, isLoading, error } = useFetchBooks(query);

  // Sync fetched books into context state
  useEffect(() => {
    setBooks(fetchedBooks);
  }, [fetchedBooks]);

  return (
    <div>
      {/* Search Bar Section */}
      <div className="search-bar-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
        />
        <button onClick={() => {/* Button functionality can be added here */}}>Search</button>
      </div>

      {/* Loading and Error Messages */}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Book Cards */}
      <div className="book-card-container">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
