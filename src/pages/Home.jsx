import { useEffect, useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import useFetchBooks from "../hooks/UseFetch";
import BookCard from "../components/BookCard";
import Search from "../components/Search";

const Home = () => {
  const [query, setQuery] = useState("");
  const { books, setBooks } = useContext(BookContext);
  const { books: fetchedBooks, isLoading, error } = useFetchBooks(query);

  // Sync fetched books into context state
  useEffect(() => {
    setBooks(fetchedBooks);
  }, [fetchedBooks]);

  return (
    <div>
      <Search query={query} setQuery={setQuery}/>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}


      <div className="book-card-container">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
