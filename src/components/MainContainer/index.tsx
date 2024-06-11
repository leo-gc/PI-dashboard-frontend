import { PropsWithChildren } from "react";
import { Container } from "./styles";

export function MainContainer({ children, style = undefined }: PropsWithChildren & { style?: React.CSSProperties }) {
  return <>
    <Container style={style}>
      { children }
    </Container>
  </>
}