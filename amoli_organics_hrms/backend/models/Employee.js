import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
  name: String,
  department: String,
  designation: String,
  salary: Number,
  joiningDate: Date,
  profileImage: String,
  status: { type: String, default: "active" }
}, { timestamps: true });
export default mongoose.model("Employee", employeeSchema);
