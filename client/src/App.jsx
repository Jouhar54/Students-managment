import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import StudentForm from './pages/studentForm';
import AttendanceMarking from './pages/AttendanceMark';
import AttendanceReport from './pages/AttendanceReport';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AttendanceMarking />} />
          <Route path="/report" element={<AttendanceReport />} />
          <Route path="/addStudent" element={<StudentForm />} />
        </Routes>
      </Layout>
      <Toaster/>
    </Router>
  );
}

export default App;
