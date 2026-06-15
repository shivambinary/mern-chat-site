# Real-Time MERN Chat Application

A full-stack real-time chat application built using the MERN stack. The platform supports secure user authentication, one-to-one messaging, and group conversations with real-time communication powered by Socket.IO.

The project focuses on authentication, scalable backend architecture, and real-time event handling.

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Persistent User Sessions

### Real-Time Messaging

* One-to-One Conversations
* Group Chats
* Instant Message Delivery
* Real-Time Updates using Socket.IO

### Group Management

* Create Groups
* Join Groups
* Group Messaging
* Member Synchronization

### User Experience

* Responsive Interface
* Real-Time Chat Updates
* Secure Session Handling

---

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Socket.IO

---

## Project Structure

### Client

```text
client/
├── src/
├── public/
├── package.json
└── vite.config.js
```

### Server

```text
server/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── app.js
│
├── server.js
├── package.json
└── package-lock.json
```

---

## Architecture

### Frontend Flow

```text
Components
    ↓
API Calls
    ↓
Backend Routes
    ↓
Database
```

### Backend Flow

```text
Route
    ↓
Controller
    ↓
Model
    ↓
MongoDB
```

The backend follows a modular architecture with separation of concerns between routes, controllers, models, and utility functions.

---

## Authentication Flow

```text
User Login
    ↓
Credentials Verification
    ↓
JWT Token Generated
    ↓
Token Sent To Client
    ↓
Protected Route Access
```

---

## Real-Time Messaging Flow

```text
User Sends Message
    ↓
Socket.IO Event
    ↓
Server Receives Event
    ↓
Message Stored In MongoDB
    ↓
Broadcast To Receiver(s)
    ↓
UI Updates Instantly
```

---

## Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

Create a `.env` file inside the client directory.

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Backend Dependencies

```bash
cd server
npm install
```

### Install Frontend Dependencies

```bash
cd ../client
npm install
```

### Start Backend

```bash
cd ../server
npm run dev
```

### Start Frontend

```bash
cd ../client
npm run dev
```

---

## Learning Outcomes

This project demonstrates practical experience with:

* MERN Stack Development
* JWT Authentication
* Socket.IO
* REST APIs
* MongoDB Data Modeling
* Real-Time Communication
* Group Chat Systems
* Full-Stack Application Development

---

## Future Improvements

* Message Read Receipts
* Typing Indicators
* Online/Offline Presence
* Media Sharing
* Push Notifications
* Voice and Video Calling

---


Built as a learning project focused on real-time communication, authentication systems, scalable backend development, and full-stack application architecture.
