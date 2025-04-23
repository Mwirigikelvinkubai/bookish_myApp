import { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Placeholder for fetch logic — this would normally call an API or json-server
    setBooks([]);
  }, []);

  const addToWishlist = (book) => {
    setWishlist((prev) => [...prev, book]);
  };

  const removeFromWishlist = (bookId) => {
    setWishlist((prev) => prev.filter((b) => b.id !== bookId));
  };

  const isInWishlist = (bookId) => {
    return wishlist.some((b) => b.id === bookId);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
