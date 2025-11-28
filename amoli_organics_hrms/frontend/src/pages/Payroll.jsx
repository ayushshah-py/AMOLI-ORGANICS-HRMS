import Navbar from "../components/Navbar";
export default function Payroll() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-bold">Payroll</h2>
        <div className="card">
          <p>Payroll processing module will show salary, earnings, deductions, and generate payslip PDFs.</p>
          <button className="btn mt-4" onClick={()=>alert("Feature ready in backend")}>Process Payroll</button>
        </div>
      </div>
    </div>
  );
}
