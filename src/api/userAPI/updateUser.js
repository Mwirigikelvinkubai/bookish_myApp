const updateUser = async (userId, updatedInfo) => {
    const res = await fetch(`/api/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedInfo)
    });
  
    if (!res.ok) throw new Error('Failed to update user');
    return await res.json();
  };
  
  export default updateUser;
  