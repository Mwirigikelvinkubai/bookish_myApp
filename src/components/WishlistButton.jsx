import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const WishlistButton = ({ book }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } =
    useContext(BookContext);
  const inWishlist = isInWishlist(book.id);

  const handleClick = () => {
    if (inWishlist) {
      removeFromWishlist(book.id);
    } else {
      addToWishlist(book);
    }
  };

  return (
    <button onClick={handleClick} className="wishlist-button">
      {inWishlist ? "💖 Remove from Wishlist" : "🤍 Add to Wishlist"}
    </button>
  );
};

export default WishlistButton;
