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
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="bg-gray-800 text-white p-3 rounded-lg w-full max-w-md mb-4"
      />
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
