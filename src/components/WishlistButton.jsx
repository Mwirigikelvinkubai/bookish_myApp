import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import addToUserWishlist from "../api/userAPI/addToUserWishlist";
import removeFromUserWishlist from "../api/userAPI/removeFromUserWishlist";

const WishlistButton = ({ book }) => {
  const { wishlist, setWishlist, userId } = useContext(BookContext);

  // Check if the book is already in the wishlist
  const inWishlist = wishlist.some((b) => b.key === book.key);

  // Handle click: add or remove book from wishlist
  const handleClick = async () => {
    if (inWishlist) {
      // Remove from wishlist (both UI and backend)
      try {
        await removeFromUserWishlist(userId, book.key);
        setWishlist(wishlist.filter((b) => b.key !== book.key));
      } catch (err) {
        console.error("Error removing from wishlist:", err);
      }
    } else {
      // Add to wishlist (both UI and backend)
      try {
        await addToUserWishlist(userId, book);
        setWishlist([...wishlist, { ...book }]);
      } catch (err) {
        console.error("Error adding to wishlist:", err);
      }
    }
  };

  return (
    <button onClick={handleClick} className="wishlist-button">
      {inWishlist ? "💖 Remove from Wishlist" : "🤍 Add to Wishlist"}
    </button>
  );
};

export default WishlistButton;
