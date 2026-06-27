const express = require("express")

const bcrypt = require("bcryptjs")

const router = express.Router()

const db = require("../database/db")

router.post("/register", async (req,res) => {

  const {name,email,password,role} = req.body

  try{

    const existingUser = db
      .prepare("SELECT * FROM users WHERE email=?")
      .get(email)

    if(existingUser){
      return res.status(400).json({
        message:"User already exists"
      })
    }

    const hashedPassword = await bcrypt.hash(password,10)

    db.prepare(
      `
        INSERT INTO users(name,email,password,role)
        VALUES(?,?,?,?)
      `
    ).run(name,email,hashedPassword,role)

    res.json({
      message:"User registered successfully"
    })

  }catch(error){

    res.status(500).json({
      message:"Registration failed"
    })

  }

})

router.post("/login", async (req,res) => {

  const {email,password} = req.body

  try{

    const user = db
      .prepare("SELECT * FROM users WHERE email=?")
      .get(email)

    if(!user){
      return res.status(400).json({
        message:"Invalid Email"
      })
    }

    const isPasswordMatched =
      await bcrypt.compare(password,user.password)

    if(!isPasswordMatched){
      return res.status(400).json({
        message:"Invalid Password"
      })
    }

    res.json({
      message:"Login Successful",
      user:{
        id:user.id,
        name:user.name,
        email:user.email,
        role:user.role
      }
    })

  }catch(error){

    res.status(500).json({
      message:"Login failed"
    })

  }

})

module.exports = router
