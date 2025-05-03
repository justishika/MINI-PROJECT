import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles


// Pages and components
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Layout from "./components/Layout";
import CodeEditor from "./pages/CodeEditor";
import Settings from "./pages/Settings";
import CreateLab from "./pages/CreateLab";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/"
            element={<Layout><Login setIsLoggedIn={setIsLoggedIn} /></Layout>}
          />
          <Route
            path="/home"
            element={<Layout><Home /></Layout>}
          />
          <Route
            path="/about"
            element={<Layout><About /></Layout>}
          />
          <Route
            path="/help"
            element={<Layout><Help /></Layout>}
          />
          <Route
            path="/settings"
            element={<Layout><Settings /></Layout>}
          />
          <Route
            path="/student-dashboard"
            element={
              isLoggedIn ? <Layout><StudentDashboard /></Layout> : <Login setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            path="/teacher-dashboard"
            element={
              isLoggedIn ? <Layout><TeacherDashboard /></Layout> : <Login setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            path="/code-editor/:labId"
            element={
              isLoggedIn ? <Layout><CodeEditor /></Layout> : <Login setIsLoggedIn={setIsLoggedIn} />
            }
          />
           <Route
    path="/create-lab"
    element={
      isLoggedIn ? <Layout><CreateLab /></Layout> : <Login setIsLoggedIn={setIsLoggedIn} />
    }
  />

        </Routes>

        

        {/* Toast container to show success/error messages */}
        <ToastContainer position="top-center" />
      </>
    </Router>
  );
};

export default App;
