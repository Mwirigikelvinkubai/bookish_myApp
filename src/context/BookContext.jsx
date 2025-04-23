import { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Placeholder for fetch logic — this would normally call an API or json-server
    setBooks([]);
  }, []);

  const addToWishlist = (book) => {
    setWishlist((prev) => {
      const alreadyIn = prev.some((b) => b.key === book.key);
      if (alreadyIn) return prev;
      return [...prev, { ...book }];
    });
  };

  const removeFromWishlist = (bookKey) => {
    setWishlist((prev) => prev.filter((b) => b.key !== bookKey));
  };

  const isInWishlist = (bookKey) => {
    return wishlist.some((b) => b.key === bookKey);
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
