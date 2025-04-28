import getCurrentUserId from "./getCurrentUserId";

const fetchUser = async () => {
  const userId = getCurrentUserId();
  const response = await fetch(`/api/users/${userId}`);
  if (!response.ok) throw new Error("Failed to fetch user data");
  return response.json();
};

export default fetchUser;
