# 💘 Tinder Clone Backend (Node.js) 
 
 A scalable backend for a Tinder-like application built using **Node.js, Express, and MongoDB**. 
 This project implements authentication, user profiles, swiping, matching logic, and a discover feed. 
 
 --- 
 
 ## 🚀 Features 
 
 ### 🔐 Authentication 
 
 * User Signup (hashed passwords using bcrypt) 
 * User Login (JWT-based authentication) 
 
 ### 👤 User Profile 
 
 * Get current user (`/me`) 
 * Update profile (bio, age, etc.) 
 
 ### 🔁 Swipe System 
 
 * Like / Dislike users 
 * Prevent self-swiping 
 * Store swipe history 
 
 ### ❤️ Match System 
 
 * Detect mutual likes 
 * Create matches 
 * Prevent duplicate matches using `$all` 
 
 ### 📡 Feed System 
 
 * Discover users you haven’t swiped yet 
 * Excludes: 
 
   * Yourself 
   * Already swiped users 
 
 ### 📋 Matches API 
 
 * Fetch all matches of a user 
 * Populate user data (without password) 
 
 --- 
 
 ## 🏗️ Project Structure 
 
 ``` 
 src/ 
  ├── models/ 
  │    ├── userModel.js 
  │    ├── swipeModel.js 
  │    └── matchModel.js 
  │ 
  ├── controllers/ 
  │    ├── authController.js 
  │    ├── swipeController.js 
  │    └── userController.js 
  │ 
  ├── services/ 
  │    ├── authService.js 
  │    ├── swipeService.js 
  │    └── userService.js 
  │ 
  ├── routes/ 
  │    ├── authRoutes.js 
  │    ├── swipeRoutes.js 
  │    └── userRoutes.js 
  │ 
  ├── middleware/ 
  │    └── authMiddleware.js 
  │ 
  └── app.js 
 ``` 
 
 --- 
 
 ## 🛠️ Tech Stack 
 
 * Node.js 
 * Express.js 
 * MongoDB (Mongoose) 
 * JWT (Authentication) 
 * bcrypt (Password hashing) 
 
 --- 
 
 ## ⚙️ Setup Instructions 
 
 ### 1. Clone the repository 
 
 ```bash 
 git clone https://github.com/requiremen/Tinder-backend-core.git 
 cd tinder-backend 
 ``` 
 
 ### 2. Install dependencies 
 
 ```bash 
 npm install 
 ``` 
 
 ### 3. Create `.env` file 
 
 ``` 
 JWT_SECRET=your_secret_key 
 MONGO_URI=your_mongodb_connection_string 
 ``` 
 
 ### 4. Run the server 
 
 ```bash 
 node app.js 
 ``` 
 
 Server will run on: 
 
 ``` 
 http://localhost:3000 
 ``` 
 
 --- 
 
 ## 📡 API Endpoints 
 
 ### 🔐 Auth 
 
 ``` 
 POST /api/auth/signup 
 POST /api/auth/login 
 ``` 
 
 ### 👤 User 
 
 ``` 
 GET    /me 
 PUT    /me 
 ``` 
 
 ### 🔁 Swipe 
 
 ``` 
 POST   /swipe 
 ``` 
 
 ### ❤️ Matches 
 
 ``` 
 GET    /matches 
 ``` 
 
 ### 📡 Feed 
 
 ``` 
 GET    /feed 
 ``` 
 
 --- 
 
 ## 🧠 Core Logic 
 
 ### Match Logic 
 
 A match is created when: 
 
 ``` 
 User A likes User B 
 AND 
 User B likes User A 
 ``` 
 
 ### Duplicate Match Prevention 
 
 ```js 
 users: { $all: [userA, userB] } 
 ``` 
 
 --- 
 
 ## 🔮 Future Improvements 
 
 * 💬 Real-time chat (Socket.io) 
 * 📍 Location-based matching 
 * 🎯 Filters (age, gender, preferences) 
 * 🔔 Notifications 
 * 📱 Frontend (React / React Native) 
 
 --- 
 
 ## 📌 Author 
 
 Built by **[Your Name]** 
 
 --- 
 
 ## ⭐ If you like this project 
 
 Give it a ⭐ on GitHub!
