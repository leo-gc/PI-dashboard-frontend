import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/auth_context"
import { MainContainer } from "../components/MainContainer"
import { BlankSpace } from "../components/BlankSpace"
import { Navbar } from "../components/Navbar"
import { useNavigate } from "react-router-dom"
import { TankGraphs } from "../components/TankGraphs"

export default function Tank({ tankNumber }: { tankNumber: number }) {
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
            <h1>{`Reservatório ${tankNumber}`}</h1>
            <TankGraphs tankNumber={tankNumber} />
          </MainContainer>
        </BlankSpace>
    </div>
  )
}