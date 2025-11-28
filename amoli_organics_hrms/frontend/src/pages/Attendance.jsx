import { useEffect, useState } from "react";
import api from "../utils/api";
import Navbar from "../components/Navbar";
export default function Attendance() {
  const [rows,setRows]=useState([]);
  const fetch = async ()=>{ const res = await api.get("/attendance"); setRows(res.data); };
  useEffect(()=>{ fetch(); },[]);
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Attendance</h2>
        <div className="card">
          <table className="w-full">
            <thead><tr><th>Name</th><th>Date</th><th>Check In</th><th>Check Out</th></tr></thead>
            <tbody>
              {rows.map(r=>(
                <tr key={r._id} className="border-t">
                  <td>{r.employeeName || r.employeeId}</td><td>{r.date}</td><td>{r.checkIn}</td><td>{r.checkOut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
