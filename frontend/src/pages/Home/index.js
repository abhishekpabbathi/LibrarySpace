import {Link} from "react-router-dom"

const Home = () => {

  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#f8fafc",
        fontFamily:"Arial, sans-serif"
      }}
    >

      {/* NAVBAR */}

      <nav
        style={{
          width:"100%",
          background:"#ffffff",
          padding:"18px 60px",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          position:"sticky",
          top:"0",
          zIndex:"1000",
          boxShadow:"0 2px 14px rgba(0,0,0,0.05)"
        }}
      >

        <h1
          style={{
            color:"#2563eb",
            fontSize:"32px"
          }}
        >
          📚 LibrarySpace
        </h1>

        <div
          style={{
            display:"flex",
            gap:"28px",
            alignItems:"center"
          }}
        >

          <a
            href="#features"
            style={{
              textDecoration:"none",
              color:"#475569",
              fontWeight:"600"
            }}
          >
            Features
          </a>

          <a
            href="#about"
            style={{
              textDecoration:"none",
              color:"#475569",
              fontWeight:"600"
            }}
          >
            About
          </a>

          <Link to="/login">

            <button
              style={{
                padding:"12px 22px",
                background:"#2563eb",
                color:"#ffffff",
                border:"none",
                borderRadius:"12px",
                fontWeight:"700",
                cursor:"pointer",
                boxShadow:"0 4px 14px rgba(37,99,235,0.18)"
              }}
            >
              Student Login
            </button>

          </Link>

        </div>

      </nav>

      {/* HERO SECTION */}

      <div
        style={{
          maxWidth:"1300px",
          margin:"auto",
          padding:"80px 40px"
        }}
      >

        <div
          style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            gap:"60px",
            flexWrap:"wrap"
          }}
        >

          <div
            style={{
              flex:"1"
            }}
          >

            <h1
              style={{
                fontSize:"64px",
                color:"#0f172a",
                lineHeight:"1.2",
                marginBottom:"22px"
              }}
            >
              Smart Digital Library
              <br />
              Management System
            </h1>

            <p
              style={{
                color:"#64748b",
                lineHeight:"1.9",
                fontSize:"19px",
                maxWidth:"650px",
                marginBottom:"35px"
              }}
            >
              LibrarySpace helps students access books, borrow books,
              return books, and track library activity digitally.
            </p>

            <div
              style={{
                display:"flex",
                gap:"18px",
                flexWrap:"wrap"
              }}
            >

              <Link to="/login">

                <button
                  style={{
                    padding:"16px 28px",
                    background:"#2563eb",
                    color:"#ffffff",
                    border:"none",
                    borderRadius:"14px",
                    fontWeight:"700",
                    cursor:"pointer",
                    fontSize:"16px"
                  }}
                >
                  Student Login
                </button>

              </Link>

              <Link to="/register">

                <button
                  style={{
                    padding:"16px 28px",
                    background:"#ffffff",
                    color:"#2563eb",
                    border:"2px solid #2563eb",
                    borderRadius:"14px",
                    fontWeight:"700",
                    cursor:"pointer",
                    fontSize:"16px"
                  }}
                >
                  Register as Student
                </button>

              </Link>

            </div>

          </div>

          <div
            style={{
              flex:"1",
              textAlign:"center"
            }}
          >

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt=""
              style={{
                width:"420px",
                maxWidth:"100%"
              }}
            />

          </div>

        </div>

      </div>

      {/* FEATURES */}

      <div
        id="features"
        style={{
          padding:"70px 40px"
        }}
      >
        <div
          style={{
            maxWidth:"1300px",
            margin:"auto"
          }}
        >
          <h1
            style={{
              textAlign:"center",
              marginBottom:"50px",
              color:"#0f172a",
              fontSize:"48px"
            }}
          >
            Features
          </h1>

          <div
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
              gap:"28px"
            }}
          >
            

{[
              {
                icon:"📚",
                title:"View Books",
                desc:"Students can search and view available library books."
              },
              {
                icon:"🔄",
                title:"Borrow & Return",
                desc:"Borrow and return books securely through the digital library system."
              },
              {
                icon:"📖",
                title:"History",
                desc:"Track borrowed books and complete borrowing history."
              },
              {
                icon:"🔐",
                title:"Secure Login",
                desc:"Secure  authentication and protected access."
              }
            ].map(each => (

              <div
                key={each.title}
                style={{
                  background:"#ffffff",
                  padding:"35px",
                  borderRadius:"24px",
                  boxShadow:"0 6px 24px rgba(0,0,0,0.05)",
                  textAlign:"center"
                }}
              >

                <div
                  style={{
                    fontSize:"58px",
                    marginBottom:"18px"
                  }}
                >
                  {each.icon}
                </div>

                <h2
                  style={{
                    marginBottom:"15px",
                    color:"#0f172a"
                  }}
                >
                  {each.title}
                </h2>

                <p
                  style={{
                    color:"#64748b",
                    lineHeight:"1.8"
                  }}
                >
                  {each.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* ABOUT */}

      <div
        id="about"
        style={{
          padding:"70px 40px"
        }}
      >

        <div
          style={{
            maxWidth:"1100px",
            margin:"auto",
            background:"#ffffff",
            padding:"50px",
            borderRadius:"28px",
            boxShadow:"0 6px 24px rgba(0,0,0,0.05)"
          }}
        >

          <h1
            style={{
              marginBottom:"20px",
              color:"#0f172a",
              fontSize:"44px"
            }}
          >
            About LibrarySpace
          </h1>

          <p
            style={{
              color:"#64748b",
              lineHeight:"2",
              fontSize:"18px"
            }}
          >
            A simple and secure digital library platform for educational
            institutions to manage books and borrowing workflows.
          </p>

        </div>

      </div>

      {/* FOOTER */}

      <footer
        style={{
          textAlign:"center",
          padding:"30px",
          color:"#64748b"
        }}
      >
        © 2026 LibrarySpace • Built with React, Node.js, Express & SQLite
      </footer>

    </div>

  )
}

export default Home
