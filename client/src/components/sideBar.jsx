import { Link, useLocation } from 'react-router-dom';
import { FaUserCheck, FaClipboardList, FaUserPlus } from 'react-icons/fa'; 

const Sidebar = () => {
    const location = useLocation();

    return (
        <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4 fixed">
            <div className="text-2xl font-bold text-center mb-8">
                Attendance App
            </div>
            <nav className="flex-grow">
                <ul className="space-y-4">
                    <li className={location.pathname === '/' ? 'bg-gray-700 rounded-lg' : ''}>
                        <Link to="/" className="flex items-center p-3 hover:bg-gray-700 rounded-lg transition">
                            <FaUserCheck className="mr-3 text-xl" />
                            <span className="text-lg">Attendance Marking</span>
                        </Link>
                    </li>
                    <li className={location.pathname === '/report' ? 'bg-gray-700 rounded-lg' : ''}>
                        <Link to="/report" className="flex items-center p-3 hover:bg-gray-700 rounded-lg transition">
                            <FaClipboardList className="mr-3 text-xl" />
                            <span className="text-lg">Attendance Report</span>
                        </Link>
                    </li>
                    <li className={location.pathname === '/add-student' ? 'bg-gray-700 rounded-lg' : ''}>
                        <Link to="/addStudent" className="flex items-center p-3 hover:bg-gray-700 rounded-lg transition">
                            <FaUserPlus className="mr-3 text-xl" />
                            <span className="text-lg">Add Student</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
