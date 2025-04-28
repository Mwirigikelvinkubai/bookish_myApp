import getCurrentUserId from "./getCurrentUserId";

const fetchUser = async () => {
  const userId = getCurrentUserId();
  const response = await fetch(`https://680f048c67c5abddd193916e.mockapi.io/bookishV1/users/${userId}`);
  if (!response.ok) throw new Error("Failed to fetch user data");
  return response.json();
};

export default fetchUser;
