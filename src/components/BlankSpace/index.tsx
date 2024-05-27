import { PropsWithChildren } from "react";
import { Container } from "./styles";

export function BlankSpace({ children }: PropsWithChildren) {
  return <Container>
    {children}
  </Container>
}