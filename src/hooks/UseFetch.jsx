import { useState, useEffect } from "react";

const useFetchBooks = (query) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Debouncing the query to avoid rapid API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer); // Clear the timeout on cleanup
  }, [query]);

  // Fetching books based on the debounced query
  useEffect(() => {
    if (!debouncedQuery) return;

    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://openlibrary.org/search.json?q=${debouncedQuery}`
        );
        const data = await res.json();

        console.log("API Response:", data); // Debugging line


        // Handle empty results by setting an appropriate error message
        if (data.docs.length === 0) {
          setError("No books found for this search.");
        } else {
          setBooks(data.docs);
          setError(null); // Reset error if there are results
        }
      } catch (err) {
        setError("Failed to fetch books");
        setBooks([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, [debouncedQuery]);

  return { books, isLoading, error };
};

export default useFetchBooks;

