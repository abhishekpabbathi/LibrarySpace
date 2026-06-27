const express = require("express");
const db = require("../database/db");

const router = express.Router();

router.post("/", (req, res) => {
  const { issue_id } = req.body;

  if (!issue_id) {
    return res.status(400).json({
      message: "Book ID required"
    });
  }

  const issuedBook = db.prepare(`
    SELECT * FROM issued_books
    WHERE id = ?
  `).get(issue_id);

  if (!issuedBook) {
    return res.status(404).json({
      message: "Issued record not found"
    });
  }

  if (issuedBook.status === "returned") {
    return res.status(400).json({
      message: "Book already returned"
    });
  }

  const returnDate = new Date();

  db.prepare(`
    UPDATE issued_books
    SET status = 'returned'
    WHERE id = ?
  `).run(issue_id);

  db.prepare(`
    INSERT INTO returns (issue_id, return_date)
    VALUES (?, ?)
  `).run(
    issue_id,
    returnDate.toISOString()
  );

  db.prepare(`
    UPDATE books
    SET available = available + 1
    WHERE id = ?
  `).run(issuedBook.book_id);

  const dueDate = new Date(issuedBook.due_date);

  const diffTime = returnDate - dueDate;

  const lateDays = Math.ceil(
    diffTime / (1000 * 60 * 60 * 24)
  );

  if (lateDays > 0) {
    const fineAmount = lateDays * 10;

    db.prepare(`
      INSERT INTO fines
      (user_id, amount, status)
      VALUES (?, ?, ?)
    `).run(
      issuedBook.user_id,
      fineAmount,
      "pending"
    );
  }

  res.json({
    message: "Book returned successfully"
  });
});

module.exports = router;