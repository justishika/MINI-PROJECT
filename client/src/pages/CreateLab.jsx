import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CreateLab = () => {
  const navigate = useNavigate();
  const { labId } = useParams();
  const [labName, setLabName] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([]);
  const [testConfig, setTestConfig] = useState({
    timeLimit: 60, // Default time limit in minutes
    difficulty: "Medium",
    scheduledDate: "",
  });
  const [questionType, setQuestionType] = useState("MCQ");

  useEffect(() => {
    if (labId) {
      axios
        .get(`/api/labs/${labId}`)
        .then((response) => {
          const { labName, description, questions, testConfig } = response.data;
          setLabName(labName);
          setDescription(description);
          setQuestions(questions);
          setTestConfig(testConfig);
        })
        .catch((error) => {
          console.error("Error fetching lab:", error);
        });
    }
  }, [labId]);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionText: "",
        options: ["", "", "", ""],
        questionType: "MCQ", // Default question type
      },
    ]);
  };

  const handleSaveLab = () => {
    const labData = {
      labName,
      description,
      questions,
      testConfig,
    };

    if (labId) {
      axios
        .put(`/api/labs/${labId}`, labData)
        .then(() => {
          navigate("/home");
        })
        .catch((error) => {
          console.error("Error updating lab:", error);
        });
    } else {
      axios
        .post("/api/labs", labData)
        .then(() => {
          navigate("/home");
        })
        .catch((error) => {
          console.error("Error creating lab:", error);
        });
    }
  };

  // Timer format to display hours, minutes, seconds
  const formatTime = (timeInMinutes) => {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;
    const seconds = 0; // Static seconds as we're using time in minutes
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-lg flex items-center space-x-6 border border-blue-200">
          <h1 className="text-2xl font-bold text-blue-900">
            {labId ? "Edit Lab" : "Create New Session"}
          </h1>
        </div>

        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-blue-200">
          <label>Lab Name:</label>
          <input
            type="text"
            value={labName}
            onChange={(e) => setLabName(e.target.value)}
            placeholder="Enter Lab Name"
            className="w-full p-2 border border-blue-300 rounded-lg"
          />
        </div>

        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-blue-200">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Lab Description"
            className="w-full p-2 border border-blue-300 rounded-lg"
          />
        </div>

        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-900">Set Questions</h2>
          {questions.map((question, index) => (
            <div key={index} className="space-y-4">
              <div>
                <label>Question Type:</label>
                <select
                  value={question.questionType}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index].questionType = e.target.value;
                    setQuestions(newQuestions);
                  }}
                  className="w-full p-2 border border-blue-300 rounded-lg"
                >
                  <option value="MCQ">MCQ</option>
                  <option value="Coding">Coding</option>
                  <option value="QnA">Question & Answer</option>
                </select>
              </div>

              <div>
                <label>Question:</label>
                <input
                  type="text"
                  value={question.questionText}
                  onChange={(e) => {
                    const newQuestions = [...questions];
                    newQuestions[index].questionText = e.target.value;
                    setQuestions(newQuestions);
                  }}
                  className="w-full p-2 border border-blue-300 rounded-lg"
                />
              </div>

              {question.questionType === "MCQ" && (
                <div>
                  <label>Options:</label>
                  {question.options.map((option, i) => (
                    <input
                      key={i}
                      type="text"
                      value={option}
                      onChange={(e) => {
                        const newQuestions = [...questions];
                        newQuestions[index].options[i] = e.target.value;
                        setQuestions(newQuestions);
                      }}
                      className="w-full p-2 border border-blue-300 rounded-lg mb-2"
                      placeholder={`Option ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            onClick={handleAddQuestion}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
          >
            Add Question
          </button>
        </div>

        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-900">Test Configuration</h2>
          <div>
            <label>Time Limit (minutes):</label>
            <input
              type="number"
              value={testConfig.timeLimit}
              onChange={(e) => setTestConfig({ ...testConfig, timeLimit: e.target.value })}
              className="w-full p-2 border border-blue-300 rounded-lg"
            />
          </div>

          <div>
            <label>Difficulty Level:</label>
            <select
              value={testConfig.difficulty}
              onChange={(e) => setTestConfig({ ...testConfig, difficulty: e.target.value })}
              className="w-full p-2 border border-blue-300 rounded-lg"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div>
            <label>Scheduled Date:</label>
            <input
              type="date"
              value={testConfig.scheduledDate}
              onChange={(e) => setTestConfig({ ...testConfig, scheduledDate: e.target.value })}
              className="w-full p-2 border border-blue-300 rounded-lg"
            />
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-900">Timer</h3>
          <p>Timer: {formatTime(testConfig.timeLimit)}</p>
        </div>

        <button
          onClick={handleSaveLab}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium shadow hover:scale-105 transition-transform mt-4"
        >
          {labId ? "Save Changes" : "Save Lab Session"}
        </button>
      </div>
    </div>
  );
};

export default CreateLab;
