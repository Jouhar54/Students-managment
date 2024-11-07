const express = require('express');
const app = express();
const cors = require('cors')
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')

const attendanceRoutes = require('./routes/attendanceRoutes');
const studentRoutes = require('./routes/studentRoutes');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

app.use(cors());

app.use(bodyParser.json());

app.use('/api/attendance', attendanceRoutes);
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 3000 ;

app.listen(PORT, ()=>console.log(`server running on ${PORT}`));
