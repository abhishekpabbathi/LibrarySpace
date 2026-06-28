import {useState} from "react"
import {useNavigate} from "react-router-dom"
import api from "../../services/api"

const IssueBook = () => {

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"))

  const [bookId,setBookId] = useState("")
  const [success,setSuccess] = useState("")
  const [limit,setLimit] = useState(false)

  const borrowBook = async e => {

    e.preventDefault()

    try{

      await api.post("/issue",{
        userId:user.id,
        bookId
      })

      setSuccess("✅ Book borrowed successfully")
      setLimit(false)
      setBookId("")

    }catch(error){

      if(error.response?.data?.message === "Borrow limit reached"){

        setLimit(true)

      }else{

        alert("Failed to borrow book")

      }

    }

  }

  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#f8fafc",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"40px",
        fontFamily:"Arial"
      }}
    >

      <div
        style={{
          width:"100%",
          maxWidth:"620px",
          background:"#ffffff",
          borderRadius:"28px",
          padding:"45px",
          boxShadow:"0 10px 30px rgba(0,0,0,0.06)"
        }}
      >

        <button
          onClick={() => navigate(-1)}
          style={{
            padding:"10px 18px",
            background:"#2563eb",
            color:"#ffffff",
            border:"none",
            borderRadius:"12px",
            fontWeight:"600",
            cursor:"pointer",
            marginBottom:"25px"
          }}
        >
          ← Back
        </button>

        <div
          style={{
            textAlign:"center",
            marginBottom:"30px"
          }}
        >

          <div
            style={{
              fontSize:"90px",
              marginBottom:"10px"
            }}
          >
            📖
          </div>

          <h1
            style={{
              color:"#0f172a",
              fontSize:"52px",
              marginBottom:"10px"
            }}
          >
            Borrow Book
          </h1>

          <p
            style={{
              color:"#64748b",
              lineHeight:"1.8",
              fontSize:"17px"
            }}
          >
            Enter the Book ID from the Books page to borrow a book.
          </p>

        </div>

        {success !== "" && (

          <div
            style={{
              background:"#dcfce7",
              color:"#166534",
              padding:"16px",
              borderRadius:"14px",
              marginBottom:"22px",
              textAlign:"center",
              fontWeight:"700"
            }}
          >
            {success}
          </div>

        )}

        {limit && (

          <div
            style={{
              background:"#fee2e2",
              color:"#991b1b",
              padding:"20px",
              borderRadius:"16px",
              marginBottom:"25px",
              textAlign:"center"
            }}
          >

            <p
              style={{
                lineHeight:"1.8",
                marginBottom:"18px",
                fontWeight:"600"
              }}
            >
              Borrowing limit reached.
              <br />
              Please return one or more borrowed books to continue borrowing additional books.
            </p>

            <button
              onClick={() => navigate("/return")}
              style={{
                padding:"13px 22px",
                background:"#f59e0b",
                color:"#ffffff",
                border:"none",
                borderRadius:"12px",
                fontWeight:"700",
                cursor:"pointer"
              }}
            >
              📥 Go To Return Books
            </button>

          </div>

        )}

        <form
          onSubmit={borrowBook}
        >

          <label
            style={{
              display:"block",
              marginBottom:"10px",
              color:"#334155",
              fontWeight:"700",
              fontSize:"18px"
            }}
          >
            Book ID
          </label>

          <input
            type="number"
            placeholder="Enter Book ID"
            value={bookId}
            onChange={e => setBookId(e.target.value)}
            style={{
              width:"100%",
              padding:"18px",
              border:"1px solid #cbd5e1",
              borderRadius:"14px",
              marginBottom:"28px",
              fontSize:"17px",
              outline:"none"
            }}
          />

          <button
            type="submit"
            style={{
              width:"100%",
              padding:"18px",
              background:"#16a34a",
              color:"#ffffff",
              border:"none",
              borderRadius:"14px",
              fontWeight:"700",
              fontSize:"18px",
              cursor:"pointer",
              boxShadow:"0 6px 18px rgba(22,163,74,0.22)"
            }}
          >
            Borrow Book
          </button>

        </form>

      </div>

    </div>

  )
}

export default IssueBook
