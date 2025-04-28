const deleteUser = async (userId) => {
    const res = await fetch(`/api/users/${userId}`, {
      method: 'DELETE'
    });
  
    if (!res.ok) throw new Error('Failed to delete user');
  };
  
  export default deleteUser;
  