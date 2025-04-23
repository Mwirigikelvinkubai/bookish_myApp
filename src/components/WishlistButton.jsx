import React from "react";
import { useStateContext } from "../context/StateContext";
import usePost from "../hooks/usePost";

function WishlistButton({ book }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useStateContext();
  const { postData } = usePost("http://localhost:5173/wishlist");

  const isInWishlist = wishlist.some(item => item.key === book.key);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(book.key); 
    } else {
      const wishlistItem = {
        key: book.key,
        title: book.title,
        author: book.author_name?.[0] || "Unknown Author",
        cover_id: book.cover_i || null,
      };

      postData(wishlistItem).then((savedBook) => {
        if (savedBook) addToWishlist(savedBook);
      });
    }
  };

  return (
    <button
      onClick={handleWishlistToggle}
      className={`wishlist-btn ${isInWishlist ? "in-wishlist" : ""}`}
    >
      {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
    </button>
  );
}

export default WishlistButton;

