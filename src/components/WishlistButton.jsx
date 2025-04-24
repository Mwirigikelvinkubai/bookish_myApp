import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { useUser } from "../context/UserContext"; // to access logged-in user
import addToUserWishlist from "../api/userAPI/addToUserWishlist";
import removeFromUserWishlist from "../api/userAPI/removeFromUserWishlist";


const WishlistButton = ({ book }) => {
  const navigate = useNavigate();
  const { user } = useUser(); // get current user
  const { wishlist, setWishlist } = useContext(BookContext);

  // If no user, block wishlist interactions
  const userId = user?.id;

  // If no user, return null to avoid rendering the button
  if (!user) return null;

  // Check if the book is already in the wishlist
  const inWishlist = wishlist.some((b) => b.key === book.key);

  // Function to handle adding/removing from wishlist
  const handleClick = async () => {
    if (!userId) {
      alert("Please sign in or register to add books to your wishlist.");
      navigate("/login");
      return;
    }
    // If the book is already in the wishlist, remove it
    if (inWishlist) {
      try {
        await removeFromUserWishlist(userId, book.key);
        setWishlist(wishlist.filter((b) => b.key !== book.key));
      } catch (err) {
        console.error("Error removing from wishlist:", err);
      }
    } else {
      try {
        await addToUserWishlist(userId, book);
        setWishlist([...wishlist, { ...book }]);
      } catch (err) {
        console.error("Error adding to wishlist:", err);
      }
    }
  };
  // Render the button with appropriate text based on wishlist status
  return (
    <button onClick={handleClick} className="wishlist-button">
      {inWishlist ? "💖 Remove from Wishlist" : "🤍 Add to Wishlist"}
    </button>
  );
};

export default WishlistButton;
