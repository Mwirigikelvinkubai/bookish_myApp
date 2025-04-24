const removeFromUserWishlist = async (userId, bookId) => {
    const res = await fetch(`http://localhost:3001/users/${userId}/wishlist/${bookId}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to remove book from wishlist");
    return res.json();
  };
  export default removeFromUserWishlist;
  