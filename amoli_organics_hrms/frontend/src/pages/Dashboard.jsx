import Navbar from "../components/Navbar";
export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="card">Total Employees: <strong>--</strong></div>
          <div className="card">Pending Leaves: <strong>--</strong></div>
          <div className="card">Payroll Due: <strong>--</strong></div>
        </div>
        <div className="mt-6 card">
          <h3 className="font-bold mb-2">Recent Activity</h3>
          <div>No recent activity yet.</div>
        </div>
      </div>
    </div>
  );
}
