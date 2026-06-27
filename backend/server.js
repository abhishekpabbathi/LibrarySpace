const express = require("express")
const cors = require("cors")
require("dotenv").config()

const db = require("./database/db")

const authRoutes = require("./routes/authRoutes")
const bookRoutes = require("./routes/bookRoutes")
const issueRoutes = require("./routes/issueRoutes")
const returnRoutes = require("./routes/returnRoutes")
const historyRoutes = require("./routes/historyRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/books", bookRoutes)
app.use("/api/issue", issueRoutes)
app.use("/api/return", returnRoutes)
app.use("/api/history", historyRoutes)

app.get("/", (req,res) => {
  res.send("LibrarySpace Backend Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
