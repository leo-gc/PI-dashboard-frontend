/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Icon, InputLabel, Input, PopUpContainer, Button } from "./styles";

export function PopUpLogin({ onLogin }: { onLogin: () => void }) {
  function handleLogin() {
    localStorage.setItem('isLogged', 'true');
    if (onLogin) {
      onLogin();
    }
  }

  return <Container>
    <PopUpContainer>
      <Icon />
      <InputLabel>Login</InputLabel>
      <Input />
      <InputLabel>Senha</InputLabel>
      <Input />
      <Button onClick={handleLogin}>Entrar</Button>
    </PopUpContainer>
  </Container>
}