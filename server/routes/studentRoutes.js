const express = require('express');
const router = express.Router();
const { getAllStudents, addStudent } = require('../controllers/studentController');

router.post('/add-student', addStudent);
router.get('/students', getAllStudents);

module.exports = router;