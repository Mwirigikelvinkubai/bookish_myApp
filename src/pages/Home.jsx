import { useBookContext } from "../context/BookContext";
import BookGrid from "../components/BookGrid";
import BookCard from "../components/BookCard";

const Home = () => {
  const { books, query, setQuery, isLoading, error } = useBookContext()

  return (
    <div className="p-6">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
          className="px-4 py-2 rounded-lg w-full max-w-md text-black"
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
