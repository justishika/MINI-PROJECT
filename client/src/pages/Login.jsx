import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

toast.success("Login Successful!");
toast.error("Invalid credentials!");

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Mock authentication (Replace with backend API when ready)
    if (email === "student@gmail.com" && password === "student123") {  // Change 'username' to 'email'
      setIsLoggedIn(true);
      navigate("/student-dashboard"); // Redirect to student dashboard
    } else if (email === "teacher@gmail.com" && password === "teacher123") {  // Change 'username' to 'email'
      setIsLoggedIn(true);
      navigate("/teacher-dashboard"); // Redirect to teacher dashboard
    } else {
      alert("Invalid credentials");
    }
  };
  


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-200 to-indigo-200">
      <div className="bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/40">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Login to Lab Tracker</h2>
        <p className="text-center text-gray-600 mb-6">Enter your credentials to continue</p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <div className="text-right text-sm">
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
