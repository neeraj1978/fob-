# fob-
# 🔗 Mini LinkedIn-like Community Platform

A full-stack mini social platform inspired by LinkedIn — designed for users to register, log in, create job-related posts, and view other users’ profiles and posts. This project was built as part of the Full Stack Internship challenge at **CIAAN Cyber Tech Pvt Ltd**.

---

## 🚀 Features

### 👤 User Authentication
- Register with name, email, password, and short bio
- Secure password hashing using bcrypt
- Login and receive JWT token
- Persist session via localStorage

### 📝 Public Post Feed
- Authenticated users can create text-only job posts
- View global feed with all posts
- Posts display author name and timestamp

### 📄 Profile Page
- View individual user profile and their posts
- Profile includes name, email, bio

---

## 🛠 Tech Stack

### 💻 Frontend
- React.js
- React Router DOM (v6)
- Bootstrap 5 (styling)
- Context API (for Auth)
- Axios (API calls)

### 🔙 Backend
- Node.js + Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- dotenv for environment management

---

## 🌐 Live Demo

**Frontend:** [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)  
**Backend:** [https://your-render-backend.onrender.com](https://your-render-backend.onrender.com)

> ⚠️ Note: You must replace the URLs above with your actual deployed frontend/backend links.

---

## 🧪 Demo Credentials

You can use the following credentials to test:


Or register a new user.

---

## 🧾 Setup Instructions

### 🔧 Backend (Node.js + MongoDB)

```bash
git clone https://github.com/your-username/linkedin-mini-backend.git
cd linkedin-mini-backend
npm install

# Create a .env file
touch .env
git clone https://github.com/your-username/linkedin-mini-frontend.git
cd linkedin-mini-frontend
npm install
npm start
