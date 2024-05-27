import { IMTLogo, Container, NavbarItem } from "./styles"


export function Navbar({ onLogout }: { onLogout: () => void }){
  function handleLogout() {
    localStorage.setItem('isLogged', 'false');
    if (onLogout) {
      onLogout();
    }
  }

  return <Container>
    <IMTLogo src="/images/imt_logo.png" alt="IMT" />
    <NavbarItem>Início</NavbarItem>
    <NavbarItem style={{ marginLeft: '6%' }}>Gerenciar</NavbarItem>
    <NavbarItem style={{ marginLeft: '60%' }} onClick={handleLogout}>Sair</NavbarItem>
  </Container>
}