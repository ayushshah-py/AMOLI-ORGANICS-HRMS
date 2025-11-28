import { useState, useEffect } from "react";
import api from "../utils/api";
export default function EmployeeForm({ onClose, edit }) {
  const [form,setForm]=useState({ name:"", department:"", designation:"", salary:"" });
  useEffect(()=>{ if(edit) setForm(edit); },[edit]);
  const handleSubmit=async(e)=>{ e.preventDefault(); if(edit) await api.put(`/employees/${edit._id}`, form); else await api.post("/employees", form); onClose(); };
  return (
    <div className="card mb-4">
      <h3 className="font-bold mb-2">{edit ? "Edit Employee":"Add Employee"}</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
        <input className="input" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
        <input className="input" placeholder="Department" value={form.department} onChange={e=>setForm({...form, department:e.target.value})} />
        <input className="input" placeholder="Designation" value={form.designation} onChange={e=>setForm({...form, designation:e.target.value})} />
        <input className="input" placeholder="Salary" value={form.salary} onChange={e=>setForm({...form, salary:e.target.value})} />
        <div className="col-span-2 flex gap-2">
          <button className="btn" type="submit">Save</button>
          <button type="button" className="border px-3 py-2 rounded" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
