import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <h2>Bookish</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
      </nav>
    </header>
  );
}

export default NavBar;
