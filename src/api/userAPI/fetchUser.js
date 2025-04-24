const fetchUser = async (userId) => {
    const res = await fetch(`http://localhost:3001/users/${userId}`);
    if (!res.ok) throw new Error("Failed to fetch user data");
    return res.json();
  };
  export default fetchUser;
  