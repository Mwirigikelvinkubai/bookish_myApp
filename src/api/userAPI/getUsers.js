const getUsers = async (username) => {

  //filter to get user by username
  const res = await fetch(`http://localhost:3001/users?username=${username}`);
  if (!res.ok) throw new Error('Failed to fetch user');
  const users = await res.json();
  return users[0]; // Return the first user since username is unique to one user
};

export default getUsers;

  