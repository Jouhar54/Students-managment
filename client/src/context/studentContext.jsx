import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/attendance/attendance-report');
      setStudents(response.data);
    } catch (err) {
      setError('Error fetching students');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <StudentContext.Provider value={{ students, loading, error, fetchStudents }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => useContext(StudentContext);
