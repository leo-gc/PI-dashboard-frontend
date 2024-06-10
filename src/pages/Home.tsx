import { useContext, useEffect } from "react";
import { BlankSpace } from "../components/BlankSpace";
import { MainContainer } from "../components/MainContainer";
import { Navbar } from "../components/Navbar";
import { PopUpLogin } from "../components/PopUpLogin";
import { AuthContext } from "../contexts/auth_context";
import { MainCharts } from "../components/MainCharts";

export default function Home() {
  const { login, logout, setPopUpLogged, popUpLogged } = useContext(AuthContext)

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged')
    console.log(isLogged)
    if (isLogged === 'false' || isLogged === null) {
      setPopUpLogged(true)
    }
  }, [setPopUpLogged])

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
            <MainCharts />
          </MainContainer>
        </BlankSpace>
        {popUpLogged && <PopUpLogin onLogin={login} />}
    </div>
  )
}