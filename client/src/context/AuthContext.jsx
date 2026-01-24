import { createContext, useContext, useState, useEffect } from "react";
import { setAuthToken } from "../api/api"; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    const token = localStorage.getItem("token"); 
    if (saved && token) {
        setAuthToken(token);
        return JSON.parse(saved);
    }
    return null;
  });

  useEffect(() => {
    if (user) {
        const token = localStorage.getItem("token");
        if (token) {
            setAuthToken(token);
        }
    } else {
        setAuthToken(null);
    }
  }, [user]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    if (userData.token) {
        localStorage.setItem("token", userData.token);
        setAuthToken(userData.token);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setAuthToken(null); // Clear token from axios defaults
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
