const Student = require('../models/Student');

// Add a new student
const addStudent = async (req, res) => {
  try {
    const { name, rollNumber } = req.body;

    const existingStudent = await Student.findOne({ rollNumber });
    if (existingStudent) {
      return res.status(400).json({ message: 'Roll number already exists' });
    }

    const student = new Student({ name, rollNumber });
    await student.save();

    res.status(201).json({ message: 'Student added successfully', student });
  } catch (error) {
    res.status(500).json({ message: 'Error adding student', error });
  }
};

// Get list of all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error });
  }
};

module.exports = {getAllStudents, addStudent}