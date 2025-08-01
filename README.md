# 💘 devTinder — Fullstack Developer Matchmaking Platform

Welcome to **devTinder**, a fullstack MERN-based platform built to connect developers around the world. Think of it like Tinder, but for tech talent — create profiles, send connection requests, and network with like-minded coders.

> 🔗 **Live App**: [https://dev-tinder-fullstack.vercel.app](https://dev-tinder-fullstack.vercel.app)  
> 🖥️ **Backend API**: [https://dev-tinder-fullstack-1.onrender.com](https://dev-tinder-fullstack-1.onrender.com)

---

## 📦 Repositories

- 🧠 Frontend: [DevTinder-Frontend](https://github.com/sai-kola/DevTinder-Frontend)
- 🛠️ Backend: [DevTinder-Backend](https://github.com/sai-kola/DevTinder-Backend)

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js (with Vite)
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **API Handling**: Axios

### Backend
- **Framework**: Node.js + Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT with HttpOnly Secure Cookies
- **Security**: bcrypt, dotenv, CORS
- **Deployment**: Render

---

## 🚀 Live Deployment

| Component   | URL                                                                 |
|-------------|----------------------------------------------------------------------|
| Frontend    | [https://dev-tinder-fullstack.vercel.app](https://dev-tinder-fullstack.vercel.app) |
| Backend API | [https://dev-tinder-fullstack-1.onrender.com](https://dev-tinder-fullstack-1.onrender.com) |

---

## 🔧 Setup Instructions

### 🔹 Frontend Setup

```bash
git clone https://github.com/sai-kola/DevTinder-Frontend.git
cd DevTinder-Frontend
npm install
npm run dev

### 🔹 Backend Setup
git clone https://github.com/sai-kola/DevTinder-Backend.git
cd DevTinder-Backend
npm install

### 🔹 Create .env at root
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/devTinder
JWT_SECRET=your_jwt_secret
PORT=3000

📌 Core Features
👤 User & Auth
✅ Signup/Login/Logout with JWT

✅ Password encryption with bcrypt

✅ Secure cookies with SameSite=None & Secure flags

✅ Auth-protected routes

🧑‍💻 Developer Profiles
📝 Create, edit, and update personal and professional details

👀 View profiles of other devs

🖼️ Upload avatars

🔗 Connections
🤝 Send and accept connection requests

❌ Ignore unwanted requests

🔄 Review incoming requests

✅ View mutual connections

🔍 Feed & Matching
🧠 Smart feed that excludes:

Yourself

Existing connections

Ignored profiles

Pending requests

⚙️ Pagination support for smoother feed

📡 API Routes Overview
✅ Authentication
Method	Endpoint	Description
POST	/signup	Create new user
POST	/login	Login user and set cookie
POST	/logout	Clear cookie

👥 User & Profile
Method	Endpoint	Description
GET	/profile/view	Get user profile
PATCH	/profile/edit	Update profile
GET	/user/feed	View suggested developers

🔗 Connections
Method	Endpoint	Description
POST	/request/send/:status/:toUserId	Send request (Interested/Ignored)
POST	/request/review/:status/:requestId	Accept/Reject connection
GET	/user/requests/received	View pending requests
GET	/user/connections	View accepted connections

🤝 Contribution
Have an idea or improvement?

Fork the repo

Make your changes

Submit a PR

Let’s build devTinder together! ❤️
