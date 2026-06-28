import {useState} from "react"

import {useNavigate, Link} from "react-router-dom"

import api from "../../services/api"

const AdminLogin = () => {

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

      if(user.role !== "admin"){
        alert("Unauthorized Access")
        return
      }

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      )

      navigate("/admin-dashboard")

    }catch(error){
      alert("Invalid Credentials")
    }
  }

  return (
    <div
      style={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}
    >

      <form
        onSubmit={handleLogin}
        style={{
          display:"flex",
          flexDirection:"column",
          gap:"15px",
          width:"300px"
        }}
      >

        <Link to="/home">
          <button type="button">
            Back
          </button>
        </Link>

        <h1>Admin Login</h1>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  )
}

export default AdminLogin
