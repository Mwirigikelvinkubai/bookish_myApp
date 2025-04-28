import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      // Find the user by username (or email)
      const response = await fetch(`https://680f048c67c5abddd193916e.mockapi.io/bookishV1/users?username=${username}`);
      const users = await response.json();
  
      if (users.length === 0) {
        alert("User not found");
        return;
      }
  
      const user = users[0]; // Assuming unique username
      if (user.password === password) {
        setUser(user); // Set user context
        navigate("/wishlist"); // Redirect to wishlist
      } else {
        alert("Invalid password");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      alert("Login failed");
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
