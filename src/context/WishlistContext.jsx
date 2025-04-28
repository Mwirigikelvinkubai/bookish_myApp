import React, { createContext, useContext, useState } from 'react';

// Create WishlistContext
const WishlistContext = createContext();

// Create a provider component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the Wishlist context
export const useWishlist = () => {
  return useContext(WishlistContext);
};

export default WishlistContext;