import {useNavigate, Link} from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div
      style={{
        display:"flex",
        gap:"10px",
        marginBottom:"20px"
      }}
    >

      <button
        onClick={() => navigate(-1)}
        style={{
          padding:"10px"
        }}
      >
        Back
      </button>

      <Link to="/home">
        <button
          style={{
            padding:"10px"
          }}
        >
          Home
        </button>
      </Link>

    </div>
  )
}

export default Navbar
