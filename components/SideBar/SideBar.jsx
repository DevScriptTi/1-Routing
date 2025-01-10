import Link from 'next/link';
import { FaUserCircle, FaTachometerAlt, FaCog, FaChartLine } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
            <div className="flex items-center justify-center mt-10">
                <FaUserCircle size={50} />
            </div>
            <div className="text-center mt-2">
                <h2 className="text-xl font-semibold">Profile Name</h2>
            </div>
            <nav className="mt-10">
                <ul>
                    <li className="flex items-center p-4 hover:bg-gray-700">
                        <FaTachometerAlt className="mr-3" />
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li className="flex items-center p-4 hover:bg-gray-700">
                        <FaCog className="mr-3" />
                        <Link href="/dashboard/settings">Settings</Link>
                    </li>
                    <li className="flex items-center p-4 hover:bg-gray-700">
                        <FaChartLine className="mr-3" />
                        <Link href="/dashboard/analytics">Analytics</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;