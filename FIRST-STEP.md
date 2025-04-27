First Rule of Survival in Mini-Project Time Crunch = DON'T PANIC.

(You don't need the final thing yet, you just need to show movement 😎.)

Our goal = Show working authentication + dashboard skeleton in 3 days.

🥇 **FIRST STEP YOU MUST START WITH:**

✅ Set up your backend (Node.js + Express) and frontend (React.js) with basic login/signup working.

(If you can show login, and a blank dashboard page after login = Profs will be happy.)

This is your Day 1 and 2 Target 🥵.

🎯 **Step-by-Step Roadmap for next 3 days:**

**DAY 1: (Today)**

1.  Initialize Backend

    ```bash
    mkdir server
    cd server
    npm init -y
    npm install express mongoose cors dotenv bcryptjs jsonwebtoken
    npm install nodemon
    ```

    Create `server.js`:

    ```javascript
    import express from 'express';
    import cors from 'cors';
    import mongoose from 'mongoose';
    import dotenv from 'dotenv';

    dotenv.config();

    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get('/', (req, res) => {
      res.send('Server is running...');
    });

    mongoose.connect(process.env.MONGO_URI)
      .then(() => console.log('DB Connected!'))
      .catch(err => console.log(err));

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
    ```

    ✅ Now your backend is alive!

2.  Initialize Frontend

    ```bash
    npx create-react-app client
    cd client
    npm install axios react-router-dom
    ```

    Start frontend:

    ```bash
    npm start
    ```

    ✅ Now your frontend is alive!

**DAY 2: (Tomorrow)**

1.  Create User Schema in Backend (`models/User.js`):

    ```javascript
    import mongoose from 'mongoose';

    const userSchema = new mongoose.Schema({
      usn: { type: String, required: true, unique: true },
      password: { type: String, required: true }
    });

    export default mongoose.model('User', userSchema);
    ```

2.  Create Auth APIs (`routes/authRoutes.js`):

    * `POST /signup` → create user.
    * `POST /login` → check user, return token.

    ✅ Now you have user accounts!

3.  Create Frontend Login/Signup Pages:

    * Two React pages (`Login.jsx`, `Signup.jsx`).
    * Form to collect USN and password.
    * On submit → send request to backend using Axios.

    ✅ Now you have frontend + backend connected!

**DAY 3: (Demo Day)**

1.  After login → redirect to "Dashboard Page".

    (Dashboard can be just a white page saying "Welcome, <user>".)

2.  Show Prof basic flow:

    * Signup with USN/password ✅
    * Login ✅
    * Dashboard screen ✅

    ✅✅✅

    BRO YOU'VE SHOWN 40% of a real app.

    Teachers will think you're cooking serious stuff 🔥.

📢 **VERY IMPORTANT:**

You can literally say to them:

“Sir/Madam, we have finished setting up full authentication with React and Node, integrated with MongoDB, and now we are moving towards code editor and live screen share features.”

Boom 💣 = they will be impressed!

🛠️ **Tools you must have ready:**

* Postman (for testing backend APIs)
* MongoDB Atlas account (Free cloud DB — super easy)
* VSCode (Editor)
* GitHub (push your repo daily)

🧠 **Key Tip for 3-Day Survival:**

"Ship something small but fully working. Don't overthink."

Login + Dashboard > Fake everything else for now. We'll build real parts after.

🚀 **BRO FINAL SPRINT:**

Wanna be even FASTER?

I can give you ready-made sample code for:

* Signup API
* Login API
* React Login Form

Just say "SEND SAMPLE BRO" and I'll DM it right here so you copy-paste and keep moving FAST 💨.

BRO TRUST ME — we can totally impress them by showing little but professional-looking work. You’re doing amazing. Let’s smash this!! 🔥
