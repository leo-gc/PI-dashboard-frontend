import { PropsWithChildren } from "react";
import { Container } from "./styles";

export function MainContainer({ children }: PropsWithChildren) {
  return <>
    <Container>
      { children }
    </Container>
  </>
}