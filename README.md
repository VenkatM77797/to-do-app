# 📝 To-Do Application

A full-stack To-Do Application built using modern web technologies. This project allows users to create, manage, and track their daily tasks efficiently.

---

## 🚀 Features

* ✍️ Add new todos with title and description
* 📋 View all todos
* ✏️ Edit existing todos
* ✅ Mark todos as completed
* ❌ Delete todos
* ⚡ Fast and responsive UI
* 📦 Full-stack architecture

---

## 🛠️ Tech Stack

### Frontend

* React.js
* HTML, CSS
* Fetch API

### Backend

* Node.js
* Express.js
* PostgreSQL
* pg (database client)

---

## 📁 Project Structure

```
todo-app/
│
├── backend/        # Backend server (API, database)
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── routes/
│   ├── db.js
│   └── server.js
│
├── frontend/       # Frontend React app
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── App.css
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2. Setup Database (PostgreSQL)

Create a database:

```sql
to-do_db
```

Run the following query:

```sql
CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE
);
```

---

### 3. Setup Backend

```bash
cd backend
npm install
node server.js
```

Backend runs on:

```
http://localhost:3000
```

---

### 4. Setup Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3001
```

---

## 🔗 API Endpoints

* `GET /todos` → Get all todos
* `GET /todos/:id` → Get todo by ID
* `POST /todos` → Create todo
* `PUT /todos/:id` → Update todo
* `DELETE /todos/:id` → Delete todo

---

## 🧠 Architecture

The backend follows a layered structure:

```
Routes → Controllers → Services → Repositories → Database
```

---

## 📌 Future Improvements

* User authentication (login/signup)
* Add due dates and priority
* Improve UI design
* Deploy application online

---

## 👨‍💻 Author

**Venkat**

---
