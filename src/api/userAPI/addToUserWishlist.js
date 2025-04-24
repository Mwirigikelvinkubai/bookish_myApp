const addToUserWishlist = async (userId, book) => {
    const res = await fetch(`http://localhost:3001/users/${userId}/wishlist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    if (!res.ok) throw new Error("Failed to add book to wishlist");
    return res.json();
  };
  export default addToUserWishlist;
  