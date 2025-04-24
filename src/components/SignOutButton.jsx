import React from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const SignOutButton = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSignOut = () => {
    setUser(null); // Clear user context
    localStorage.removeItem("userId"); // clears any user data in localStorage
    navigate("/login"); // Redirect to login page
    setWishlist([]); // Clear wishlist from context
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutButton;
