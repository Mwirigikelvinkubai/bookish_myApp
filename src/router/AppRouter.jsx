import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist";
import PageNotFound from "../pages/PageNotFound";
import Genre from "../pages/Genre";
import '../components/App.css';  
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import RequireAuth from "../components/Authentication";

//after page loads, user should first see login page
function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

    {/* protected routes that need authentication */}
    
      <Route 
        path="/" 
        element={
          <RequireAuth>
             <Home />
          </RequireAuth> 
          } 
        />

      <Route 
        path="/wishlist" 
        element={
          <RequireAuth>
            <Wishlist />
          </RequireAuth>
        } 
      />
      <Route 
        path="/genre" 
        element={
          <RequireAuth>
            <Genre />
          </RequireAuth>
        } 
      />
      
      <Route path="*" element={<PageNotFound />} />
      
    </Routes>
  );
}

export default AppRouter;
