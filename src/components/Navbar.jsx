import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function NavBar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown visibility

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev); // Toggle the dropdown
    };

    return (
        <header>
            <h2>Bookish</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/wishlist">Wishlist</Link>

                {/* Genre Button to toggle dropdown */}
                <div className="genre-dropdown">
                    <button onClick={toggleDropdown}>Genre</button>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/genre/fiction">Fiction</Link></li>
                            <li><Link to="/genre/non-fiction">Non-Fiction</Link></li>
                            <li><Link to="/genre/science">Science</Link></li>
                            <li><Link to="/genre/history">History</Link></li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
