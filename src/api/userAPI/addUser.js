const addUser = async (newUser) => {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });
  
    if (!res.ok) throw new Error('Failed to add user');
    return await res.json();
  };
  
  export default addUser;
  