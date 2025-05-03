import React from 'react';

const Help = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-xl rounded-xl p-8">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">Need Help?</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Here are answers to some commonly asked questions. Still stuck? Contact our support team.
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">🔐 How do I reset my password?</h3>
          <p className="text-gray-700 ml-4">
            Go to the Login page, click on “Forgot Password” and follow the instructions sent to your email.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">📚 Where can I view submitted assignments?</h3>
          <p className="text-gray-700 ml-4">
            Head over to your Student Dashboard → "View Previous Scores" to see past assignments and performance.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">🌐 How do I change the language or theme?</h3>
          <p className="text-gray-700 ml-4">
            Navigate to the <strong>Settings</strong> page to change your preferred language and toggle dark mode.
          </p>
        </div>
      </div>

      <div className="mt-10 border-t pt-6">
        <h2 className="text-xl font-bold text-gray-800">📧 Contact Support</h2>
        <p className="text-gray-700 mt-2">
          If your issue isn't listed, reach out to us at <span className="text-blue-600 font-medium">support@labtracker.ai</span> and we'll get back to you within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default Help;
