import { useState, useEffect } from "react";
import Fuse from "fuse.js";

const useFetchBooks = (query) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Debounce only for text search (not genre)
  useEffect(() => {
    if (!query) return;
    
    if (query.startsWith("subject=")) {
      setDebouncedQuery(query); // No debounce needed for genre
    } else {
      const timer = setTimeout(() => {
        setDebouncedQuery(query);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [query]);

  useEffect(() => {
    const fetchBooks = async () => {
      if (!debouncedQuery) return; //Don't fetch if query is empty

      setIsLoading(true);
      setError(null);

      try {
        let url;
        let fetchedBooks = [];

        if (debouncedQuery.startsWith("subject=")) {
          const genre = debouncedQuery.split("=")[1].toLowerCase();
          url = `https://openlibrary.org/subjects/${genre}.json`;

          const res = await fetch(url);
          const data = await res.json();
          fetchedBooks = data.works || [];

        } else {
          url = `https://openlibrary.org/search.json?q=${debouncedQuery}`;
          const res = await fetch(url);
          const data = await res.json();
          fetchedBooks = data.docs || [];

          // Apply Fuse.js for better search matching
          const fuse = new Fuse(fetchedBooks, {
            keys: ['title', 'author'],
            threshold: 0.3,
          });

          const result = fuse.search(debouncedQuery);
          fetchedBooks = result.map(result => result.item);
        }

        if (fetchedBooks.length === 0) {
          setError("No books found.");
          setBooks([]);
        } else {
          setBooks(fetchedBooks);
        }

      } catch (err) {
        setError("Failed to fetch books.");
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
