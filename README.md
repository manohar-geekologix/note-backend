# Todo App Backend (Node.js + Express + MongoDB)

This is the backend API for the Todo Note-Taking Application. It provides RESTful APIs to create, read, update, and delete notes.

## Features
- CRUD operations for notes
- MongoDB database connection (via Mongoose)
- Validation for note data
- CORS enabled for frontend communication
- Express.js for API handling

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv (for environment variables)
- cors (to allow frontend requests)

## Installation & Setup

### 1 Clone the Repository
```sh
git clone https://github.com/yourusername/todo-backend.git
cd todo-backend

npm install

Create a .env file in the root directory and add:
PORT=5000
MONGO_URI=***

npm start
