import { useState } from 'react';
import { useStudents } from '../context/studentContext';
import axios from 'axios';

const AttendanceMarking = () => {
  const { students } = useStudents();
  const [date, setDate] = useState('');
  const [attendance, setAttendance] = useState({});

  // Function to handle attendance change
  const handleAttendance = async (rollNumber, status) => {
    try {
      // Make the API call to mark attendance
      await axios.post('http://localhost:3000/api/attendance/mark-attendance', {
        studentId:rollNumber,
        date,
        status,
      });
      
      // Update the local attendance state
      setAttendance((prevAttendance) => ({
        ...prevAttendance,
        [rollNumber]: status,
      }));
    } catch (error) {
      console.error("Error marking attendance:", error);
    }
  };

  return (
    <div className="p-8 ml-64">
      <h2 className="text-3xl font-bold mb-6">Mark Attendance</h2>

      {/* Date Picker */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Select Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Attendance Table */}
      <table className="w-full text-left border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4">Roll Number</th>
            <th className="p-4">Name</th>
            <th className="p-4">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rollNumber} className="border-t">
              <td className="p-4">{student.rollNumber}</td>
              <td className="p-4">{student.name}</td>
              <td className="p-4">
                <select
                  value={attendance[student.rollNumber] || 'Present'}
                  onChange={(e) => handleAttendance(student.rollNumber, e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg"
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Half-Day">Half-Day</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceMarking;
