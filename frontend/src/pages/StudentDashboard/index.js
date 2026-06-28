import {useEffect,useState} from "react"
import {Link,useNavigate} from "react-router-dom"
import api from "../../services/api"

const StudentDashboard = () => {

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"))

  const [history,setHistory] = useState([])

  const [activeSection,setActiveSection] = useState("")

  useEffect(() => {

    if(user){

      api
        .get(`/history/${user.id}`)
        .then(res => setHistory(res.data))
        .catch(() => setHistory([]))

    }

  }, [])

  const logout = () => {

    localStorage.removeItem("user")

    navigate("/login")

  }

  const activeBooks =
    history.filter(each => each.status === "issued")

  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#f1f5f9",
        fontFamily:"Arial, sans-serif",
        padding:"40px"
      }}
    >

      <div
        style={{
          maxWidth:"1200px",
          margin:"auto"
        }}
      >

        <div
          style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            marginBottom:"35px",
            flexWrap:"wrap",
            gap:"15px"
          }}
        >

          <div
            style={{
              display:"flex",
              alignItems:"center",
              gap:"15px"
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

            <div>

              <h1
                style={{
                  color:"#2563eb",
                  fontSize:"38px",
                  marginBottom:"8px"
                }}
              >
                📚 LibrarySpace
              </h1>

              <p
                style={{
                  color:"#64748b"
                }}
              >
                Smart Student Library Dashboard
              </p>

            </div>

          </div>

          <button
            onClick={logout}
            style={{
              padding:"12px 22px",
              background:"#ef4444",
              color:"#ffffff",
              border:"none",
              borderRadius:"10px",
              fontWeight:"600",
              cursor:"pointer"
            }}
          >
            Logout
          </button>

        </div>

        <div
          style={{
            background:"#ffffff",
            borderRadius:"22px",
            padding:"35px",
            marginBottom:"30px",
            boxShadow:"0 5px 20px rgba(0,0,0,0.06)"
          }}
        >

          <div
            style={{
              display:"flex",
              alignItems:"center",
              gap:"25px",
              flexWrap:"wrap"
            }}
          >

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="student"
              style={{
                width:"110px"
              }}
            />

            <div>

              <h2
                style={{
                  fontSize:"34px",
                  color:"#0f172a",
                  marginBottom:"10px"
                }}
              >
                Welcome, {user?.name}
              </h2>

              <p
                style={{
                  color:"#64748b",
                  lineHeight:"1.8",
                  maxWidth:"700px"
                }}
              >
                Access library books, borrow books, return borrowed books and track your borrowing history securely.
              </p>

            </div>

          </div>

        </div>

        <div
          style={{
            display:"flex",
            gap:"20px",
            marginBottom:"35px",
            alignItems:"stretch"
          }}
        >

          <div
            onClick={() => setActiveSection("borrowed")}
            style={{
              background:
                activeSection === "borrowed"
                  ? "#60a5fa"
                  : "#eff6ff",
              color:
                activeSection === "borrowed"
                  ? "#ffffff"
                  : "#64748b",
              borderRadius:"18px",
              padding:"25px",
              cursor:"pointer",
              flex:"1",
              boxShadow:"0 8px 22px rgba(245,158,11,0.15)",
              transition:"0.3s",
              transform:
                activeSection === "history"
                  ? "scale(1.03)"
                  : "scale(1)",
              transform:
                activeSection === "borrowed"
                  ? "scale(1.03)"
                  : "scale(1)",
              boxShadow:"0 8px 22px rgba(59,130,246,0.12)",
              transition:"0.3s",
              transform:
                activeSection === "borrowed"
                  ? "scale(1.03)"
                  : "scale(1)"
            }}
          >

            <h3
              style={{
                marginBottom:"10px"
              }}
            >
              📖 Borrowed Books
            </h3>

            <h1>{activeBooks.length}</h1>

            <p
              style={{
                marginTop:"10px",
                lineHeight:"1.7"
              }}
            >
              Click to view borrowed books
            </p>

          </div>

          <div
            style={{
              background:"#d9f99d",
              color:"#365314",
              borderRadius:"18px",
              padding:"25px",
              width:"250px",
              flexShrink:"0",
              boxShadow:"0 8px 22px rgba(132,204,22,0.18)",
              transition:"0.3s"
            }}
          >

            <h3
              style={{
                marginBottom:"10px"
              }}
            >
              📚 Borrow Limit
            </h3>

            <h1>{3 - activeBooks.length} Left</h1>

            <p
              style={{
                marginTop:"10px",
                lineHeight:"1.8"
              }}
            >
              Total Limit: 3 Books
              <br />
              Remaining: {3 - activeBooks.length}
            </p>

          </div>

          <div
            onClick={() => setActiveSection("history")}
            style={{
              background:
                activeSection === "history"
                  ? "#fbbf24"
                  : "#fef9c3",
              color:
                activeSection === "history"
                  ? "#ffffff"
                  : "#78716c",
              borderRadius:"18px",
              padding:"25px",
              cursor:"pointer",
              flex:"1",
              boxShadow:"0 8px 22px rgba(59,130,246,0.12)",
              transition:"0.3s",
              transform:
                activeSection === "borrowed"
                  ? "scale(1.03)"
                  : "scale(1)"
            }}
          >

            <h3
              style={{
                marginBottom:"10px"
              }}
            >
              🕘 History Records
            </h3>

            <h1>{history.length}</h1>

            <p
              style={{
                marginTop:"10px",
                lineHeight:"1.7"
              }}
            >
              Click to view borrowing history
            </p>

          </div>

        </div>

        {activeSection === "borrowed" && (

          <div
            style={{
              background:"#ffffff",
              borderRadius:"20px",
              padding:"30px",
              marginBottom:"35px",
              boxShadow:"0 8px 24px rgba(0,0,0,0.08)",
                    transition:"0.3s",
                    cursor:"pointer"
            }}
          >

            <div
              style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                marginBottom:"25px"
              }}
            >

              <h2
                style={{
                  color:"#2563eb"
                }}
              >
                📖 Currently Borrowed Books
              </h2>

              <button
                onClick={() => setActiveSection("")}
                style={{
                  padding:"10px 18px",
                  background:"#2563eb",
                  color:"#ffffff",
                  border:"none",
                  borderRadius:"10px",
                  cursor:"pointer",
                  fontWeight:"600"
                }}
              >
                ← Back
              </button>

            </div>

            {activeBooks.length === 0 ? (

              <p
                style={{
                  color:"#64748b"
                }}
              >
                No borrowed books found.
              </p>

            ) : (

              activeBooks.map(each => (

                <div
                  key={each.id}
                  style={{
                    border:"1px solid #e2e8f0",
                    borderRadius:"14px",
                    padding:"18px",
                    marginBottom:"15px"
                  }}
                >

                  <h3
                    style={{
                      marginBottom:"12px",
                      color:"#0f172a"
                    }}
                  >
                    {each.title}
                  </h3>

                  <p><strong>📌 Book ID: {each.book_id || each.id}</strong> {each.book_id}</p>

                  <p><strong>✍️ Author:</strong> {each.author}</p>

                  <p
                    style={{
                      color:"#f59e0b",
                      fontWeight:"700"
                    }}
                  >
                    <strong>📚 Status:</strong> Borrowed
                  </p>

                </div>

              ))

            )}

          </div>

        )}

        {activeSection === "history" && (

          <div
            style={{
              background:"#ffffff",
              borderRadius:"20px",
              padding:"30px",
              marginBottom:"35px",
              boxShadow:"0 8px 24px rgba(0,0,0,0.08)",
                    transition:"0.3s",
                    cursor:"pointer"
            }}
          >

            <div
              style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                marginBottom:"25px"
              }}
            >

              <h2
                style={{
                  color:"#f59e0b"
                }}
              >
                🕘 Borrowing History
              </h2>

              <button
                onClick={() => setActiveSection("")}
                style={{
                  padding:"10px 18px",
                  background:"#f59e0b",
                  color:"#ffffff",
                  border:"none",
                  borderRadius:"10px",
                  cursor:"pointer",
                  fontWeight:"600"
                }}
              >
                ← Back
              </button>

            </div>

            {history.length === 0 ? (

              <p
                style={{
                  color:"#64748b"
                }}
              >
                No history records found.
              </p>

            ) : (

              history.map(each => (

                <div
                  key={each.id}
                  style={{
                    border:"1px solid #e2e8f0",
                    borderRadius:"14px",
                    padding:"18px",
                    marginBottom:"15px"
                  }}
                >

                  <h3
                    style={{
                      marginBottom:"12px",
                      color:"#0f172a"
                    }}
                  >
                    {each.title}
                  </h3>

                  <p><strong>📌 Book ID: {each.book_id || each.id}</strong> {each.book_id}</p>

                  <p><strong>✍️ Author:</strong> {each.author}</p>

                  <p
                    style={{
                      color:
                        each.status === "returned"
                          ? "#16a34a"
                          : "#f59e0b",
                      fontWeight:"700"
                    }}
                  >
                    <strong>📚 Status:</strong> {each.status}
                  </p>

                  <p>
                    <strong>🕘 Borrowed On:</strong>
                    {" "}
                    {new Date(each.issue_date).toLocaleString()}
                  </p>

                  <p>
                    <strong>📅 Due Date:</strong>
                    {" "}
                    {new Date(each.due_date).toLocaleString()}
                  </p>

                </div>

              ))

            )}

          </div>

        )}

        {activeSection === "" && (

          <div
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",
              gap:"25px"
            }}
          >

            <Link
              to="/books"
              style={{
                textDecoration:"none"
              }}
            >

              <div
                style={{
                  background:"#ffffff",
                  borderRadius:"20px",
                  padding:"30px",
                  textAlign:"center",
                  boxShadow:"0 8px 24px rgba(0,0,0,0.08)",
                    transition:"0.3s",
                    cursor:"pointer"
                }}
              >

                <div
                  style={{
                    fontSize:"52px",
                    marginBottom:"18px"
                  }}
                >
                  📚
                </div>

                <h2
                  style={{
                    color:"#2563eb",
                    marginBottom:"12px"
                  }}
                >
                  View Books
                </h2>

                <p
                  style={{
                    color:"#64748b",
                    lineHeight:"1.7"
                  }}
                >
                  Browse available books and search library collections.
                </p>

              </div>

            </Link>

            <Link
              to="/issue"
              style={{
                textDecoration:"none"
              }}
            >

              <div
                style={{
                  background:"#ffffff",
                  borderRadius:"20px",
                  padding:"30px",
                  textAlign:"center",
                  boxShadow:"0 8px 24px rgba(0,0,0,0.08)",
                    transition:"0.3s",
                    cursor:"pointer"
                }}
              >

                <div
                  style={{
                    fontSize:"52px",
                    marginBottom:"18px"
                  }}
                >
                  📖
                </div>

                <h2
                  style={{
                    color:"#16a34a",
                    marginBottom:"12px"
                  }}
                >
                  Borrow Book
                </h2>

                <p
                  style={{
                    color:"#64748b",
                    lineHeight:"1.7"
                  }}
                >
                  Borrow books from the digital library system.
                </p>

              </div>

            </Link>

            <Link
              to="/return"
              style={{
                textDecoration:"none"
              }}
            >

              <div
                style={{
                  background:"#ffffff",
                  borderRadius:"20px",
                  padding:"30px",
                  textAlign:"center",
                  boxShadow:"0 8px 24px rgba(0,0,0,0.08)",
                    transition:"0.3s",
                    cursor:"pointer"
                }}
              >

                <div
                  style={{
                    fontSize:"52px",
                    marginBottom:"18px"
                  }}
                >
                  📥
                </div>

                <h2
                  style={{
                    color:"#f59e0b",
                    marginBottom:"12px"
                  }}
                >
                  Return Book
                </h2>

                <p
                  style={{
                    color:"#64748b",
                    lineHeight:"1.7"
                  }}
                >
                  Return borrowed books back to the library.
                </p>

              </div>

            </Link>

          </div>

        )}

      </div>

    </div>

  )
}

export default StudentDashboard
