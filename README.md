# ROUGH PLAN(┬┬﹏┬┬)

## 📖 Project Title:
Lab Progress Tracker + Secure Code Submission with Live Screen Monitoring

## 🎯 Project Objectives:
* Allow students to log in securely with USN + password.
* Provide a dashboard to view and attempt lab questions.
* Provide a secure online code editor with:
    * No copy-paste
    * Anti-tab-switch cheating detection
    * Automatic code testing and feedback.
* Screen sharing (via WebRTC) for teachers to monitor student's screens live.
* Teacher dashboard to view:
    * Student submissions.
    * Real-time cheating alerts.
    * Auto-generated Excel reports for review and feedback.

## ⚙️ System Architecture Overview:
| Layer    | Components                                        |
| -------- | ------------------------------------------------- |
| Frontend | React.js App (Student & Teacher interfaces)       |
| Backend  | Node.js + Express server                          |
| Database | MongoDB Atlas (for users, questions, submissions, cheat logs) |
| Real-Time Communication | WebRTC (screen share) + Socket.IO (cheating alerts) |
| Code Execution | Judge0 API or Local Code Execution Server (optional) |
| Excel Generation | exceljs Node library                           |
| Hosting  | Vercel (Frontend), Render (Backend), MongoDB Atlas (DB) |

## 🛠️ Detailed Module Breakdown:

### 4.1 Authentication System
| Feature            | Details                                          |
| ------------------ | ------------------------------------------------ |
| Signup/Login       | Students sign up and log in with USN and password. |
| Password Encryption | Use bcryptjs for hashing passwords.             |
| Sessions or JWT    | Manage login sessions with JWT tokens.             |

### 4.2 Student Dashboard
| Feature        | Details                                                      |
| -------------- | ------------------------------------------------------------ |
| View Labs      | Student sees available lab classes (Python Lab, OS Lab, etc). |
| View Questions | Student clicks on lab → sees list of assigned coding questions. |
| Start Coding   | Opens secure code editor environment.                       |

### 4.3 Secure Code Editor
| Feature            | Details                                                      |
| ------------------ | ------------------------------------------------------------ |
| Code Writing       | Monaco Editor integration.                                   |
| Paste Disabled     | Block copy-paste events (onPaste, onCopy, onCut).             |
| Tab Switch Detection | Capture onblur events → send cheating alert to server.       |
| Auto-Save          | Auto-save code progress every X seconds (optional flex 🔥).     |

### 4.4 WebRTC Screen Sharing
| Feature          | Details                                                |
| ---------------- | ------------------------------------------------------ |
| Start Screen Share | Student clicks "Start Sharing".                       |
| Stream to Teacher  | WebRTC + Socket.IO setup between student and teacher.   |
| Stop Screen Share  | Student or teacher can stop sharing anytime.           |

### 4.5 Code Submission and Test Cases
| Feature            | Details                                                      |
| ------------------ | ------------------------------------------------------------ |
| Code Run           | Code is sent to backend → Judge0 API (or custom runner).     |
| Test Cases         | Validate output against predefined test cases.               |
| Feedback           | Show test case results instantly to student.                 |
| Submission Notify  | Alert teacher on student’s successful code submission.        |

### 4.6 Teacher Dashboard
| Feature                  | Details                                                      |
| ------------------------ | ------------------------------------------------------------ |
| Live Screens             | View live streams of all active students.                    |
| Real-time Cheating Alerts | Get instant popups when student switches tabs or tries to cheat. |
| Review Submissions      | See student's submitted code and test case results.           |
| Give Feedback          | Provide written feedback per student.                         |

### 4.7 Excel Report Generator
| Feature              | Details                                                              |
| -------------------- | -------------------------------------------------------------------- |
| Auto-generate Excel  | After each lab session, backend creates an Excel file.                 |
| Data included        | USN, Lab Name, Question Attempted, Test Case Result, Cheating Detected?, Feedback. |
| Download Option      | Teacher can download Excel file for records.                           |

## 5. ⚡ Tech Stack Table:
| Part       | Technology             | Why                                            |
| ---------- | ---------------------- | ---------------------------------------------- |
| Frontend   | React.js + TailwindCSS | Fast UI dev, modern stack                     |
| Backend    | Node.js + Express.js    | Simple, efficient APIs                         |
| DB         | MongoDB Atlas          | Easy document storage                          |
| Real-Time  | Socket.IO              | Live cheating alerts                           |
| Code Runner| Judge0 API             | Safe remote code execution                     |
| Screen Share | WebRTC                 | Real-time screen streaming                     |
| Reporting  | exceljs                | Fast Excel creation                            |

## 6. 🛡️ Security Plan:
* Hash passwords before storing (bcrypt).
* Validate all user inputs to prevent attacks.
* Use JWTs for secure session management.
* Secure WebRTC streams with encryption.
* Limit screen sharing to authorized users only.

## 7. 📈 Project Timeline Plan (Simple Gantt Chart Style):
| Week | Tasks                                            |
| ---- | ------------------------------------------------ |
| 1    | Setup backend + database. Create basic login/signup. |
| 2    | Build student dashboard + fetch labs/questions.     |
| 3    | Integrate secure code editor + anti-cheating detection. |
| 4    | Setup WebRTC screen sharing + teacher dashboard.    |
| 5    | Connect code submission to Judge0 API + feedback system. |
| 6    | Setup real-time cheating alerts via Socket.IO.       |
| 7    | Create Excel report generator + polish UI/UX.        |
| 8    | Testing + Bug fixing + Final deployment.           |

## 8. 🌟 Optional Bonus Features (If You Want To Flex Harder):
| Feature            | Coolness                               |
| ------------------ | -------------------------------------- |
| Code Version Control | Like small Git commits for every save    |
| Leaderboard          | Top performers on dashboard (gamification 🎮) |
| Chat system          | Student ↔️ Teacher communication during lab |
| Dark Mode            | Always a vibe 🌑                         |
| Notification System  | Toast notifications for actions (submit, cheat, pass test cases) |

## 🚀 Final Deliverables:
| What                 | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| Project Report (PDF)   | Describe system architecture, screenshots, tech used.         |
| Working Demo Link      | Live Vercel/Render link of project.                          |
| GitHub Repository      | Public or private repo link with clean commits.              |
| PPT (optional)         | 8-10 slides to show project flow if teacher asks.           |

## 💥 Result?
✅ A working web platform.

✅ Real-time monitoring (screen share + cheat detection).

✅ Full code test case automation.

✅ Teacher dashboard + Excel report automation.

✅ PROFESSIONAL project submission for 4 credits.

## 🧠 Final Reality Check:
You’re basically building a lite version of HackerRank + Google Meet combined, and that’s freaking insane for a MINI PROJECT!

You’re gonna crush it 🔥 — trust me.
