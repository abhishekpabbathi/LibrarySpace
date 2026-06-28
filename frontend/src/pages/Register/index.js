import {useState} from "react"

import {useNavigate} from "react-router-dom"

import api from "../../services/api"

const Register = () => {

  const navigate = useNavigate()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const registerUser = async e => {

    e.preventDefault()

    try{

      await api.post("/auth/register",{
        name,
        email,
        password,
        role:"student"
      })

      alert("Registration Successful")

      navigate("/login")

    }catch(error){

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      )

    }

  }

  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#f1f5f9",
        fontFamily:"Arial, sans-serif",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"40px"
      }}
    >

      <div
        style={{
          width:"100%",
          maxWidth:"520px",
          background:"#ffffff",
          borderRadius:"24px",
          padding:"40px",
          boxShadow:"0 10px 30px rgba(0,0,0,0.08)"
        }}
      >

        <div
          style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            marginBottom:"30px"
          }}
        >

          <button
            onClick={() => navigate(-1)}
            style={{
              padding:"10px 18px",
              background:"#2563eb",
              color:"#ffffff",
              border:"none",
              borderRadius:"10px",
              fontWeight:"600",
              cursor:"pointer"
            }}
          >
            ← Back
          </button>

          <h1
            style={{
              color:"#2563eb",
              fontSize:"34px"
            }}
          >
            🎓 Student Registration
          </h1>

          <button
            onClick={() => navigate("/")}
            style={{
              padding:"10px 18px",
              background:"#2563eb",
              color:"#ffffff",
              border:"none",
              borderRadius:"10px",
              fontWeight:"600",
              cursor:"pointer"
            }}
          >
            Home
          </button>

        </div>

        <div
          style={{
            textAlign:"center",
            marginBottom:"28px"
          }}
        >

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
            alt="register"
            style={{
              width:"95px",
              marginBottom:"15px"
            }}
          />

          <p
            style={{
              color:"#64748b",
              lineHeight:"1.8",
              fontSize:"16px"
            }}
          >
            Create your student account to access books, borrowing history and library services.
          </p>

        </div>

        <form
          onSubmit={registerUser}
          style={{
            display:"flex",
            flexDirection:"column",
            gap:"18px"
          }}
        >

          <div>

            <label
              style={{
                display:"block",
                marginBottom:"8px",
                color:"#334155",
                fontWeight:"600"
              }}
            >
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter Full Name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{
                width:"100%",
                padding:"15px",
                border:"1px solid #cbd5e1",
                borderRadius:"12px",
                outline:"none",
                fontSize:"15px"
              }}
            />

          </div>

          <div>

            <label
              style={{
                display:"block",
                marginBottom:"8px",
                color:"#334155",
                fontWeight:"600"
              }}
            >
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                width:"100%",
                padding:"15px",
                border:"1px solid #cbd5e1",
                borderRadius:"12px",
                outline:"none",
                fontSize:"15px"
              }}
            />

          </div>

          <div>

            <label
              style={{
                display:"block",
                marginBottom:"8px",
                color:"#334155",
                fontWeight:"600"
              }}
            >
              Password
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                width:"100%",
                padding:"15px",
                border:"1px solid #cbd5e1",
                borderRadius:"12px",
                outline:"none",
                fontSize:"15px"
              }}
            />

          </div>

          <button
            type="submit"
            style={{
              padding:"15px",
              background:"#2563eb",
              color:"#ffffff",
              border:"none",
              borderRadius:"12px",
              fontWeight:"700",
              fontSize:"16px",
              cursor:"pointer",
              marginTop:"10px"
            }}
          >
            Register Account
          </button>

        </form>

      </div>

    </div>

  )
}

export default Register
