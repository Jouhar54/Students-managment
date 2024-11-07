const mongoose = require("mongoose");
const attendanceSchema = new mongoose.Schema({
  studentId: {
    type: String,
    // ref: "Student",
    required: true,
  },
  date: { type: Date, required: true },
  status: {
    type: String,
    enum: ["Present", "Absent", "Half-Day"],
    required: true,
  },
});
module.exports = mongoose.model("Attendances", attendanceSchema);