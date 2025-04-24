import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import Wishlist from "../pages/Wishlist";
import PageNotFound from "../pages/PageNotFound";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRouter;
