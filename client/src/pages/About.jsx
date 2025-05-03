const About = () => {
    return (
      <div className="bg-gradient-to-br from-blue-100 to-white p-10 rounded-xl shadow-lg max-w-3xl mx-auto mt-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">About CRAssist</h1>
        <p className="text-lg text-gray-700 mb-6">
          CRAssist is an AI-powered class representative assistant designed to streamline classroom communication, task coordination, and student support.
          From managing feedback and assignments to sending announcements and collecting responses — all in one place.
        </p>
  
        <div className="text-left mt-8">
          <h2 className="text-xl font-semibold text-gray-800">Meet the Team</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Random 1 – Frontend & Integration Lead</li>
            <li>Random 2 – Backend Engineer</li>
            <li>Random 3 – AI Module Coordinator</li>
            <li>Random 4 – UX Designer</li>
          </ul>
        </div>
  
        <div className="mt-8 text-gray-600">
          <p><strong>Version:</strong> 1.2.0</p>
          <p><strong>Updated:</strong> April 2025</p>
        </div>
      </div>
    );
  };
  
  export default About;
  