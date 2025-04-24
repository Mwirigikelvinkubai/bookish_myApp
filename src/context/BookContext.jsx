import { createContext, useState, useContext, useEffect } from 'react';
import fetchUser from '../api/userAPI/fetchUser';
import addToUserWishlist from '../api/userAPI/addToUserWishlist';
import removeFromUserWishlist from '../api/userAPI/removeFromUserWishlist';
import { useUser } from './UserContext'; 

export const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const { user } = useUser(); // grabbing user from context
  const userId = user?.id;     // clean fallback if user isn’t loaded yet

  useEffect(() => {
    const loadUserWishlist = async () => {
      if (!userId) return; // wait until userId is available
      try {
        const user = await fetchUser(userId);
        console.log("Loaded wishlist:", user.wishlist); 
        setWishlist(user.wishlist || []);
      } catch (err) {
        console.error("Failed to load user wishlist:", err);
      }
    };
    loadUserWishlist();
  }, [userId]);

  const addToWishlist = async (book) => {
    if (!userId) {
      console.error("User is not logged in.");
      return;
    }
    const alreadyIn = wishlist.some((b) => b.key === book.key);
    if (alreadyIn) return;

    try {
      await addToUserWishlist(userId, book);
      setWishlist((prev) => [...prev, { ...book }]);
    } catch (err) {
      console.error("Error adding book to wishlist:", err);
    }
};

const removeFromWishlist = async (bookKey) => {
    if (!userId) {
      console.error("User is not logged in.");
      return;
    }
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
        setWishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        userId,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
