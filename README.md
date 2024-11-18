# Task Manager App V3

## Overview
**Task Manager App V3** is a simple, full-stack task management application. It enables users to create, view, update, and delete tasks. The app is built with **React** for the front-end and **Node.js with Express** for the back-end. The tasks are stored in a JSON file on the server.

---

## Features
- **Front-end**:
  - Display a list of tasks.
  - Add new tasks.
  - Mark tasks as completed or incomplete.
  - Delete tasks.
  - Notifications for user actions using `react-toastify`.

- **Back-end**:
  - RESTful API to handle CRUD operations:
    - `GET /api/tasks`: Retrieve all tasks.
    - `POST /api/tasks`: Add a new task.
    - `PATCH /api/tasks/:id`: Update a task's status.
    - `DELETE /api/tasks/:id`: Remove a task.
  - File-based storage for tasks (`tasks.json`).
  - Middleware for CORS, JSON parsing, and logging in development mode (`morgan`).

---

## Installation and Setup

### Prerequisites
- **Node.js** (v16 or later)
- **npm** or **yarn**
- **React Developer Tools** (optional for debugging)

### Clone the Repository
```bash
git clone <repository-url>
cd task-manager-v3
```

### Server Setup
1. Navigate to the `server` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server:
   ```bash
   npm start
   ```
   The server will start on [http://localhost:5000](http://localhost:5000).

### Client Setup
1. Navigate to the `client` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   The app will be available on [http://localhost:3000](http://localhost:3000).

---

---

## Usage
1. Open the app in your browser.
2. Add tasks using the input field.
3. Toggle the completion status by clicking on a task.
4. Delete tasks using the delete button.
5. All changes are synced with the server in real-time.

---

## Technologies Used
- **Front-end**: React, react-toastify
- **Back-end**: Node.js, Express, nanoid
- **Utilities**: fs/promises, morgan, CORS

---

## API Endpoints
| Method | Endpoint            | Description                |
|--------|---------------------|----------------------------|
| GET    | `/api/tasks`        | Get all tasks             |
| POST   | `/api/tasks`        | Add a new task            |
| PATCH  | `/api/tasks/:id`    | Update task status        |
| DELETE | `/api/tasks/:id`    | Delete a task             |

---

## License
This project is licensed under the [MIT License](LICENSE).

--- 

Happy coding! 🎉
