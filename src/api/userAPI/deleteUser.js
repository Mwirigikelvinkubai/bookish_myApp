const deleteUser = async (userId) => {
    const res = await fetch(`http://localhost:3001/users/${userId}`, {
      method: 'DELETE'
    });
  
    if (!res.ok) throw new Error('Failed to delete user');
  };
  
  export default deleteUser;
  