const addToUserWishlist = async (userId, book) => {
    try {
      const res = await fetch(`https://680f048c67c5abddd193916e.mockapi.io/bookishV1/users/${userId}`);
      if (!res.ok) throw new Error("Failed to fetch user");
      const user = await res.json();
  
      const updatedWishlist = [...(user.wishlist || []), book];
  
      const patchRes = await fetch(`https://680f048c67c5abddd193916e.mockapi.io/bookishV1/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ wishlist: updatedWishlist }),
      });
  
      if (!patchRes.ok) throw new Error("Failed to update wishlist");
    } catch (err) {
      throw new Error("Failed to add book to wishlist");
    }
};

export default addToUserWishlist;
