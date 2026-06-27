# LibrarySpace 📚

LibrarySpace is a full-stack digital library management system built using React.js, Node.js, Express.js, and SQLite.  
The platform helps libraries manage books, issue/return workflows, borrowing history, user management, and fine tracking through a centralized digital system.

---

# 🚀 Features

- User Authentication & Authorization
- Role-Based Access Control (Student, Librarian, Admin)
- Book Catalog Management
- Search Books by Title, Author, Category
- Book Issue & Return System
- Borrowing History Tracking
- Fine Calculation for Late Returns
- Real-Time Availability Status
- Responsive Dashboard UI
- REST API Integration
- Frontend & Backend Validation

---

# 🛠️ Tech Stack

## Frontend
- React.js
- HTML5
- CSS3
- JavaScript (ES6)

## Backend
- Node.js
- Express.js

## Database
- SQLite

## Tools
- Git
- GitHub
- Postman

---

# 📂 Project Structure

```bash
client/     → Frontend React Application
server/     → Backend Express API
docs/       → Documentation & Screenshots
```

---

# 👥 User Roles

## Student
- Register/Login
- Search Books
- Borrow Books
- Return Books
- View Borrow History
- Check Fines

## Librarian
- Add/Edit/Delete Books
- Issue & Return Management
- Track Borrow Records

## Admin
- Manage Users
- Manage System Records
- Monitor Reports

---

# 🔗 API Endpoints

## Authentication
- POST /api/auth/register
- POST /api/auth/login

## Books
- GET /api/books
- POST /api/books
- PUT /api/books/:id
- DELETE /api/books/:id

## Issue & Return
- POST /api/issue
- POST /api/return

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/LibrarySpace.git
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# Backend Setup

```bash
cd server
npm install
npm run dev
```

---

# Database Setup

SQLite database file:

```bash
server/src/database/libraryspace.db
```

---

# 🌐 Environment Variables

Create `.env` file inside `server/`

```env
PORT=5000
JWT_SECRET=your_secret_key
```

---

# 📸 Screenshots

Add project screenshots inside:

```bash
docs/Screenshots/
```

---

# ✅ Validation Rules

- All inputs validated on frontend & backend
- Students cannot exceed borrowing limit
- Returned books update availability automatically
- SQLite acts as single source of truth

---

# 📦 Deployment

Frontend: Vercel / Netlify  
Backend: Render / Railway

---

# 👨‍💻 Author

Abhishek Pabbathi

GitHub: https://github.com/abhishekpabbathi

LinkedIn: https://linkedin.com/in/abhishekpabbathi