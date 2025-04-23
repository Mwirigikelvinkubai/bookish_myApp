import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import BookDetails from "../pages/BookDetails"
import Wishlist from "../pages/Wishlist"

function AppRouter() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/book/:id"
                element={<BookDetails />}
            />
            <Route
                path="/wishlist"
                element={<Wishlist />}
            />
        </Routes>
    )
}

export default AppRouter;

