import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/auth_context"
import { useNavigate } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { BlankSpace } from "../components/BlankSpace"
import { MainContainer } from "../components/MainContainer"
import { ArtesianChart } from "../components/ArtesianChart"

export default function Artesian() {
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
          <MainContainer>
            <ArtesianChart />
          </MainContainer>
        </BlankSpace>
    </div>
  )
}