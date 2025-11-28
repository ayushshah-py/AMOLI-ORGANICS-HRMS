import mongoose from "mongoose";
const attendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  date: String,
  checkIn: String,
  checkOut: String,
  status: String
}, { timestamps: true });
export default mongoose.model("Attendance", attendanceSchema);
