const Database = require("better-sqlite3");
const path = require("path");

const dbPath = path.join(__dirname, "library.db");

const db = new Database(dbPath);

console.log("Connected to SQLite database");

module.exports = db;