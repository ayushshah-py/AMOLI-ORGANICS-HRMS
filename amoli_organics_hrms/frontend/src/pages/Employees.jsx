import { useEffect, useState } from "react";
import api from "../utils/api";
import Navbar from "../components/Navbar";
import EmployeeForm from "./EmployeeForm";
export default function Employees() {
  const [employees,setEmployees]=useState([]); const [showForm,setShowForm]=useState(false); const [edit,setEdit]=useState(null);
  const fetchEmployees = async ()=>{ try{ const res = await api.get("/employees"); setEmployees(res.data); }catch(e){console.error(e);} };
  useEffect(()=>{ fetchEmployees(); },[]);
  const handleDelete = async (id)=>{ if(!confirm("Delete employee?")) return; await api.delete(`/employees/${id}`); fetchEmployees(); };
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Employees</h2>
          <button className="btn w-40" onClick={()=>{ setShowForm(true); setEdit(null); }}>Add Employee</button>
        </div>
        {showForm && <EmployeeForm onClose={()=>{ setShowForm(false); fetchEmployees(); }} edit={edit} />}
        <div className="mt-4 card">
          <table className="w-full">
            <thead><tr className="text-left"><th>Name</th><th>Department</th><th>Designation</th><th>Salary</th><th>Action</th></tr></thead>
            <tbody>
              {employees.map(emp=>(
                <tr key={emp._id} className="border-t">
                  <td>{emp.name}</td><td>{emp.department}</td><td>{emp.designation}</td><td>{emp.salary}</td>
                  <td><button className="px-2 py-1 mr-2" onClick={()=>{ setEdit(emp); setShowForm(true); }}>Edit</button><button className="px-2 py-1 bg-red-100" onClick={()=>handleDelete(emp._id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
