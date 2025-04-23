import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import Wishlist from "../pages/Wishlist";
import PageNotFound from "../pages/PageNotFound"; // Import PageNotFound

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="*" element={<PageNotFound />} /> {/* Catch-all route */}
    </Routes>
  );
}

export default AppRouter;
