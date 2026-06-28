import {useState} from "react"
import {useNavigate} from "react-router-dom"
import api from "../../services/api"

const ReturnBook = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))

  const [bookId,setBookId] = useState("")
  const [message,setMessage] = useState("")
  const [isError,setIsError] = useState(false)

  const returnBook = async e => {
    e.preventDefault()
    setMessage("")

    if(bookId.trim() === ""){
      setIsError(true)
      setMessage("Please enter a Book ID")
      return
    }

    try{
      const response = await api.post("/return",{
        bookId:Number(bookId),
        userId:user.id
      })

      setIsError(false)
      setMessage(response.data.message)
      setBookId("")
    }catch(error){
      setIsError(true)
      setMessage(error.response?.data?.message || "Unable to return book")
    }
  }

  return (
    <div style={{minHeight:"100vh",background:"#f1f5f9",display:"flex",justifyContent:"center",alignItems:"center",padding:"40px",fontFamily:"Arial"}}>
      <div style={{width:"100%",maxWidth:"650px",background:"#ffffff",borderRadius:"28px",padding:"45px",boxShadow:"0 10px 35px rgba(0,0,0,0.06)"}}>
        <button onClick={() => navigate(-1)} style={{padding:"12px 20px",background:"#2563eb",color:"#ffffff",border:"none",borderRadius:"12px",fontWeight:"700",cursor:"pointer",marginBottom:"25px"}}>
          ← Back
        </button>

        <div style={{textAlign:"center",marginBottom:"30px"}}>
          <div style={{fontSize:"80px"}}>📥</div>
          <h1 style={{fontSize:"58px",color:"#0f172a",marginBottom:"14px"}}>Return Book</h1>
          <p style={{color:"#64748b",fontSize:"18px",lineHeight:"1.8"}}>
            Enter the borrowed Book ID to return your book securely.
          </p>
        </div>

        {message !== "" && (
          <div style={{background:isError ? "#fee2e2" : "#dcfce7",color:isError ? "#991b1b" : "#166534",padding:"18px",borderRadius:"14px",marginBottom:"25px",textAlign:"center",fontWeight:"700",fontSize:"16px"}}>
            {message}
          </div>
        )}

        <form onSubmit={returnBook}>
          <label style={{display:"block",marginBottom:"10px",fontWeight:"700",color:"#334155",fontSize:"18px"}}>
            Book ID
          </label>

          <input type="number" placeholder="Enter Borrowed Book ID" value={bookId} onChange={e => setBookId(e.target.value)} style={{width:"100%",padding:"18px",border:"1px solid #cbd5e1",borderRadius:"14px",marginBottom:"28px",fontSize:"17px",outline:"none"}} />

          <button type="submit" style={{width:"100%",padding:"18px",background:"#f59e0b",color:"#ffffff",border:"none",borderRadius:"14px",fontWeight:"700",fontSize:"18px",cursor:"pointer"}}>
            Return Book
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReturnBook
