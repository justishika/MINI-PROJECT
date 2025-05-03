import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LabSubmissions = () => {
  const { labId } = useParams();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Call the backend to get submissions for this lab
    setTimeout(() => {
      setSubmissions([
        {
          studentName: "Alice Sharma",
          code: "// JavaScript code by Alice",
          timeSubmitted: "2025-04-25 10:00",
        },
        {
          studentName: "Bob Kumar",
          code: "// JavaScript code by Bob",
          timeSubmitted: "2025-04-25 10:15",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, [labId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold text-blue-900">Lab Submissions for Lab {labId}</h1>

        {loading ? (
          <p className="text-blue-800">Loading submissions...</p>
        ) : (
          <ul>
            {submissions.map((submission, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow mb-4 border border-blue-100">
                <h3 className="font-semibold text-blue-800">{submission.studentName}</h3>
                <pre className="bg-gray-100 p-4 rounded-lg my-2">{submission.code}</pre>
                <p className="text-sm text-blue-600">Submitted at: {submission.timeSubmitted}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-2">
                  Review Submission
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LabSubmissions;
