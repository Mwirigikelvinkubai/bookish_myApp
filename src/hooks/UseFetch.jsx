import { useState, useEffect } from "react";
import Fuse from "fuse.js";

const useFetchBooks = (query) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Debouncing the query to avoid rapid API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer); // Clear the timeout on cleanup
  }, [query]);

  useEffect(() => {
    const fetchBooks = async () => {
      if (!debouncedQuery) return;  // Don't fetch if query is empty

      setIsLoading(true);

      try {
        const res = await fetch(`https://openlibrary.org/search.json?q=${debouncedQuery}`);
        const data = await res.json();

        if (data.docs.length === 0) {
          setError("No books found for this search.");
          setBooks([]);
        } else {
          setError(null);
          const fetchedBooks = data.docs;

          // Apply Fuse.js for better search relevance
          const fuse = new Fuse(fetchedBooks, {
            keys: ['title', 'author'],
            threshold: 0.3, // Adjust for relevance
          });

          const result = fuse.search(debouncedQuery);
          setBooks(result.map(result => result.item)); // Extract matched books
        }
      } catch (err) {
        setError("Failed to fetch books");
        setBooks([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (debouncedQuery) fetchBooks();  // Only fetch when query is not empty
  }, [debouncedQuery]);

  return { books, isLoading, error };
};

export default useFetchBooks;
