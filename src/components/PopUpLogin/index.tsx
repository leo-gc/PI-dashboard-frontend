/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Container, Icon, InputLabel, Input, PopUpContainer, Button } from "./styles";

export function PopUpLogin({ onLogin }: { onLogin: (email: string, password: string) => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return <Container>
    <PopUpContainer>
      <Icon />
      <InputLabel>Login</InputLabel>
      <Input onChange={(e) => setEmail(e.target.value)} />
      <InputLabel>Senha</InputLabel>
      <Input onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={() => onLogin(email, password)}>Entrar</Button>
    </PopUpContainer>
  </Container>
}