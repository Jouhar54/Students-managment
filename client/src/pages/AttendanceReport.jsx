import { useState } from 'react';
import { useStudents } from '../context/studentContext';

const AttendanceReport = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const { students } = useStudents();



    return (
        <div className="p-8 ml-64">
            <h2 className="text-3xl font-bold mb-6">Attendance Report</h2>

            <div className="flex space-x-4 mb-8">
                <div>
                    <label className="block text-lg font-semibold mb-2">Start Date:</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div>
                    <label className="block text-lg font-semibold mb-2">End Date:</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <button
                    className="self-end bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Filter
                </button>
            </div>

            {/* Attendance Report Table */}
            <table className="w-full text-left border border-gray-300 rounded-lg">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-4">Roll Number</th>
                        <th className="p-4">Name</th>
                        <th className="p-4">Present Days</th>
                        <th className="p-4">Absent Days</th>
                        <th className="p-4">Half Days</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.rollNumber} className="border-t">
                            <td className="p-4">{student.rollNumber}</td>
                            <td className="p-4">{student.name}</td>
                            <td className="p-4">{student.present}</td>
                            <td className="p-4">{student.absent}</td>
                            <td className="p-4">{student.halfDay}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceReport;
