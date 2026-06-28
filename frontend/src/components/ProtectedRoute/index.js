import {Navigate} from "react-router-dom"

const ProtectedRoute = props => {

  const {children, role} = props

  const storedUser = localStorage.getItem("user")

  if(!storedUser){
    return <Navigate to="/" />
  }

  const user = JSON.parse(storedUser)

  if(user.role !== role){
    return <Navigate to="/" />
  }

  return children
}

export default ProtectedRoute
