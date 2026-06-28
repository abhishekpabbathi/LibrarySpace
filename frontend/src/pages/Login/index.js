import {useState} from "react"

import {useNavigate, Link} from "react-router-dom"

import api from "../../services/api"

import "./index.css"

const Login = () => {

  const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = async e => {

    e.preventDefault()

    try{

      const response = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      )

      const user = response.data.user

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      )

      if(user.role === "student"){
        navigate("/student-dashboard")
      }

      else if(user.role === "librarian"){
        navigate("/librarian-dashboard")
      }

      else{
        alert("Use Admin Login Page")
      }

    }catch(error){
      alert("Invalid Credentials")
    }
  }

  return (
    <div className="login-container">

      <div className="login-card">

        <Link to="/home">
          <button className="back-btn">
            ← Back
          </button>
        </Link>

        <h1 className="login-title">
          LibrarySpace
        </h1>

        <p className="login-subtitle">
          Student & Librarian Login
        </p>

        <form
          className="login-form"
          onSubmit={handleLogin}
        >

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account?
        </p>

        <Link to="/register">
          <button className="register-btn">
            Register
          </button>
        </Link>

      </div>

    </div>
  )
}

export default Login
