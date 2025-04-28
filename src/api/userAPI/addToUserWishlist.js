const addToUserWishlist = async (userId, book) => {
  const BASE_URL = `https://680f048c67c5abddd193916e.mockapi.io/bookishV1/users/${userId}`;

  try {
    // Step 1: Fetch the user's current data
    const userRes = await fetch(BASE_URL);
    const userData = await userRes.json();

    if (!userRes.ok) {
      throw new Error("Failed to fetch user data");
    }

    // Step 2: Create the wishlist item
    const wishlistItem = {
      bookKey: book.key,
      title: book.title,
      author: book.author_name?.[0] || "Unknown Author",
      coverUrl: book.cover_i 
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` 
        : "https://via.placeholder.com/150"
    };

    // Step 3: Update the wishlist
    const updatedWishlist = [...userData.wishlist, wishlistItem];

    // Step 4: Send the updated wishlist back to the server
    const res = await fetch(BASE_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        wishlist: updatedWishlist,  // Add the new wishlist item
      }),
    });

    if (!res.ok) {
      const responseText = await res.text();
      console.error("Response Error:", responseText);
      throw new Error("Failed to add to wishlist");
    }

    console.log("Book successfully added to wishlist.");
  } catch (err) {
    console.error("Error in addToUserWishlist:", err.message);
    throw new Error("Failed to add book to wishlist");
  }
};

export default addToUserWishlist;
