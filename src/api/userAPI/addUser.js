const addUser = async (newUser) => {
    const res = await fetch('https://680f048c67c5abddd193916e.mockapi.io/bookishV1/users', {
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
 
