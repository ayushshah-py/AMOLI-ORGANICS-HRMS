import { createContext, useState, useEffect } from "react";
import api from "../utils/api";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  useEffect(()=>{ const r = localStorage.getItem("amoli_role"); if (r) setRole(r); }, []);
  const login = async (email,password) => {
    const res = await api.post("/auth/login",{ email, password });
    localStorage.setItem("amoli_token", res.data.token);
    localStorage.setItem("amoli_role", res.data.role);
    setRole(res.data.role);
    return res.data;
  };
  const logout = () => { localStorage.removeItem("amoli_token"); localStorage.removeItem("amoli_role"); setRole(null); window.location.href="/login"; };
  return <AuthContext.Provider value={{ role, login, logout }}>{children}</AuthContext.Provider>;
};
