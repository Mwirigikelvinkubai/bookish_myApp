const deleteUser = async (userId) => {
  const res = await fetch(`https://680f048c67c5abddd193916e.mockapi.io/bookishV1/users/${userId}`, {
    method: 'DELETE'
  });

  if (!res.ok) throw new Error('Failed to delete user');
};

export default deleteUser;
