import { createContext, useState, useContext, useEffect } from 'react';
import fetchUser from '../api/userAPI/fetchUser';
import addToUserWishlist from '../api/userAPI/addToUserWishlist';
import removeFromUserWishlist from '../api/userAPI/removeFromUserWishlist';

export const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [userId, setUserId] = useState(1); // For now, assume a static logged-in user

  // Fetch user's wishlist on load
  useEffect(() => {
    const loadUserWishlist = async () => {
      try {
        const user = await fetchUser(userId);
        setWishlist(user.wishlist || []);
      } catch (err) {
        console.error("Failed to load user wishlist:", err);
      }
    };
    loadUserWishlist();
  }, [userId]);

  // Add to wishlist and persist to server
  const addToWishlist = async (book) => {
    const alreadyIn = wishlist.some((b) => b.key === book.key);
    if (alreadyIn) return;

    try {
      await addToUserWishlist(userId, book);
      setWishlist((prev) => [...prev, { ...book }]);
    } catch (err) {
      console.error("Error adding book to wishlist:", err);
    }
  };

  // Remove from wishlist and server
  const removeFromWishlist = async (bookKey) => {
    try {
      await removeFromUserWishlist(userId, bookKey);
      setWishlist((prev) => prev.filter((b) => b.key !== bookKey));
    } catch (err) {
      console.error("Error removing book from wishlist:", err);
    }
  };

  const isInWishlist = (bookKey) => wishlist.some((b) => b.key === bookKey);

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        userId,
        setUserId,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
