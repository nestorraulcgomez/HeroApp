import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/authContext"



export const PrivateRoute = ({children}) => {

  const {user} = useContext(AuthContext)

  const location = useLocation()//devuelve la ruta en que te encuentras y las caracteristicas de esta

  localStorage.setItem('lastPath', location.pathname + location.search)

  return user.logged ? children : <Navigate to="/login"/>
}
