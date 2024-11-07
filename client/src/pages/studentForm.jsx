import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function StudentForm() {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const baseUrl = "http://localhost:3000/api/students";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/add-student`, { name, rollNumber });
      toast.success("Student added successfully!");
      setName('');
      setRollNumber('');
    } catch (error) {
      console.log(error);
      toast.error("Error adding student.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-center text-gray-800">Add New Student</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Roll Number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
      >
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;
