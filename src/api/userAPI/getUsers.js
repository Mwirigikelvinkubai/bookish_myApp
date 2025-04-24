const getUsers = async () => {
    const res = await fetch('http://localhost:3001/users');
    if (!res.ok) throw new Error('Failed to fetch users');
    return await res.json();
  };
  
  export default getUsers;
  