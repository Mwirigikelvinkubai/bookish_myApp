const updateUser = async (userId, updatedInfo) => {
    const res = await fetch(`https://680f048c67c5abddd193916e.mockapi.io/bookishV1/users`, {
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
  