import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
export default function Navbar() {
  const { logout } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow">
      <div className="font-bold">AMOLI ORGANICS HRMS</div>
      <div className="flex gap-3">
        <Link to="/" className="px-3">Dashboard</Link>
        <Link to="/employees" className="px-3">Employees</Link>
        <Link to="/attendance" className="px-3">Attendance</Link>
        <Link to="/payroll" className="px-3">Payroll</Link>
        <button onClick={logout} className="btn px-4 ml-2">Logout</button>
      </div>
    </div>
  );
}
