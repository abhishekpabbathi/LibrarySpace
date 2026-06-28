import {Link,useNavigate} from "react-router-dom"

const AdminDashboard = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("user")
    navigate("/admin-login")
  }

  return (
    <div style={{minHeight:"100vh",background:"#f8fafc",fontFamily:"Arial"}}>
      <nav style={{height:"70px",background:"#fff",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 40px",borderBottom:"1px solid #e2e8f0"}}>
        <h2 style={{color:"#dc2626"}}>Admin Dashboard</h2>
        <button onClick={logout} style={{padding:"10px 18px",background:"#ef4444",color:"#fff",border:"none",borderRadius:"8px"}}>Logout</button>
      </nav>

      <div style={{padding:"35px"}}>
        <p style={{color:"#64748b"}}>Admin can monitor library operations and access management screens.</p>

        <div style={{display:"flex",gap:"20px",flexWrap:"wrap",marginTop:"25px"}}>
          <Link to="/books"><button style={{padding:"18px",background:"#2563eb",color:"#fff",border:"none",borderRadius:"8px"}}>Manage Books</button></Link>
          <Link to="/issue"><button style={{padding:"18px",background:"#16a34a",color:"#fff",border:"none",borderRadius:"8px"}}>Issue Books</button></Link>
          <Link to="/return"><button style={{padding:"18px",background:"#f59e0b",color:"#fff",border:"none",borderRadius:"8px"}}>Return Books</button></Link>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
