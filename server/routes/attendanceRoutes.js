const express = require('express');
const router = express.Router();
const { getAttendanceReport, markAttendance } = require('../controllers/attendanceController');

router.post('/mark-attendance', markAttendance);
router.get('/attendance-report', getAttendanceReport);

module.exports = router;