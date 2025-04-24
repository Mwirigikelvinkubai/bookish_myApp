import React from "react"; 
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext"; 
import SignOutButton from "./SignOutButton";

function NavBar() {
  const { user } = useUser(); 

  return (
    <header>
      <h2>Bookish</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <SignOutButton /> // Render SignOutButton if user is logged in
        )}
      </nav>
    </header>
  );
}

export default NavBar;