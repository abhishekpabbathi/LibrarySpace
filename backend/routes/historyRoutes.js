const express = require("express")
const db = require("../database/db")

const router = express.Router()

router.get("/:userId", (req,res) => {
  const {userId} = req.params

  const history = db.prepare(`
    SELECT 
      issued_books.id,
      books.title,
      books.author,
      issued_books.issue_date,
      issued_books.due_date,
      issued_books.status
    FROM issued_books
    JOIN books ON issued_books.book_id = books.id
    WHERE issued_books.user_id = ?
    ORDER BY issued_books.id DESC
  `).all(userId)

  res.json(history)
})

module.exports = router
