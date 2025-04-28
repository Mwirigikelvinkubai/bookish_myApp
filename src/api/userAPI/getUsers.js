const getUsers = async () => {
  const res = await fetch('https://680f048c67c5abddd193916e.mockapi.io/bookishV1/users');
  if (!res.ok) throw new Error('Failed to fetch users');
  return await res.json();
};

export default getUsers;
