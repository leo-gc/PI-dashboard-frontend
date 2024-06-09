import { useEffect, useState } from "react";
import { BlankSpace } from "../components/BlankSpace";
import { MainContainer } from "../components/MainContainer";
import { Navbar } from "../components/Navbar";
import { PopUpLogin } from "../components/PopUpLogin";

export default function Home() {
  const [popUpLogin, setPopUpLogin] = useState(false)

  const handleLogin = () => {
    setPopUpLogin(false);
  };

  const handleLogout = () => {
    setPopUpLogin(true);
  };

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged')
    console.log(isLogged)
    if (isLogged === 'false' || isLogged === null) {
      setPopUpLogin(true)
    }
  }, [])

  return (
    <div
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
       }}
    >
        <Navbar onLogout={handleLogout}/>
        <BlankSpace>
          <MainContainer/>
        </BlankSpace>
        {popUpLogin && <PopUpLogin onLogin={handleLogin} />}
    </div>
  )
}