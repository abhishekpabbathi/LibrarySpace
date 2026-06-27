const express = require("express")
const db = require("../database/db")

const router = express.Router()

router.post("/", (req,res) => {
  const {title,author,category,quantity} = req.body

  if(!title || !author || !category || !quantity){
    return res.status(400).json({message:"All fields are required"})
  }

  db.prepare(`
    INSERT INTO books(title,author,category,quantity,available)
    VALUES(?,?,?,?,?)
  `).run(title,author,category,quantity,quantity)

  res.json({message:"Book added successfully"})
})

router.get("/", (req,res) => {
  const {search} = req.query

  let books

  if(search){
    books = db.prepare(`
      SELECT * FROM books
      WHERE title LIKE ? OR author LIKE ? OR category LIKE ?
    `).all(`%${search}%`,`%${search}%`,`%${search}%`)
  }else{
    books = db.prepare("SELECT * FROM books").all()
  }

  res.json(books)
})

router.put("/:id", (req,res) => {
  const {title,author,category,quantity,available} = req.body
  const {id} = req.params

  if(!title || !author || !category || !quantity || available === ""){
    return res.status(400).json({message:"All fields are required"})
  }

  db.prepare(`
    UPDATE books
    SET title=?, author=?, category=?, quantity=?, available=?
    WHERE id=?
  `).run(title,author,category,quantity,available,id)

  res.json({message:"Book updated successfully"})
})

router.delete("/:id", (req,res) => {
  const {id} = req.params

  db.prepare("DELETE FROM books WHERE id=?").run(id)

  res.json({message:"Book deleted successfully"})
})

module.exports = router
