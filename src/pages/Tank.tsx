import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/auth_context"
import { MainContainer } from "../components/MainContainer"
import { BlankSpace } from "../components/BlankSpace"
import { Navbar } from "../components/Navbar"
import { useNavigate } from "react-router-dom"

export default function Tank({ tankNumber: number }) {
  const { logout, setPopUpLogged } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged')
    console.log(isLogged)
    if (isLogged === 'false' || isLogged === null) {
      setPopUpLogged(true)
      navigate('/')
    }
  }, [setPopUpLogged, navigate])
  
  return (
    <div
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
       }}
    >
        <Navbar onLogout={logout}/>
        <BlankSpace>
          <MainContainer></MainContainer>
        </BlankSpace>
    </div>
  )
}