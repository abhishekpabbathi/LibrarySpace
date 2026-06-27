const express = require("express")

const router = express.Router()

const db = require("../db")

router.post("/", (req, res) => {

  const bookId = Number(req.body.bookId)
  const userId = Number(req.body.userId)

  if (!bookId) {

    return res.status(400).json({
      message: "Please enter a valid Book ID"
    })

  }

  db.get(
    `
    SELECT issued_books.id,
           books.title
    FROM issued_books
    JOIN books
    ON issued_books.book_id = books.id
    WHERE issued_books.book_id = ?
    AND issued_books.user_id = ?
    AND issued_books.status = 'issued'
    `,
    [bookId, userId],

    (error, issuedBook) => {

      if (error) {

        return res.status(500).json({
          message: "Database error"
        })

      }

      if (!issuedBook) {

        return res.status(404).json({
          message: "No borrowed book found with this Book ID"
        })

      }

      db.run(
        `
        UPDATE issued_books
        SET status = 'returned'
        WHERE id = ?
        `,
        [issuedBook.id],

        updateError => {

          if (updateError) {

            return res.status(500).json({
              message: "Failed to return book"
            })

          }

          db.run(
            `
            UPDATE books
            SET available = available + 1
            WHERE id = ?
            `,
            [bookId],

            () => {

              return res.json({
                message:
                `You successfully returned "${issuedBook.title}" (Book ID: ${bookId})`
              })

            }
          )

        }
      )

    }
  )

})

module.exports = router
