import { useState, useEffect } from "react";

const useFetchBooks = (query) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`https://openlibrary.org/search.json?subject=${query}`)
        const data = await res.json()

        if (data.docs.length === 0) {
          throw new Error("No books found for this search.")
        }
        setBooks(data.docs)
      } catch (err) {
        console.log(err.message)
      }
    }
    
    if(query) fetchBooks()
  }, [query])

  return { books };
};

export default useFetchBooks;

