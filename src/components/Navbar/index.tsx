import { useNavigate } from "react-router-dom"
import { IMTLogo, Container, NavbarItem } from "./styles"
import { shade } from "polished"


export function Navbar({ onLogout }: { onLogout: () => void }){
  const navigate = useNavigate()

  const url = window.location.pathname

  return <Container>
    <IMTLogo src="/images/imt_logo.png" alt="IMT" />
    <NavbarItem style={
      url === '/' ? { color: shade(0.3, '#fff') } : undefined
    } onClick={() => navigate('/')}>Início</NavbarItem>
    <NavbarItem style={{ marginLeft: '6%', color: url === '/manage' ? 
      shade(0.3, '#fff') : '' }} 
      onClick={() => navigate('/manage')}  
    >Gerenciar</NavbarItem>
    <NavbarItem style={{ marginLeft: '6%', color: url === '/artesian' ? 
      shade(0.3, '#fff') : '' }} 
      onClick={() => navigate('/artesian')}  
    >Poço</NavbarItem>
    <NavbarItem style={{ marginLeft: '60%' }} onClick={onLogout}>Sair</NavbarItem>
  </Container>
}