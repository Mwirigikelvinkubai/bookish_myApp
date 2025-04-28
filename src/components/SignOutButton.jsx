import React from "react";
import { useUser } from "../context/UserContext";
import { useBookContext } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

const SignOutButton = () => {
  const { setUser } = useUser();
  const { setWishlist } = useBookContext();
  const navigate = useNavigate();

  const handleSignOut = () => {
    setUser(null); // Clear user context
    localStorage.removeItem("userId"); // Clears any user data in localStorage
    setWishlist([]); // Clear wishlist from context
    navigate("/login"); // Redirect to login page
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutButton;
