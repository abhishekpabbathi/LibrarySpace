const express = require("express")

const db = require("../database/db")

const router = express.Router()

router.post("/", (req,res) => {

  const {userId,bookId} = req.body

  if(!bookId){
    return res.status(400).json({
      message:"Book ID required"
    })
  }

  const user = db
    .prepare("SELECT * FROM users WHERE id=?")
    .get(userId)

  if(!user){
    return res.status(400).json({
      message:"User not found"
    })
  }

  const book = db
    .prepare("SELECT * FROM books WHERE id=?")
    .get(bookId)

  if(!book){
    return res.status(400).json({
      message:"Book not found"
    })
  }

  if(book.available <= 0){
    return res.status(400).json({
      message:"Book not available"
    })
  }

  const activeBooks = db
    .prepare(`
      SELECT * FROM issued_books
      WHERE user_id=? AND status='issued'
    `)
    .all(userId)

  if(activeBooks.length >= 3){
    return res.status(400).json({
      message:"Borrow limit reached"
    })
  }

  const issueDate = new Date()

  const dueDate = new Date()

  dueDate.setDate(issueDate.getDate() + 7)

  db.prepare(`
    INSERT INTO issued_books(
      user_id,
      book_id,
      issue_date,
      due_date,
      status
    )
    VALUES(?,?,?,?,?)
  `).run(
    userId,
    bookId,
    issueDate.toISOString(),
    dueDate.toISOString(),
    "issued"
  )

  db.prepare(`
    UPDATE books
    SET available = available - 1
    WHERE id=?
  `).run(bookId)

  res.json({
    message:"Book borrowed successfully"
  })

})

module.exports = router
