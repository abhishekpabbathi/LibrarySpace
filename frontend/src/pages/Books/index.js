import {useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"
import api from "../../services/api"

const Books = () => {

  const navigate = useNavigate()

  const [books,setBooks] = useState([])
  const [search,setSearch] = useState("")

  useEffect(() => {

    api
      .get("/books")
      .then(res => setBooks(res.data))
      .catch(() => setBooks([]))

  }, [])

  const filteredBooks = books.filter(each =>
    each.title.toLowerCase().includes(search.toLowerCase()) ||
    each.author.toLowerCase().includes(search.toLowerCase()) ||
    each.category.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#f8fafc",
        padding:"50px",
        fontFamily:"Arial"
      }}
    >

      <div
        style={{
          maxWidth:"1300px",
          margin:"auto"
        }}
      >

        <button
          onClick={() => navigate(-1)}
          style={{
            padding:"11px 20px",
            background:"#2563eb",
            color:"#ffffff",
            border:"none",
            borderRadius:"12px",
            fontWeight:"600",
            cursor:"pointer",
            marginBottom:"30px",
            boxShadow:"0 4px 14px rgba(37,99,235,0.18)"
          }}
        >
          ← Back
        </button>

        <div
          style={{
            textAlign:"center",
            marginBottom:"35px"
          }}
        >

          <h1
            style={{
              fontSize:"52px",
              color:"#1e293b",
              marginBottom:"12px"
            }}
          >
            📚 Library Books
          </h1>

          <p
            style={{
              color:"#64748b",
              fontSize:"18px"
            }}
          >
            Browse, search and borrow books from the digital library.
          </p>

        </div>

        <div
          style={{
            background:"#ffffff",
            borderRadius:"20px",
            padding:"25px",
            marginBottom:"35px",
            boxShadow:"0 4px 20px rgba(0,0,0,0.05)"
          }}
        >

          <input
            type="search"
            placeholder="Search by title, author or category"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width:"100%",
              padding:"18px",
              border:"1px solid #cbd5e1",
              borderRadius:"14px",
              outline:"none",
              fontSize:"16px"
            }}
          />

        </div>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
            gap:"28px"
          }}
        >

          {filteredBooks.map(each => (

            <div
              key={each.id}
              style={{
                background:"#ffffff",
                borderRadius:"24px",
                padding:"28px",
                boxShadow:"0 8px 24px rgba(0,0,0,0.06)",
                transition:"0.3s",
                cursor:"pointer"
              }}
            >

              <div
                style={{
                  fontSize:"58px",
                  marginBottom:"18px"
                }}
              >
                📘
              </div>

              <div
                style={{
                  display:"inline-block",
                  background:"#dbeafe",
                  color:"#2563eb",
                  padding:"10px 16px",
                  borderRadius:"12px",
                  fontWeight:"700",
                  marginBottom:"18px"
                }}
              >
                📌 Book ID: {each.id}
              </div>

              <h2
                style={{
                  color:"#0f172a",
                  marginBottom:"18px",
                  fontSize:"36px"
                }}
              >
                {each.title}
              </h2>

              <p
                style={{
                  marginBottom:"14px",
                  color:"#475569",
                  fontSize:"18px"
                }}
              >
                <strong>Author:</strong> {each.author}
              </p>

              <p
                style={{
                  marginBottom:"14px",
                  color:"#475569",
                  fontSize:"18px"
                }}
              >
                <strong>Category:</strong> {each.category}
              </p>

              <p
                style={{
                  color:"#16a34a",
                  fontWeight:"700",
                  fontSize:"20px"
                }}
              >
                Available: {each.available}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  )
}

export default Books
