import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

const Settings = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const [profile, setProfile] = useState({
    name: 'Studentr',
    email: 'student.com',
    language: 'English',
    darkMode: false,
    profilePic: 'https://i.pravatar.cc/150?img=3',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile({
      ...profile,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Settings saved successfully!');
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleDisableAccount = () => {
    const confirmDisable = window.confirm('Are you sure you want to disable your account?');
    if (confirmDisable) {
      alert('Account disabled.');
    }
  };

  const handleLogout = () => {
    // Clear session storage or local storage (if used)
    sessionStorage.clear();  // Or localStorage.clear() if using localStorage
    alert('You have been logged out!');
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <div className="flex items-center space-x-4 mb-6">
        <img
          src={profile.profilePic}
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <label className="block text-gray-600">Change Profile Picture (URL)</label>
          <input
            type="text"
            name="profilePic"
            value={profile.profilePic}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg mt-1"
            disabled={!isEditing}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full px-4 py-2 border rounded-lg ${
              isEditing ? 'border-blue-400' : 'border-gray-300 bg-gray-100'
            }`}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!isEditing}
            className={`w-full px-4 py-2 border rounded-lg ${
              isEditing ? 'border-blue-400' : 'border-gray-300 bg-gray-100'
            }`}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Language</label>
          <select
            name="language"
            value={profile.language}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-4 py-2 border rounded-lg bg-white"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Kannada</option>
            <option>Marathi</option>
            <option>Tamil</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">Dark Mode</label>
          <input
            type="checkbox"
            name="darkMode"
            checked={profile.darkMode}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-5 h-5"
          />
        </div>

        <div className="pt-4 space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Edit Settings
            </button>
          )}
        </div>

        <hr className="my-6" />

        <button
          onClick={handleDisableAccount}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Disable Account
        </button>

        {/* Logout Button */}
        <div className="mt-4">
          <button
            onClick={handleLogout}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
