import { useEffect, useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import useFetchBooks from "../hooks/UseFetch";
import BookGrid from "../components/BookGrid";
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
    <div className="min-h-screen flex flex-col bg-gray-800 text-white">
      <div className="flex justify-center my-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
          className="w-32 px-4 py-2 rounded-lg w-full max-w-md text-black"
        />
      </div>

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
