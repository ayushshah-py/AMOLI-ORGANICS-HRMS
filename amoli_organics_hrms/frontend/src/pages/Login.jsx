import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
export default function Login() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [err,setErr]=useState("");
  const { login } = useContext(AuthContext); const nav = useNavigate();
  const handleLogin = async (e) => { e.preventDefault(); try { await login(email,password); nav("/"); } catch(err){ setErr(err?.response?.data?.msg || "Login failed"); } };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-96 card">
        <h2 className="text-xl font-bold mb-4 text-center">AMOLI ORGANICS HRMS - LOGIN</h2>
        {err && <div className="bg-red-100 text-red-700 p-2 mb-3 rounded">{err}</div>}
        <form onSubmit={handleLogin}>
          <input className="input mb-3" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="input mb-3" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button className="btn" type="submit">LOGIN</button>
        </form>
        <div className="text-sm mt-3 text-center text-gray-500">Default: admin@hrms.com / Admin@123</div>
      </div>
    </div>
  );
}
