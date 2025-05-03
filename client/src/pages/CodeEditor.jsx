import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const { labId } = useParams();
  const [code, setCode] = useState("// Start typing your code here...");
  const [language, setLanguage] = useState("javascript");

  const handleRunCode = () => {
    console.log("Lab:", labId);
    console.log("Language:", language);
    console.log("Code:", code);
    alert("Code submitted (not actually running yet)");
  };

  const handleCopyPaste = () => {
    alert("⚠️ Copy/Paste detected! This action is being monitored.");
  };

  // 🚨 Detect tab switching
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        alert("⚠️ Tab switched! Your activity is being monitored.");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-8">
      <div className="max-w-6xl mx-auto bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl border border-blue-200 p-8 space-y-6">
        <h1 className="text-3xl font-bold text-blue-900">Lab {labId}: Code Editor</h1>

        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-blue-800">Question:</h2>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-4 py-1 rounded border border-blue-300 text-blue-900"
          >
            <option value="python">Python</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>

        <div className="bg-white/70 p-4 rounded shadow text-blue-800">
          Write a function to check if a number is prime.
        </div>

        <Editor
          height="400px"
          language={language}
          value={code}
          theme="vs-dark"
          onChange={(value) => setCode(value)}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
          }}
          onMount={(editor) => {
            editor.onDidPaste(handleCopyPaste);
          }}
        />

        <div className="flex justify-end">
          <button
            onClick={handleRunCode}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow hover:scale-105 transition-transform"
          >
            Submit Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
