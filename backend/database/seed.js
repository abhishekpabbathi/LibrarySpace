const db = require("./db");

db.prepare(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT NOT NULL
)
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  available INTEGER NOT NULL
)
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS issued_books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  book_id INTEGER,
  issue_date TEXT,
  due_date TEXT,
  status TEXT
)
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS returns (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  issue_id INTEGER,
  return_date TEXT
)
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS fines (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  amount INTEGER,
  status TEXT
)
`).run();

console.log("All tables created successfully");

const insertUser = db.prepare(`
INSERT INTO users (name, email, password, role)
VALUES (?, ?, ?, ?)
`);

insertUser.run(
  "Admin User",
  "admin@gmail.com",
  "admin123",
  "admin"
);

insertUser.run(
  "Librarian User",
  "librarian@gmail.com",
  "librarian123",
  "librarian"
);

insertUser.run(
  "Student User",
  "student@gmail.com",
  "student123",
  "student"
);

const insertBook = db.prepare(`
INSERT INTO books (title, author, category, quantity, available)
VALUES (?, ?, ?, ?, ?)
`);

insertBook.run(
  "Atomic Habits",
  "James Clear",
  "Self Help",
  10,
  10
);

insertBook.run(
  "Clean Code",
  "Robert Martin",
  "Programming",
  5,
  5
);

insertBook.run(
  "The Alchemist",
  "Paulo Coelho",
  "Fiction",
  7,
  7
);

console.log("Sample data inserted");