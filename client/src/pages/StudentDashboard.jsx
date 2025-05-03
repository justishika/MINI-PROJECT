import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const studentProfile = {
    name: 'Student',
    usn: '1BI21CS001',
    email: 'student@example.com',
    profilePicture: 'https://i.pravatar.cc/150?img=3',
  };

  const mockLabs = [
    {
      _id: '1',
      name: 'Lab 1: Introduction to HTML',
      description: 'Learn the basics of HTML, tags, and structure.',
    },
    {
      _id: '2',
      name: 'Lab 2: CSS Styling',
      description: 'Apply CSS styles to enhance the look of your web pages.',
    },
    {
      _id: '3',
      name: 'Lab 3: JavaScript Basics',
      description: 'Understand the basics of JavaScript and scripting.',
    },
  ];

  const [labs, setLabs] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLabs(mockLabs);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-6 space-y-10">
      {/* Profile Card */}
      <div className="bg-white/60 backdrop-blur-lg shadow-xl rounded-2xl p-6 flex items-center space-x-6 border border-blue-200">
        <img
          src={studentProfile.profilePicture}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
        />
        <div>
          <h2 className="text-2xl font-bold text-blue-900">{studentProfile.name}</h2>
          <p className="text-gray-700">USN: {studentProfile.usn}</p>
          <p className="text-gray-700">Email: {studentProfile.email}</p>
        </div>
        <div className="ml-auto">
          <Link
            to="/previous-scores"
            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:scale-105 transition-transform duration-300"
          >
            View Previous Scores
          </Link>
        </div>
      </div>

      {/* Lab Assignments */}
      <div className="bg-white/60 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Available Lab Assignments</h2>
        {labs.length > 0 ? (
          <ul className="space-y-6">
            {labs.map((lab) => (
              <li key={lab._id} className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow border border-blue-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800">{lab.name}</h3>
                    <p className="text-gray-600">{lab.description}</p>
                  </div>
                  <Link
                    to={`/code-editor/${lab._id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow"
                  >
                    Start Coding
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-blue-800 text-lg">Loading labs...</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
