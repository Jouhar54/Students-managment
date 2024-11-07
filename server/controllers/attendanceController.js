const Attendance = require('../models/Attendance');
const Student = require('../models/Student');

//calculating half-day leaves
const calculateFullDays = (attendanceRecords) => {
  let fullDays = 0;
  let halfDays = 0;

  attendanceRecords.forEach(record => {
    if (record.status === 'Half-Day') halfDays += 1;
    else if (record.status === 'Absent') fullDays += 1;
  });

  fullDays += Math.floor(halfDays / 2);
  return fullDays;
};


const markAttendance = async (req, res) => {
  try {
    const { studentId, date, status } = req.body;

    let attendanceRecord = await Attendance.findOne({ studentId, date });

    if (attendanceRecord) {
      attendanceRecord.status = status;
      await attendanceRecord.save();
      res.status(200).json({ message: 'Attendance updated successfully', attendanceRecord });
    } else {
      attendanceRecord = new Attendance({ studentId, date, status });
      await attendanceRecord.save();
      res.status(201).json({ message: 'Attendance marked successfully', attendanceRecord });
    }

  } catch (error) {
    res.status(500).json({ message: 'Error marking attendance', error });
  }
};

// Get attendance report for all students
const getAttendanceReport = async (req, res) => {
  try {
    const report = await Student.aggregate([
      {
        $lookup: {
          from: 'attendances',        // Attendance collection
          localField: '_id',          // Student ID field in Student collection
          foreignField: 'studentId',  // Foreign key in Attendance collection
          as: 'attendanceRecords'     // New field for attendance data
        }
      },
      {
        $project: {
          name: 1,
          rollNumber: 1,
          attendanceRecords: 1,
          fullDays: { $function: {
            body: calculateFullDays,
            args: ['$attendanceRecords'],
            lang: 'js'
          }}
        }
      }
    ]);

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching attendance report', error });
  }
};

module.exports = { getAttendanceReport, markAttendance }