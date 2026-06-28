import {Link,useNavigate} from "react-router-dom"
import {useState} from "react"
import api from "../../services/api"

const LibrarianDashboard = () => {
  const navigate = useNavigate()
  const [title,setTitle] = useState("")
  const [author,setAuthor] = useState("")
  const [category,setCategory] = useState("")
  const [quantity,setQuantity] = useState("")

  const logout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }

  const addBook = async e => {
    e.preventDefault()
    try{
      await api.post("/books",{title,author,category,quantity})
      alert("Book Added Successfully")
      setTitle("")
      setAuthor("")
      setCategory("")
      setQuantity("")
    }catch{
      alert("Failed To Add Book")
    }
  }

  return (
    <div style={{minHeight:"100vh",background:"#f8fafc",fontFamily:"Arial"}}>
      <nav style={{height:"70px",background:"#fff",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 40px",borderBottom:"1px solid #e2e8f0"}}>
        <h2 style={{color:"#16a34a"}}>📚 Librarian Dashboard</h2>
        <button onClick={logout} style={{padding:"10px 18px",background:"#ef4444",color:"#fff",border:"none",borderRadius:"8px"}}>Logout</button>
      </nav>

      <div style={{padding:"35px"}}>
        <p style={{color:"#64748b"}}>Manage books, issue books, return books and track availability.</p>

        <div style={{display:"flex",gap:"15px",flexWrap:"wrap",margin:"25px 0"}}>
          <Link to="/books"><button style={{padding:"15px",background:"#2563eb",color:"#fff",border:"none",borderRadius:"8px"}}>View Books</button></Link>
          <Link to="/issue"><button style={{padding:"15px",background:"#16a34a",color:"#fff",border:"none",borderRadius:"8px"}}>Issue Books</button></Link>
          <Link to="/return"><button style={{padding:"15px",background:"#f59e0b",color:"#fff",border:"none",borderRadius:"8px"}}>Return Books</button></Link>
        </div>

        <div style={{background:"#fff",padding:"25px",border:"1px solid #e2e8f0",borderRadius:"12px",maxWidth:"450px"}}>
          <h2>Add New Book</h2>
          <form onSubmit={addBook} style={{display:"flex",flexDirection:"column",gap:"12px"}}>
            <input placeholder="Book Title" value={title} onChange={e=>setTitle(e.target.value)} />
            <input placeholder="Author" value={author} onChange={e=>setAuthor(e.target.value)} />
            <input placeholder="Category" value={category} onChange={e=>setCategory(e.target.value)} />
            <input type="number" placeholder="Quantity" value={quantity} onChange={e=>setQuantity(e.target.value)} />
            <button type="submit" style={{padding:"12px",background:"#16a34a",color:"#fff",border:"none",borderRadius:"8px"}}>Add Book</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LibrarianDashboard
