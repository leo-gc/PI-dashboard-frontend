import { IMTLogo, Container, NavbarItem } from "./styles"


export function Navbar({ onLogout }: { onLogout: () => void }){
  return <Container>
    <IMTLogo src="/images/imt_logo.png" alt="IMT" />
    <NavbarItem>Início</NavbarItem>
    <NavbarItem style={{ marginLeft: '6%' }}>Gerenciar</NavbarItem>
    <NavbarItem style={{ marginLeft: '60%' }} onClick={onLogout}>Sair</NavbarItem>
  </Container>
}