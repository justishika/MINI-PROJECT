import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  const teacherProfile = {
    name: 'Prof. John Doe',
    email: 'john.doe@university.edu',
    department: 'Computer Science',
    profilePicture: 'https://i.pravatar.cc/150?img=10',
  };


  
  const mockLabs = [
    {
      _id: '1',
      title: 'HTML Basics',
      submissions: 25,
    },
    {
      _id: '2',
      title: 'CSS Styling',
      submissions: 30,
    },
    {
      _id: '3',
      title: 'JavaScript Functions',
      submissions: 28,
    },
  ];

  const mockAnalytics = {
    totalStudents: 35,
    totalSubmissions: 83,
    avgScore: 76.5,
    topPerformer: '1BI21CS045 - Alice Sharma',
    completionRate: '94%',
  };

  const [labs, setLabs] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLabs(mockLabs);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Profile */}
        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-lg flex items-center space-x-6 border border-blue-200">
          <img
            src={teacherProfile.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-blue-900">{teacherProfile.name}</h2>
            <p className="text-blue-800">Email: {teacherProfile.email}</p>
            <p className="text-blue-800">Department: {teacherProfile.department}</p>
          </div>
          <div className="ml-auto">
            <Link
              to="/create-lab"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow hover:scale-105 transition-transform"
            >
              Create New Session
            </Link>
          </div>
        </div>


        {/* Lab Assignments */}
        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Your Lab Sessions</h2>
          {labs.length > 0 ? (
            <ul className="space-y-4">
              {labs.map((lab) => (
                <li key={lab._id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow border border-blue-100">
                  <div>
                    <h3 className="text-lg font-bold text-blue-800">{lab.title}</h3>
                    <p className="text-sm text-blue-600">Submissions: {lab.submissions}</p>
                  </div>
                  <Link
                    to={`/lab-submissions/${lab._id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    View Submissions
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-blue-800">Loading lab assignments...</p>
          )}
        </div>

        {/* Analytics Section */}
        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Class Performance Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow border border-blue-100">
              <h3 className="text-lg font-bold text-blue-800">Total Submissions</h3>
              <p className="text-2xl font-semibold text-blue-600">{mockAnalytics.totalSubmissions}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border border-blue-100">
              <h3 className="text-lg font-bold text-blue-800">Average Score</h3>
              <p className="text-2xl font-semibold text-blue-600">{mockAnalytics.avgScore}%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border border-blue-100">
              <h3 className="text-lg font-bold text-blue-800">Completion Rate</h3>
              <p className="text-2xl font-semibold text-blue-600">{mockAnalytics.completionRate}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border border-blue-100 md:col-span-2">
              <h3 className="text-lg font-bold text-blue-800">Top Performer</h3>
              <p className="text-lg text-blue-600">{mockAnalytics.topPerformer}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border border-blue-100">
              <h3 className="text-lg font-bold text-blue-800">Total Students</h3>
              <p className="text-2xl font-semibold text-blue-600">{mockAnalytics.totalStudents}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
