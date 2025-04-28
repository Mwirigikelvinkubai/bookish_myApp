import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; 

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");  // Added username field
  const [firstName, setFirstName] = useState(""); // Added firstName field
  const [lastName, setLastName] = useState(""); // Added lastName field
  const { setUser } = useUser(); // Set user context after registration
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
  
    const userData = {
      username,
      email,
      password,
      firstName,
      lastName,
      wishlist: [], // New users will start with an empty wishlist
    };
  
    try {
      const response = await fetch("https://680f048c67c5abddd193916e.mockapi.io/bookishV1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to register user");
      }
  
      const newUser = await response.json(); // Response from the server (newly created user)
      setUser(newUser); // Set the user in context
  
      // Redirect to wishlist page or home page
      navigate("/wishlist");
    } catch (err) {
      console.error("Error registering user:", err);
    }
  };
  

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
