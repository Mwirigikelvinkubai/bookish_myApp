const removeFromUserWishlist = async (userId, bookKey) => {
  const BASE_URL = `https://680f048c67c5abddd193916e.mockapi.io/bookishV1/users/${userId}`;

  try {
    // Step 1: Fetch the user's current data
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch user data");
    const user = await res.json();

    // Step 2: Filter out the book that matches the bookKey
    const updatedWishlist = (user.wishlist || []).filter(book => book.bookKey !== bookKey);

    // Step 3: Send the updated wishlist back to the server
    const patchRes = await fetch(BASE_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        wishlist: updatedWishlist,  // Update the wishlist after removing the book
      }),
    });

    if (!patchRes.ok) {
      const responseText = await patchRes.text();
      console.error("Response Error:", responseText);
      throw new Error("Failed to update wishlist");
    }

    console.log("Book successfully removed from wishlist.");
  } catch (err) {
    console.error("Error in removeFromUserWishlist:", err.message);
    throw new Error("Failed to remove book from wishlist");
  }
};

export default removeFromUserWishlist;
