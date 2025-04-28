import { createContext, useContext, useEffect, useState } from "react";
import getCurrentUserId from "../api/userAPI/getCurrentUserId";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const userId = getCurrentUserId();
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/users/${userId}`);
        if (!res.ok) throw new Error("User not found");
        const data = await res.json();
        setUser(data);
        console.log("Fetched user:", data);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
